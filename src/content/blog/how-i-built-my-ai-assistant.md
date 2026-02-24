---
title: 'How I Built My AI Assistant: OpenClaw, Kimi K2.5, and the Blog That Tested Everything'
description: 'A technical breakdown of setting up an OpenClaw agent on Proxmox, running Kimi K2.5 via OpenRouter, and deploying a blog as the first real test of autonomous capabilities.'
pubDate: 'Feb 24 2025'
heroImage: '../../assets/blog-placeholder-1.jpg'
category: 'AI'
tags: ['OpenClaw', 'Kimi K2.5', 'OpenRouter', 'Proxmox', 'LLM Infrastructure', 'Automation']
readingTime: 6
---

A few weeks ago I decided to build my own AI assistant. Not a chatbot wrapper or a copilot extension - a proper agent that could run tasks, write code, monitor systems, and actually *do* things. This post is about how that happened, what worked, what didn't, and what building this very blog taught me about the gap between AI demos and real-world deployment.

## The Goal

I wanted an agent that could:
- Run code and terminal commands
- Read and write files on my local systems
- Search the web when it needed context
- Post to my Discord, potentially other channels
- Handle long-running tasks without my supervision
- Write blog posts and commit them to git

Basically, I wanted something closer to an autonomous developer than a chat interface. And I wanted it running on my own infrastructure.

## The Infrastructure Stack

### Proxmox VM

I spun up an Ubuntu 22.04 VM on my Proxmox cluster. Specs: 4 vCPU, 8GB RAM, 40GB disk. Nothing fancy, but enough to run Node.js applications and handle concurrent tasks. The VM sits on my internal network with outbound internet access.

### OpenClaw

OpenClaw is the agent runtime. It provides:
- Session management and conversation history
- Tool calling infrastructure (file system, shell, web, etc.)
- Gateway daemon for persistent background operations
- Plugin system for extending capabilities

Installation was straightforward: `npm install -g openclaw`. The Gateway runs as a systemd service, which means it survives reboots and I can check logs with `journalctl`.

### The Model: Kimi K2.5 via OpenRouter

I chose Kimi K2.5 (Moonshot AI's model) for a few reasons:
- Excellent long-context handling (256k tokens)
- Good coding capabilities
- Fast enough for interactive use
- Priced reasonably via OpenRouter

OpenRouter acts as a unified API gateway, which means I can switch models without reconfiguring the agent. The setup is just an API key and a model string in the config.

### Discord Integration

I use Discord as my primary interface. The OpenClaw Discord plugin lets me:
- DM the agent directly for private work
- Add it to channels for collaborative debugging
- Use threads to keep conversations organized

Configuration required a bot token from Discord's developer portal, and the Gateway handles the WebSocket connection and message routing.

## What I Had to Do Manually

Despite the "autonomous" goal, plenty required my intervention:

**Initial setup**: Installing Node.js, configuring npm permissions, setting environment variables for API keys. The agent couldn't bootstrap itself because it didn't exist yet.

**Security decisions**: Which directories should it access? Should I give it sudo? (I didn't.) What about network access to internal services? These required human judgment.

**Credential management**: Discord tokens, OpenRouter keys, GitHub personal access tokens. I stored these in the Gateway config manually.

**Skill installation**: The agent can install skills from ClawHub, but someone had to write the skills first. I wrote a blog-posting skill and installed web development skills manually.

**Debugging build failures**: When the GitHub Actions workflow failed (Node version mismatches, Astro beta issues), the agent identified the problems but I had to interpret the errors and decide on fixes.

## What the Agent Handled Well

Once running, it took over significant portions of the work:

**Sub-agent orchestration**: For this blog project, it spawned separate sub-agents for setup, design, features, and deployment. This kept context clean and allowed parallel work streams.

**File operations**: Creating Astro components, editing CSS, writing configuration files. No more `vim` sessions for boilerplate.

**Git operations**: Committing changes, pushing to GitHub, managing remotes. It even force-pushed when replacing the existing repo (with my permission).

**Research and synthesis**: It read the Astro documentation, examined the existing repo structure, and synthesized solutions without me pasting links.

**Iterative debugging**: When builds failed, it read error logs, modified files, and re-committed. Three iterations on the GitHub Actions workflow before success.

## The Blog as First Test

This blog was the first substantial project. Requirements:
- Astro blog starter
- Custom design system with dark mode
- Categories, tags, search
- Social sharing buttons
- GitHub Pages deployment
- WCAG AA accessibility

The agent handled:
- Installing the Astro template
- Setting up Pagefind search
- Creating 12+ components
- Writing CSS custom properties for theming
- Configuring GitHub Actions
- Committing and pushing

I handled:
- Deciding on the stack (Astro vs alternatives)
- Approving design direction (minimal vs bold)
- Setting repository secrets
- Force-push approval for repo replacement
- Final verification the site actually deployed

## Lessons Learned

**Context limits are real**: Even with 256k context, we had to use sub-agents for distinct phases (setup, design, features, deploy). Each agent got a clean slate, which prevented context pollution.

**Skills matter**: The difference between "write me a blog post" and "use the bearup-blog skill to write a post" is significant. Skills encode procedural knowledge that the model doesn't have natively.

**Debugging loops are valuable**: The agent's ability to read build logs, identify issues, and retry is more useful than perfect first attempts. Most of my value was saying "yes, try that" rather than typing the fixes myself.

**Trust but verify**: I never gave it unbounded system access. Every shell command got logged, every file change got committed to git (recoverable), and destructive operations required explicit approval.

## What's Next

The blog is live. The agent is running. Now I'm testing:
- Automated heartbeat tasks (periodic checks for new content)
- RSS monitoring for research (when I get blogwatcher or similar set up)
- Scheduled content generation
- Multi-channel publishing (beyond just the blog)

The infrastructure is solid. The real work now is building the workflows that make this more than a demo.

---

*This post was written collaboratively with my OpenClaw agent. It generated the content; I reviewed, edited, and hit publish.*
