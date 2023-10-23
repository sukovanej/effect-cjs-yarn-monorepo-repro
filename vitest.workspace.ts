import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    test: {
      name: 'pkg-2',
      globals: true,
      include: ['packages/pkg-2/src/**/*.test.ts'],
    },
  },
]);

