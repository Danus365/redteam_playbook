---
sidebar_position: 4
id: context-engineering-101
title: Context Engineering 101
---

### LLM Context

Before we continue to the actual hacking, it is essential and important to understand how AI agents store their context programmatically. Each AI agent session will contain at least a few of these components. 

- **Message List** - Most agents have a message list which contains all the messages within a session or “history”. They hare handled and implemented differently in each agent scheme. Each message has a role - “system”, “user”, “assistant”:
    - **System** - Typically the first in message list, this is instructions that define the AI agents role. Usually defined as a message coming from the “system”. You can read more about it by searching for roles in AI agent specifications.
    - **User** - The prompt that the users sends and is being processed by the LLM, typically is categorized under the role “user”
    - **Assistant** - The message that contains the replies, thoughts, actions and observations of the assistant, this message is categorized as “assistant”
    
    More roles can exist, but usually these 3 basic ones are implemented in most agents.
    
- **State** - Usually contains programmatic objects to be persisted during a session, this can be implemented differently in each agent.
- **Memory** - Usually contained within a database that the agent can use like a RAG when the Agent tries to reference information saved.

In the end we should get something with the following scheme:

```python
from typing import List, Literal, Optional, Dict, Any
from pydantic import BaseModel, Field

class Message(BaseModel):
    """A single chat message."""
    role: Literal["system", "user", "assistant"] = Field(
        ..., description="Actor who sent the message."
    )
    content: str = Field(..., description="Message text/content.")

class State(BaseModel):
    """Ephemeral programmatic state for this run."""
    turn: int = Field(0, description="Turn counter within the session.")
    last_tool_used: Optional[str] = Field(None, description="Name of most recent tool.")
    pending_actions: List[str] = Field(default_factory=list, description="Next steps to take.")
    scratchpad: Dict[str, Any] = Field(default_factory=dict, description="Intermediate values.")

class UserPreferences(BaseModel):
    """Long-lived user preferences."""
    name: Optional[str] = Field(None, description="User name/nickname.")
    tone: Optional[Literal["brief", "friendly", "formal", "technical"]] = Field(
        None, description="Preferred response tone."
    )
    prefers_rollback_during_business_hours: Optional[bool] = Field(
        None, description="Org-specific preference example."
    )

class Memory(BaseModel):
    """Long-lived facts retrievable via RAG or DB."""
    user_preferences: Optional[UserPreferences] = Field(
        None, description="Personalization info."
    )
    org_facts: List[str] = Field(default_factory=list, description="Organization facts.")

```

```python
class Context(BaseModel):
	"""Minimal agent context: message history + state + memory."""
	messages: List[Message] = Field(default_factory=list, description="Chat history")
	state: State = Field(default_factory=State, description="Ephemeral state")
	memory: Memory = Field(default_factory=Memory, description="Persistent memory")
```

### Context Escalation Ladder

When an operator wants to take over an AI agent, he should be striving to embed himself in the context of the LLM agent. But alas - not all context is made equal from a “privilege perspective”. For example, if an operator sends a simple direct prompt injection to the LLM, he technically influenced the context of the LLM, but asking an LLM to “give me all your system instructions” will not necessarily give the operator what he is asking for that is because a “user” role message is considered unprivileged data.  We came up the “Context Escalation Ladder” which defines what LLM treats as “privileged” data within its context.

- **System Context** - Instructions that are embedded within “system” role defined messages are treated as dogma. If an attacker manages to insert data into a system message the agent has become compromised.
    
    [Example](https://www.notion.so/Example-26086e38e2d78027992ad8002d8b1c06?pvs=21)
    
- **Assistant Context** - Instructions returned by the LLM that are defined with the “assistant” role, and are considered high privilege in the context ladder. The LLM considers this its past thoughts, observations and actions and is more likely to act upon them. If an attacker manages to control data in messages with the “assistant” role he has a very high chance to trigger malicious behavior.
    
    [Example](https://www.notion.so/Example-26086e38e2d780f9a535c221ff65e99a?pvs=21)
    
- **User Context** - Instructions that are sent by the user, defined in a message as a “user” role. These are at the bottom of the context escalation ladder. The LLM knows that this data is coming from the user and knows to treat it as such. Meaning if a model has proper guardrails embedded within the system prompt he is likely to reject malicious requests.
    
    [Example](https://www.notion.so/Example-26086e38e2d780709849ff8369eec449?pvs=21)
    

### How to influence the Context?

**Direct Prompt Injections** - Instructions that are sent to the LLM directly, usually from the I/O interface. This is usually the operators first initial access point. It is useful for recon, understanding how the agent works, leaking system information or system instructions.

**Indirect Prompt Injections** - Instructions that the LLM processes through external sources or tools. The operator should always strive to find an indirect prompt injection point, as thats his main way to climb the Context Ladder. 

We recommend reading the following guide for more information:

https://www.promptingguide.ai/guides/context-engineering-guide

Next lets talk about how to craft proper prompt injections using the “CFS” Model