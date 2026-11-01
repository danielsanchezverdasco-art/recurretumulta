import { configDefaults, defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

// Los tests de scripts/teu-monitor usan node:test (se ejecutan con `node --test`), no vitest.
export default mergeConfig(
  viteConfig,
  defineConfig({ test: { exclude: [...configDefaults.exclude, "scripts/teu-monitor/**"] } }),
);
