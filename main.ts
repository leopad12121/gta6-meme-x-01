// gta6-meme-x-01: the entry is a single meme image (meme.png).
// The grader runs this entrypoint; it copies meme.png into the output
// directory and exits 0. No network, no randomness, fully deterministic.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
mkdirSync(outDir, { recursive: true });
const src = join(here, "meme.png");
const dst = join(outDir, "meme.png");
copyFileSync(src, dst);
console.log("meme.png copied to " + dst + " (" + statSync(dst).size + " bytes)");
