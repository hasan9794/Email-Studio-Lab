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

## 2a. Merge tags

Only use these merge tags:

- `{{first_name}}`, `{{company_address}}`, `{{unsubscribe_url}}`: filled in by the email tool.
- `{{gift_order_by_date}}`: the real gift order-by date. Replace it by hand with a confirmed date before the email is sent.

To add a new tag, add it to this list first.

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

## 5. Keep line breaks

In Markdown, lines next to each other merge into one line. When lines must stay on separate lines, end each one except the last with two spaces. This applies to:

- the sign-off ("Warmly," and "Hasan")
- the first footer line
- a bold heading with text right under it, like a tea name and its brewing line

Do not let your editor strip these trailing spaces.

## 6. Inclusive and consistent

- Don't assume every reader celebrates a holiday. Mention a date, like 25 December, as delivery timing. Don't make it the theme of the subject line.
- Keep facts the same in every email in a campaign, such as how many teas come in a box.
