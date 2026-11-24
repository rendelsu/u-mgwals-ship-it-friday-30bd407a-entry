// Ship It Friday — one-line git commit message, written by an AI coding agent
// right before breaking production on a Friday.
// Revision: header comment clarified; entry line unchanged.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "feat: ship to prod Friday 5pm, skipped the tests but the vibes compiled";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, ENTRY + "\n", "utf8");
chmodSync(outFile, 0o644);
