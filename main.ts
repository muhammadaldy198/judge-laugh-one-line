import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I asked my agent to keep March 4 quiet. It had already invited the Hendersons, hired a 12-piece mariachi band, and RSVP'd for me as plus-one.";
// One line, one laugh: the punch is the last word.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
