/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'public/**',
      'app/**',
      'components/**',
      'lib/**',
      'messages/**',
      'supabase/**',
      '*.ts',
    ],
  },
  {
    files: ['*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
]

export default config
