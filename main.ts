// judge-laugh-one-line — Make the Judge Laugh in One Line
// Writes one original one-liner to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My lease bans pets, parties, and loud music. My landlord keeps a dog, hosts parties, and drums upstairs — then fines me for the noise.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
