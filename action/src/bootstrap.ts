import { setSourceMapsSupport } from "node:module";

setSourceMapsSupport(true, { nodeModules: true });

await import("./main.js");
