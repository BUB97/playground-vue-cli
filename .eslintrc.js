module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  overrides: [{
    "files": ["*.vue"],
    "parser": "vue-eslint-parser"
  }],
  extends: [
    "eslint:recommended",
    "prettier",
    "tencent",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended"
  ],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    // 启用额外规则
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],

    // override configuration set by extending "eslint:recommended"
    "no-empty": "warn",
    "no-cond-assign": ["error", "always"],
    "quote-props": ["error", "as-needed", { unnecessary: true }],

    // 禁用基础配置汇总的规则
    "for-direction": "off",
    '@typescript-eslint/no-var-requires': 0,
  },
  ignorePatterns: ["dist", "node_modules", ".eslintrc.js"],
};
