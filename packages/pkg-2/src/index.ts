import { setLogger } from "pkg-1";
import { Effect } from "effect";

export const program = Effect.log("test").pipe(setLogger);
