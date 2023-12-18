/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    // project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  }
}
