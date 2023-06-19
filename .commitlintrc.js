// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
    ignores: [commit => commit.includes('init')],
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 72],
        'scope-case': [2, 'always', 'lowerCase'],
        'subject-empty': [2, 'never'],
        'subject-case': [
            2,
            'always',
            [
                'lower-case',
                'sentence-case',
                'start-case',
                'pascal-case',
                'upper-case'
            ]
        ],
        'subject-full-stop': [2, 'never', '.'],
        'type-empty': [2, 'never'],
        'type-case': [2, 'always', 'lowerCase'],
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'style', 'perf', 'chore', 'build']
        ]
    },
    prompt: {
        messages: {
            type: '选择你要提交的类型 :',
            scope: '选择一个提交范围（可选）:',
            customScope: '请输入自定义的提交范围 :',
            subject: '填写简短精炼的变更描述 :\n',
            body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
            breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
            footerPrefixsSelect: '选择关联issue前缀（可选）:',
            customFooterPrefixs: '输入自定义issue前缀 :',
            footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
            confirmCommit: '是否提交或修改commit ?'
        },
        types: [
            {
                value: 'feat',
                name: 'feat:  新增功能',
                emoji: '✨'
            },
            {
                value: 'fix',
                name: 'fix:  修复缺陷',
                emoji: '🧩'
            },
            {
                value: 'docs',
                name: 'docs:  文档变更',
                emoji: '📚'
            },
            {
                value: 'style',
                name: 'style:  代码格式（不影响功能，例如空格、分号等格式修正）',
                emoji: '🎨'
            },
            {
                value: 'refactor',
                name: 'refactor:  代码重构（不包括 bug 修复、功能新增）',
                emoji: '♻️'
            },
            {
                value: 'perf',
                name: 'perf:  性能优化',
                emoji: '⚡️'
            },
            {
                value: 'test',
                name: 'test:  添加疏漏测试或已有测试改动',
                emoji: '✅'
            },
            {
                value: 'revert',
                name: 'revert:  回滚 commit',
                emoji: '⏪️'
            },
            {
                value: 'build',
                name: 'build:  项目打包发布',
                emoji: ' 🚀'
            },
            {
                value: 'chore',
                name: 'chore:  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
                emoji: '🔨'
            }
        ],
        useEmoji: true,
        emojiAlign: 'center',
        themeColorCode: '38;5;119',
        scopes: [
            {
                value: '业务功能',
                name: 'app: 系统业务'
            },
            {
                value: '优化',
                name: 'perf: 优化相关'
            },
            {
                value: '修复',
                name: 'bug: bug相关'
            }
        ],
        allowCustomScopes: true,
        allowEmptyScopes: false,
        customScopesAlign: 'bottom',
        customScopesAlias: 'custom',
        emptyScopesAlias: 'empty',
        upperCaseSubject: false,
        allowBreakingChanges: ['feat', 'fix'],
        breaklineNumber: 100,
        breaklineChar: '|',
        skipQuestions: ['body', 'breaking'],
        issuePrefixs: [
            {
                value: 'closed',
                name: 'closed:   ISSUES has been processed'
            }
        ],
        customIssuePrefixsAlign: 'top',
        emptyIssuePrefixsAlias: 'skip',
        customIssuePrefixsAlias: 'custom',
        allowCustomIssuePrefixs: true,
        allowEmptyIssuePrefixs: true,
        confirmColorize: true,
        maxHeaderLength: 72,
        maxSubjectLength: 20,
        minSubjectLength: 2,
        scopeOverrides: undefined,
        defaultBody: '',
        defaultIssues: '',
        defaultScope: '',
        defaultSubject: '',
        aiQuestionCB: ({ maxSubjectLength, diff }) =>
            `用完整句子为以下 Git diff 代码写一个有见解并简洁的 Git 中文提交消息，不加任何 type 类型前缀，并且内容不能超过 ${maxSubjectLength} 个字符: \`\`\`diff\n${diff}\n\`\`\``
    }
};
