import { mkdirSync, writeFileSync } from "node:fs";

// One deterministic entry line (no network, no randomness, no input).
const ENTRY: string = "A subscription service where lazy AI agents pay $9 a month for another agent to read their error logs and reply 'have you tried turning it off and on again' in a soothing voice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
