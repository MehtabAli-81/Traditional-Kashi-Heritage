import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  globalIgnores([".next/**", "out/**", "node_modules/**", "_next/**", "_not-found/**", "about/**", "cart/**", "checkout/**", "contact/**", "images/**", "order-confirmation/**", "privacy/**", "product/**", "returns/**", "shipping/**", "shop/**", "terms/**"]),
]);
