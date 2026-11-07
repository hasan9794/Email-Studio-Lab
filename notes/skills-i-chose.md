# Skills I Chose

Searched skills.sh on 2026-11-07 with: "email marketing", "email sequence", "campaign plan" and "resend". GitHub numbers were checked the same day. Nothing is installed yet.

## Use these

**1. Anthropic: `anthropics/knowledge-work-plugins` (for planning and writing campaigns)**
- Skills: `campaign-plan` (3.4K installs) and `email-sequence` (3K installs). Both come in Anthropic's marketing plugin.
- Published by Anthropic's official GitHub organization. The repo has about 35,000 stars and 3,900 forks, and was updated today.
- Why: it comes from the company that makes Claude, it's actively maintained, and it covers both halves of the writing job: planning the campaign and drafting the emails.

**2. Resend: `resend/resend-skills` (for sending email)**
- Skills: `resend` (24.3K installs), plus `resend-cli` (13.9K) if I want to send from the terminal.
- Published by Resend's official GitHub organization, the same company that runs the sending service. The repo has about 210 stars and was updated yesterday.
- Why: the people who run a service know its API best and update the skill when the API changes. The star count is modest because the repo is young, but the publisher is the real company. Their `resend/email-best-practices` skill (its own repo: 8.2K installs, about 150 stars) is a good add-on for deliverability. The same skill is also included in `resend-skills`.

*Honorable mention:* `coreyhaines31/marketingskills@emails` (formerly `email-sequence`). The old `email-sequence` listing still has the most installs for "email sequence" (55.1K), but that skill was renamed to `emails` in the repo's v2.0 release (May 2026), so the old name no longer installs. Use `@emails` instead. The repo has about 59,000 stars. It's run by one person rather than a company, so I'd read the skill files before installing it.

## Avoid these

**1. `caffeinelabs/skills@extension-email-marketing`**
- It's the #1 result for "email marketing" with 30.4K installs, but its GitHub repo has only **2 stars** and 1 fork.
- Why not: that many installs with almost no stars suggests the install count is automated or inflated, not real people choosing it. The name ("extension-") also suggests it's built for that company's own platform, not for email marketing in general.

**2. `mbfinotti/partnerships-skills@joint-gtm-planning`**
- It appears in the "email marketing" search with 16.6K installs, but the repo has only **2 stars** and 1 fork. It belongs to a personal account and was created in September 2026, two months ago. The same account's `sales-skills` repo has only 3 stars.
- Why not: the same mismatch. A brand-new repo from one unknown account with five-figure installs looks like gamed popularity. It's also about partner sales planning, not email to people who signed up.

## How I decided

Before installing any skill, check these three things:

1. **Who publishes it.** Is it the official organization for the product (anthropics, resend), or an unknown personal account? Click through to the GitHub owner and make sure the name matches the real company.
2. **Whether the popularity numbers agree.** Compare install count with GitHub stars, forks and repo age. Real popularity shows up in all of them. Huge installs with a handful of stars is a red flag, because installs are easy to fake.
3. **What's actually inside.** Open the skill's `SKILL.md` and any scripts before installing. Skills can run commands and use API keys, so make sure a skill only does what it says, especially anything that touches my email-sending keys.
