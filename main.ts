import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I woke to my wife talking in her sleep beside me in my own voice, calmly describing exactly how she would kill me while I listened.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
