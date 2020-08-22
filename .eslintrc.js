/** @format */

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["prettier/@typescript-eslint", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
  },
};
