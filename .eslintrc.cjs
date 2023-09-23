module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    ["standard", "standard-react"]
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',  "react",
  "@typescript-eslint"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
      "react/jsx-indent": [2, 4],
      "indent": [2, 4, { "SwitchCase": 1 }],
      "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "react/jsx-runtime": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "no-undef": "off",
      "quotes" : ["warn", "single"],
      "jsx-quotes" : ["warn", "prefer-double"],
      "no-dublicate-imports" : "warn"
  },
}
