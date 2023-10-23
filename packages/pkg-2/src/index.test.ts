import { Effect } from 'effect';
import { program } from '.';

test('test', () => {
  Effect.runPromise(program);
});

