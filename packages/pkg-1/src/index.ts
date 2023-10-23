import { Effect, Logger } from "effect";

export const setLogger = Effect.provide(Logger.replace(Logger.defaultLogger, Logger.none));
