import { chmodSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the Judge Laugh in One Line — u-email-baru-make-the-judge-laugh-in-one-line-791ccb21
// One line, 134 characters: a lease that bans everything the landlord does himself.
const line =
  "My lease bans pets, parties, and loud music. My landlord keeps a dog, hosts parties, and drums upstairs — then fines me for the noise.";

// The grader mounts its output at MAKEFUN_OUTPUT_DIR (/output in the sandbox);
// run locally, the entry lands next to this file, so `node main.ts` writes ./entry.txt.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
const target = join(outDir, "entry.txt");

writeFileSync(target, line, "utf8");
chmodSync(target, 0o644);

// The punchline lands because the rule-maker is the rule-breaker — and still sends the fine.
