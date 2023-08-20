module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:jest/recommended"],
  plugins: ["jest"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        "**/*.js", // 👋 Include all JavaScript files
      ],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 12, // Set to the appropriate ECMAScript version (e.g., 12 for ES2021)
  },
  rules: {
    // NetSuite-specific rules
    "no-undef": "off", // 🚫 Allow the use of undefined variables common in NetSuite scripts
    "no-param-reassign": "off", // 🔄 Allowing parameter reassignment is common in SuiteScript
    "no-plusplus": "off", // ➕ Allowing unary operators like '++' is common in SuiteScript

    // Best practices
    "no-unused-vars": "warn", // 🚧 Warn on unused variables
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops are discouraged in SuiteScript. Consider using for..of loops or Array methods.", // 🔄
      },
    ],

    // Coding style
    "max-len": ["error", { code: 100, ignoreComments: true, ignoreUrls: true }], // Limit line length to 100 characters 📏
    indent: ["error", 2], // Use 2 spaces for indentation
    quotes: ["error", "single"], // Enforce single quotes for consistency
    "comma-dangle": ["error", "always-multiline"], // Require trailing commas in multiline object and array literals
    "object-curly-spacing": ["error", "always"], // Enforce consistent spacing in object literals

    // Test-specific rules
    "jest/expect-expect": "error", // Ensure expectations are made in tests

    // Disable the rule that disallows 'console.log' (common in SuiteScript for debugging) 🪵
    "no-console": "off",

    // Disable the rule that requires consistent return statements (SuiteScript functions often have different return types) 🔄
    "consistent-return": "off",
  },
};
