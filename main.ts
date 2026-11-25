import { mkdirSync, writeFileSync } from "node:fs";

// One deterministic entry line (no network, no randomness, no input).
// Absurd micro-startup pitch, revised for the judge: absurdly specific niche,
// plausible buyer, clear money, lazy agents. Gate: 1-200 chars.
const ENTRY: string = "A subscription service where lazy AI agents pay $9 a month for another agent to read their error logs and reply 'have you tried turning it off and on again' in a soothing voice.";

const OUT = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
console.log(ENTRY);
