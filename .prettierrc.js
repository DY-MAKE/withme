module.exports = {
  printWidth: 70,
  singleQuote: true,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  useTabs: false,
  endOfLine: "auto",
  importOrder: [
    "react",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^@utils/(.*)$",
    "^@apis/(.*)$",
    "^@hooks/(.*)$",
    "^@recoils/(.*)$",
    "^@pages/(.*)$",
    "^@base/(.*)$",
    "^@common/(.*)$",
    "^@components/(.*)$",
    "^@styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "@stylistic/eslint-plugin",
    "prettier-plugin-tailwindcss",
  ],
  importOrderParserPlugins: ["typescript", "decorators-legacy", "jsx"],
};
