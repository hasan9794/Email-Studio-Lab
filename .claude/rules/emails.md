---
paths:
  - "campaigns/**/emails/*.md"
---

# Email file rules

These rules apply to every email file in every campaign. Follow all of them each time you write or edit an email.

## 1. Subject and preview come first

- Line 1 must be `Subject: ...`. The whole line must be 50 characters or fewer.
- Line 2 must be `Preview: ...`. The whole line must be 90 characters or fewer.
- Count the characters before you save. If a line is too long, make it shorter.

## 2. Greet the reader by name

Greet the reader with `{{first_name}}`. For example: "Hi {{first_name}},".

## 3. One main link only

- Each email has exactly one main link.
- Write it like this: `[Button text](https://kettlebird.example/steep-club)`
- Change the button text to fit the email. Keep the link the same.
- Do not add any other links in the body.

## 4. End with the sign-off, then the footer

Every email ends with our sign-off from `brand/voice.md`, exactly as written there:

Warmly,
Hasan
Founder, Kettlebird Tea

Right after the sign-off, add this two-line footer:

You're getting this because you joined the Kettlebird Tea waitlist.
Kettlebird Tea, {{company_address}} · Unsubscribe: {{unsubscribe_url}}

Write the sign-off and footer as plain text. Do not put them inside a code block. Nothing comes after the footer.
