import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-img-element": "off", // Disable no-img-element rule
      "@typescript-eslint/no-explicit-any": "off", // Disable no-explicit-any rule
      "jsx-a11y/alt-text": "off", // Disable alt-text rule
    },
  },
];

export default eslintConfig;
