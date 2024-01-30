module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:prettier/recommended',
        // 'plugin:@next/next/recommended',
    ],
    plugins: ['react'],
    rules: {
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        // 'tailwindcss/no-custom-classname': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/ban-types': 'off',
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
                arrowParens: 'always',
                semi: false,
                endOfLine: 'auto',
            },
        ],
    },
    ignorePatterns: [
        'dist',
        '**/*.js',
        '**/*.cjs',
        '**/*.json',
        'node_modules',
    ],
    settings: {
        // tailwindcss: {
        //   callees: ['classnames', 'clsx', 'ctl', 'cva', 'tw', 'twStyle'],
        //   tags: ['tw', 'twStyle'],
        // },
        'import/parsers': {
            [require.resolve('@typescript-eslint/parser')]: [
                '.ts',
                '.tsx',
                '.d.ts',
            ],
        },
        react: {
            version: 'detect',
        },
    },
}