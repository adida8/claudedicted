# Claude Dicted — first free session (English) · brief v0.1

**Format:** 60-min LinkedIn Live · **Audience:** non-technical founders, operators, BD/marketing folks who've never built anything with Claude or code · **Date:** TBD · **Status:** scaffolding — names + curriculum + promo plan below; open Qs at the bottom.

## The curriculum already exists — it's your folder structure

You don't need to invent material. The whole talk **is** a guided tour of the workspace you've built over ~6 months. Show the screen, walk through the files, narrate the *why*. Audience walks away with a template they can copy in 30 minutes after the call.

Here's the spine, mapped to the 5-section session structure.

### Folder pattern the session teaches

```
~/Google Drive/My Drive/Claude/      ← single source of truth, synced across laptops
├── CLAUDE.md                        ← master instruction file (read every session)
├── ABOUT ME/
│   ├── about-me.md                  ← identity: who you are
│   ├── writing-style.md             ← rules: how to write back to you
│   ├── coding-conventions.md        ← rules: how to build for you
│   └── claude-code-global.md        ← global Claude Code behaviour
├── memory/
│   ├── MEMORY.md                    ← the index
│   ├── etsy-store.md / partnerhub.md / jimmy.md / gym.md / wealthlens.md / ...
│   │                                ← one short context file per project
│   ├── glossary.md                  ← people, terms, recurring nouns
│   ├── people/  context/  projects/ ← deeper shards when one file isn't enough
│   ├── SESSION_LOG_*.md             ← session histories
│   └── session-snapshot-SKILL.md    ← the "save session" / "sync memory" skill
├── Listo / PartnerHub / Etsy automated store / Gym / Jimmy / KLIKZ /
│   WealthLens / La Daganeria / ...  ← one folder per project, assets + docs
├── Scheduled/                       ← agentic recurring tasks (the "agent" piece)
└── _shelved/                        ← parked work, preserved without clutter
```

That's a personal AI agent. Six months of compounding context, structured so any fresh session is fully briefed in seconds.

## Five session beats, with exact on-screen content

| Min | Section | What's on screen | What you say |
|---|---|---|---|
| 0–10 | **The problem — starting from zero every time** | Open a fresh AI chat. Ask it something work-related. Watch it answer like it just met you. | "You've used AI hundreds of times and it still doesn't know who you are, what you do, what your projects are, or how you write. That's not a model problem — it's a setup problem." |
| 10–20 | **The concept — what an agent actually is** | Side-by-side: a generic chat (left) vs your Claude session with the Drive folder mounted (right). Same prompt, two answers. | "An agent isn't a model. It's a model + the memory you give it + the rules you write down + the tools you wire up. Today I'll show you mine." |
| 20–45 | **Live build on screen** | Walk the audience through creating: (1) the Drive folder, (2) `CLAUDE.md` at the root, (3) `ABOUT ME/about-me.md` + `writing-style.md`, (4) `memory/MEMORY.md` index + one project file. Then mount the folder in Claude. | Build with them. Narrate every choice. Show your real CLAUDE.md as a finished example, then the audience writes their stripped-down version live. |
| 45–55 | **The "after" demo** | Open a fresh chat with the new folder mounted. Ask the same questions you opened the session with. Watch the model now know who they are. | "Same question. Same model. Different setup. This is the only thing that changed." |
| 55–60 | **What's next** | A single slide with: (a) the GitHub or Notion link with the starter folder, (b) the next session's date, (c) the LinkedIn CTA. | "Copy my folder. Use it. Come back next week and I'll show you how to add agentic tasks that run while you sleep." |

## Session names + hooks — pick one

Top of mind, ordered by hook strength:

1. **"How I gave Claude a brain (and you can too in 30 minutes)"** — concrete promise, transformation, time-bound. Strong LinkedIn hook.
2. **"Stop starting from zero. Build a personal AI agent in one hour."** — names the pain in five words. The verb "stop" works on LinkedIn.
3. **"The folder that turned Claude into my chief of staff."** — narrative, ownership-coded, parasocial.
4. **"From AI tourist to AI operator — a 60-minute build."** — identity-shift framing, attracts operators specifically.
5. **"Your AI doesn't know who you are. Let's fix that — live."** — the live-event tension. Direct address.
6. **"The non-developer's guide to building a personal AI agent."** — search-friendly, evergreen, but a touch generic.
7. **"One folder. One hour. A Claude that knows your business."** — rule-of-three, concrete deliverable.

**My pick: #1** as the title, #2 as the subtitle. Together they cover transformation + pain + time-bound promise.

## Branding — minimal, ships today

Don't over-design the first session. Three assets:

1. **A 1080×1080 event card** for the LinkedIn Live setup: serif headline (the chosen session name), small Claude Dicted lockup bottom-left, date/time bottom-right. Cream paper + navy ink, single flame accent on the headline's first word. Re-uses the OddsPrimer brand palette so you're not starting from zero.
2. **A 1280×720 thumbnail / OG image** for the LinkedIn post: same headline, your face left of frame, "Free · 60 min · Live" badge bottom-right.
3. **One end-slide template** for the "what's next" beat — the call-to-action card. Same lockup, big arrow, one link.

Visual register: same as OddsPrimer's editorial direction (warm cream, navy, flame, hairline rules, Source Serif headlines, no emoji). Borrow it for now; differentiate later if Claude Dicted becomes its own brand.

## Promotion plan — 10-day LinkedIn arc

| Day | Post | Goal |
|---|---|---|
| −10 | Announcement post: the title + 3-line promise + date + register link. Pin to profile. | Capture interest |
| −7 | "Why I started doing this" — 3-paragraph LinkedIn post. Personal. Why a non-dev built this. | Anchor identity |
| −5 | Carousel: "5 ways AI fails non-technical people" → CTA = the live session | Pain reframe |
| −3 | 60-sec reel: screen recording of fresh-chat-vs-folder-mounted demo. The "before/after" in 60 seconds. | Drive registrations |
| −1 | "Tomorrow at 18:00 CET. Come build a brain for Claude." Short, punchy. Stories + post. | Last-chance reminder |
| 0 | LIVE — go live 5 minutes early, narrate the room filling. | The session itself |
| +1 | "What we built yesterday" recap post + the starter folder link in comments | Drive non-attendees to the asset |
| +3 | One short clip from the live: the "after" moment. Quotable, shareable. | Reach the people who missed it |

Six warm-up posts, the live, three follow-ups. Roughly 30 min per post. Total ~4–5 hours of prep over 10 days.

## What's needed from you to ship

1. **Pick the session name** (or override with your own).
2. **Pick the date.** I'd push for a Tuesday or Wednesday, 18:00 CET — captures the European after-work window and the US East-coast lunch.
3. **Decide what the "starter folder" is** that you give attendees. Recommend a pared-down version of your Drive root: `CLAUDE.md` (stripped of your specific projects), `ABOUT ME/about-me.md` (template), `memory/MEMORY.md` (empty index with comment headers). Three files, total <100 lines. They forfeit the value if you give them too much.
4. **Confirm you want to record + edit the live for evergreen reposting** (YouTube + LinkedIn native upload after) — it doubles the ROI of the session and a single live becomes a 6-month asset.

Tell me which name you're going with and pick a date, and I'll produce the event card + LinkedIn announcement post + the starter folder template as the next package.
