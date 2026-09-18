import { getSourceMapsSupport } from "node:module";
import process from "node:process";

process.setSourceMapsEnabled(true);

console.error("source-map support:", getSourceMapsSupport());

await import("./main.js");
