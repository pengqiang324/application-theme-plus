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
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['vue', 'diylint']
    // rules: {
    //     'diylint/no-console-error': 2
    // }
};
