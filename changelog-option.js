const compareFunc = require('compare-func');
module.exports = {
    writerOpts: {
        transform: (commit, context) => {
            let discard = true;
            const issues = [];

            commit.notes.forEach(note => {
                note.title = 'BREAKING CHANGES';
                discard = false;
            });
            if (commit.type === 'feat') {
                commit.type = '✨ Features | 新功能';
            } else if (commit.type === 'fix') {
                commit.type = '🐛 Bug Fixes | Bug 修复';
            } else if (commit.type === 'perf') {
                commit.type = '⚡ Performance Improvements | 性能优化';
            } else if (commit.type === 'revert' || commit.revert) {
                commit.type = '⏪ Reverts | 回退';
            } else if (discard) {
                return;
            }

            if (commit.scope === '*') {
                commit.scope = '';
            }
            if (typeof commit.hash === 'string') {
                commit.hash = commit.hash.substring(0, 7);
            }
            if (typeof commit.subject === 'string') {
                let url = context.repository
                    ? `${context.host}/${context.owner}/${context.repository}`
                    : context.repoUrl;
                if (url) {
                    url = `${url}/issues/`;

                    commit.subject = commit.subject.replace(
                        /#([0-9]+)/g,
                        (_, issue) => {
                            issues.push(issue);
                            return `[#${issue}](${url}${issue})`;
                        }
                    );
                }
                if (context.host) {
                    commit.subject = commit.subject.replace(
                        /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g,
                        (_, username) => {
                            if (username.includes('/')) {
                                return `@${username}`;
                            }

                            return `[@${username}](${context.host}/${username})`;
                        }
                    );
                }
            }

            commit.references = commit.references.filter(reference => {
                if (issues.indexOf(reference.issue) === -1) {
                    return true;
                }

                return false;
            });
            return commit;
        },
        groupBy: 'type',
        commitGroupsSort: 'title',
        commitsSort: ['scope', 'subject'],
        noteGroupsSort: 'title',
        notesSort: compareFunc
    }
};
