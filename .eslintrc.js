module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "plugins": [

  ],
  "rules": {
    "comma-style": [2, "last"],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "no-debugger": 1,
    "no-unused-vars": 0,
    // "comma-dangle": [2, "always-multiline"],
    "no-const-assign": 1,
    "no-var": 1,
    "indent": ["error", 2],
    "no-whitespace-before-property": 1,
    "object-curly-spacing": ["error", "always"],
    "space-before-blocks": ["error", "always"],
    "object-shorthand": ["error", "always"],
    "quote-props": ["warn", "as-needed"],
    "no-array-constructor": 1,
    "no-new-object": 1,
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "prefer-const": 2,
    "prefer-template": 1,
    "prefer-spread": 2,
    "prefer-rest-params": 2,
    "padded-blocks": ["error", "never"],
    "eqeqeq": ["error", "always"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": false } ],
    "no-loop-func": ["error"],
    "dot-notation": ["error"],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "space-in-parens": ["error", "never"],
    "space-unary-ops": ["error", { "words": true, "nonwords": false }],
    "camelcase": ["error", { "properties": "never" }],
    "array-bracket-spacing": ["error", "never"],
    "semi": ["error", "never"],
  }
}
