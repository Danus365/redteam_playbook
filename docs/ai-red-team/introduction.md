---
sidebar_position: 1
id: introduction
title: Introduction
---

The purpose of this Playbook is to standardize AI based read teaming with a proper playbook. Breakdown our methodology for dissecting and reversing AI applications in order to achieve our adversarial goals. 

What is the goal with AI Red Teaming? We consider the goals of an adversary not to be different the ones declared within the classic red team exercise goals.

Is AI red teaming like traditional red teaming? In a sense. Id like to quote Jason Haddix -

> "Everyone wants AI testing to be automated or similar to AI red teaming. Point and scan.
It’s not.
So much of it is a blend of web security and prompt injection.
The testing is slow and manual a lot of the times.
Attacks need to be hyper tailored to work for a specific businesses app.
MUCH probing goes into figuring out LAYERS of evasions to bypass guardrails and classifiers.
Red teaming and pivoting skills come into play using the models as vehicles.
Testing is SLOWER than standard web pentesting because of the non deterministic features of the models" - https://x.com/Jhaddix/status/1960507712204366263
> 

AI Red Teaming mixes the traditional Red Team operations with an extension of the AI world which mostly revolves around Context Engineering.

In the following playbook I will attempt show and explain our methodology when it comes to AI Red Teaming.

Lets talk about how we model AI Agent environments next.