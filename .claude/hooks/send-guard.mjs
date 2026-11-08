#!/usr/bin/env node
// PreToolUse guard for the Resend MCP server.
// Only lets email go to @resend.dev test addresses or to MY_EMAIL.
// Exit 0 = allow. Exit 2 = block (the reason on stderr is shown to Claude).

const ALWAYS_BLOCK = new Set([
  "send-broadcast",
  "create-automation",
  "send-inbox-draft",
  "send-new-inbox-email",
]);
const CHECK_RECIPIENTS = new Set(["send-email", "send-batch-emails"]);

function block(reason) {
  process.stderr.write(`Blocked by send-guard: ${reason}\n`);
  process.exit(2);
}

// Pull the bare address out of "Name <a@b.com>" and normalise case.
function bareAddress(value) {
  const s = String(value).trim();
  const m = s.match(/<([^>]+)>/);
  return (m ? m[1] : s).trim().toLowerCase();
}

// to/cc/bcc can be a string, a comma-separated string, or an array.
function listAddresses(field) {
  if (field == null) return [];
  const items = Array.isArray(field) ? field : String(field).split(",");
  return items.map((x) => String(x).trim()).filter(Boolean);
}

let raw = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  let input;
  try {
    input = JSON.parse(raw);
  } catch {
    block("could not read the tool call, so it was stopped to be safe.");
  }

  const fullName = String(input.tool_name || "");
  const tool = fullName.replace(/^mcp__resend__/, "");
  const args = input.tool_input || {};

  if (ALWAYS_BLOCK.has(tool)) {
    block(`${tool} can reach whole lists of people, so it is never allowed here.`);
  }

  if (!CHECK_RECIPIENTS.has(tool)) process.exit(0);

  const myEmail = (process.env.MY_EMAIL || "").trim().toLowerCase();
  const isAllowed = (addr) =>
    addr.endsWith("@resend.dev") || (myEmail !== "" && addr === myEmail);

  // send-email has to/cc/bcc at the top level. send-batch-emails has a list of emails.
  const emails =
    tool === "send-batch-emails"
      ? Array.isArray(args.emails) ? args.emails : Array.isArray(args) ? args : []
      : [args];

  if (emails.length === 0) block(`${tool} has no emails to check, so it was stopped to be safe.`);

  for (const email of emails) {
    const recipients = ["to", "cc", "bcc"].flatMap((f) => listAddresses(email?.[f]));
    if (recipients.length === 0) block(`an email in ${tool} has no "to" address to check.`);
    for (const r of recipients) {
      const addr = bareAddress(r);
      if (!isAllowed(addr)) {
        block(`"${addr}" is not allowed. Only @resend.dev test addresses and your own email can receive mail.`);
      }
    }
  }

  process.exit(0);
});
