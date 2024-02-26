module.exports = {
  root: true,
  extends: ["withme"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/no-absolute-path": ["off"],
  },
};
