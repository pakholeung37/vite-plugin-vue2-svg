module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:prettier/recommended"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    node: true,
  },
};
