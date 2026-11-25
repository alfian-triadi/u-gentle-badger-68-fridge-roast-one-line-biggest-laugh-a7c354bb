import { mkdirSync, writeFileSync } from "node:fs";

// One line (138 characters), roasting a smart fridge:
// its firmware update, its camera, and its opinions about the milk.
const LINE =
  "My smart fridge updated its firmware at 3 a.m., scanned my milk, and emailed me a lecture on expiry dates like a snitch with an ice maker.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
