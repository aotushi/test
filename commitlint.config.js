// module.exports = {
//   extends: ['@commitlint/config-conventional'],
// }
export default {
  extends: ['@commitlint/config-conventional'],
  // https://commitlint.js.org/#/reference-rules
  rules: {
    'subject-case': [0], //subject大小写不做校验
    // 类型美剧, git提交type必须是以下类型
    'type-enum': [
      //当前验证的错误级别
      2,
      // 在什么情况下进行校验,always标识一直进行校验
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'revert',
        'chore',
      ],
    ],
  },
}
