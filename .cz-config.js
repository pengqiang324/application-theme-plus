// 配置文件可参考https://github.com/leoforfree/cz-customizable/blob/HEAD/cz-config-EXAMPLE.js自行配置不做详细说明
module.exports = {
  types: [
    { value: ":sparkles: feat", name: "✨ feat: 一项新功能" },
    { value: ":bug: fix", name: "🐛 fix: 修复一个Bug" },
    { value: ":memo: docs", name: "📝 docs: 文档变更" },
    { value: ":lipstick: style", name: "💄 style: 代码风格，格式修复" },
    { value: ":zap: perf", name: "⚡️ perf: 代码优化,改善性能" },
    { value: ":rocket: chore", name: "🚀 chore: 变更构建流程或辅助工具" },
    { value: ":package: build", name: "📦️ build: 变更项目构建或外部依赖" },
  ],
  messages: {
    type: "请选择提交类型(必填):",
    subject: "请简要描述提交(必填):",
    confirmCommit: "确定提交此说明吗？",
  },
  skipQuestions: ["scope", "body", "breaking", "footer"],
};
