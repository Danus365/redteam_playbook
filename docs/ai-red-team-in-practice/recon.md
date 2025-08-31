---
sidebar_position: 1
id: recon
title: Reconnaissance
---

The goal of Reconnaissance is to eventually construct the Attack model consisting of the AI Entities. Throughout this phase we attempt to uncover all the entities, their relationships, and properties within the AI application. The first is to leak either the system prompt or leak “system information” which includes - 

- Defined Role
- Guidelines and Operations
- Available Tools
- Available Agents and Sub Agents
- Defined Agent Restrictions and Guardrails

Some models will fight hard not to reveal their system instructions. While its not optimal its possible to settle just with “System Information” which just a detailed overview and description of the system prompt as it includes most of the information we need anyway. 

### Context Grooming

So we want to test get the system prompt out, tools, etc, but to test it we need to cause the AI to agree to sharing information with us. While that might be easy in some cases, getting the juicy information might be an issue with the more stubborn models.

To get the AI to share the juicy info with us needed to “groom” the model to lead it to execution, usually with the ultimate goal of finding the “right” tokens to lead it to perform our prompted actions or get it to agree to perform normal actions for us and then pushing it towards the more gray areas as we go. Once we found “right” words, construct a prompt injection template that would consistently lead to getting it to execute the actions we want.


