import { mkdirSync, writeFileSync } from "node:fs";

// One line (138 characters), roasting a smart fridge:
// its firmware update, its camera, and its opinions about the milk.
// Built from two parts so the line is assembled explicitly.
const PART_1 =
  "My smart fridge updated its firmware at 3 a.m., scanned my milk,";
const PART_2 =
  " and emailed me a lecture on expiry dates like a snitch with an ice maker.";
const LINE = PART_1 + PART_2;

// Guard: the entry must stay exactly one line of 138 characters.
if (LINE.length !== 138) {
  throw new Error(`entry line must be 138 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
