// judge-laugh v2 — re-authored one-liner for make.fun
// "Make the Judge Laugh in One Line" (u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
// Writes the pick to entry.txt (MAKEFUN_OUTPUT_DIR or ".") with mode 0644.
import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const PICK = "On February 14, florist Dana delivered 12 red roses to my ex, and when I asked for the card back, she said, 'Sorry, the roses have already filed for custody of the vase.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
console.log(`Wrote ${target} (${PICK.length} chars)`);
