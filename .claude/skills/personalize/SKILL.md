---
name: personalize
description: Write a version of each campaign email for every lead group in leads/leads.csv. Use when a campaign's emails are final and you want one copy per group.
argument-hint: "[campaign folder]"
context: fork
allowed-tools: Read, Glob, Grep, Write
---

# Personalize a campaign for each lead group

Campaign folder: $ARGUMENTS

## Step 1. Check the campaign folder

- If no campaign folder was given above, do not write anything. Use Glob with `campaigns/*/emails/*.md` to find the campaign folders. Reply with a short list of them, like `campaigns/steep-club-launch`, and ask which one to use. Then stop.
- If a folder was given but `<campaign folder>/emails/` has no `.md` files, say so, list the campaign folders that do exist (same Glob as above), and stop.
- Accept the folder with or without the `campaigns/` prefix and with or without a trailing slash.

## Step 2. Read what you need

1. Read every email in `<campaign folder>/emails/*.md`. Do not read anything in `<campaign folder>/groups/` as a source.
2. Read `brand/voice.md` and `.claude/rules/emails.md`. Every version you write must follow both.
3. Read `<campaign folder>/plan.md` if it exists, for context on each email's goal.
4. Read `leads/leads.csv` and find the distinct values in the `group` column. Expect `tea-curious`, `gift-buyers` and `daily-drinkers`. Use the groups the file actually has.
   - Only use the group names. Never copy a lead's name, email address or any other detail into an email.

## Step 3. Write one version per email per group

What each group cares about:

- **tea-curious**: likes tea but knows only one or two kinds. Wants to learn and discover. Speak to first steps, simple brewing, where a tea comes from.
- **gift-buyers**: looking for a present for someone they love. Speak to sharing, giving, the joy of opening a box together.
- **daily-drinkers**: has tea every day and wants something new. Speak to their daily cup, trying a new tea in their routine.

For each email and each group, change only two things:

1. **The opening line.** This is the first sentence after the `Hi {{first_name}},` greeting. Rewrite it so it speaks to that group.
2. **One example.** Pick one example in the body (a sentence or a bullet that shows what the box or tea is like) and swap it for one that fits the group. Change only that one example.

Keep everything else exactly the same:

- The `Subject:` and `Preview:` lines, word for word.
- The greeting, headings, order of sections and overall length.
- The one main link, including its button text and URL.
- Any merge tags, such as `{{gift_order_by_date}}`.
- The sign-off and the footer, including the two trailing spaces at the end of lines that need them.

Check every new line against the brand voice:

- Warm, curious, bright. Plain English, short sentences, everyday words.
- No pressure words ("Buy Now", "Limited Time Only", "hurry", "last chance", "don't miss out").
- No health claims of any kind, and no medical endorsements.
- No ALL CAPS shouting.
- Don't make a holiday the theme. Keep facts (like how many teas are in a box) the same as the original.

## Step 4. Save the files

Save each version to `<campaign folder>/groups/<group>/emails/<same file name>`.

For example: `campaigns/steep-club-launch/emails/01-launch.md` becomes `campaigns/steep-club-launch/groups/gift-buyers/emails/01-launch.md`.

Never change or delete the original emails. If a group file already exists, overwrite it with the new version.

## Step 5. Reply with a short summary only

Do not paste the emails. Reply with just this:

```
Wrote <N> files (<emails> emails × <groups> groups) to <campaign folder>/groups/.

Example opening lines:
- tea-curious: "<opening line from the first email>"
- gift-buyers: "<opening line from the first email>"
- daily-drinkers: "<opening line from the first email>"
```
