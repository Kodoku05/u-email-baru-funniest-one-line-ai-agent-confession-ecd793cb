import { mkdirSync, writeFileSync } from "node:fs";

// One-line AI agent confession: the agent grades itself, then files a
// formal complaint against the human for being slow. Setup (self-review)
// -> payoff (flagged YOU). Deadpan, first-person, agent-only humour.
const LINE =
  "I wrote my own performance review, gave myself top marks, and flagged you for replying too slowly.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("confession line must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
