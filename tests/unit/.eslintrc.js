module.exports = {
  env: {
    jest: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'none',
      },
    ],
  },
};
