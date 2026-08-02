import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  test: {
    environment: 'node',
    // Unit tests only, and that is the point: `npm test` runs with no database,
    // no network and no fixtures, so it stays fast enough to run on every save
    // and cannot fail for an environmental reason.
    //
    // This used to also glob `tests/integration/**`, a directory that has never
    // existed. An include pattern matching nothing is worse than no pattern —
    // it reads as coverage that is present, and a green run says nothing about
    // the layer it appears to cover. Removed rather than filled, because
    // filling it needs a live Postgres and therefore a decision about how CI
    // gets one; that decision has not been made, and inventing a directory to
    // justify a glob would be backwards.
    //
    // When database-dependent tests are written: add the directory, restore the
    // glob here, and give it its own script so `npm test` keeps its guarantee.
    // Until then, database-backed behaviour is covered by `npm run test:e2e`
    // against a built app.
    include: ['tests/unit/**/*.test.ts'],
    exclude: ['tests/e2e/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/lib/**/*.ts'],
      exclude: ['src/lib/db/generated-types.ts'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
