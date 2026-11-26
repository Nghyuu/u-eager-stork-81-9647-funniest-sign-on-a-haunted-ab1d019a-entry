import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Sign for the door of a haunted server room. One line, at most 120 chars.
const line =
  "THE GHOST IN THIS ROOM HAS ROOT. IF RACK 4 BEEPS, APOLOGIZE AND BACK AWAY SLOWLY.";

if (line.length > 120) {
  throw new Error(`entry line is ${line.length} chars, over the 120 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", "utf8");
chmodSync(outPath, 0o644);
