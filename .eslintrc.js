module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:diylint/recommended'
        // 'qszr'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['diylint', 'vue'],
    rules: {
        // 'diylint/no-console-error': 2
        eqeqeq: [2, 'always', { null: 'ignore' }]
    }
};
