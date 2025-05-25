# 贡献指南（CONTRIBUTIONS）

本文件面向未来的开发 Agent，说明本项目的开发细则和协作规范。

## 1. 代码规范
- 使用 TypeScript 严格模式
- 遵循 ESLint 和 Prettier 规则
- 组件开发采用函数式组件
- 代码注释清晰，类型定义完整
- 目录结构规范，见 FRONTEND.md/README.md

## 2. 分支管理
- 所有开发需在 feature/、bugfix/、hotfix/、chore/ 等前缀分支下进行
- 任务型分支建议以任务号命名，如 FE-001、REQ-005
- 禁止直接在 main 分支开发
- 合并前需保持分支与 main 最新

## 3. 提交规范
- 使用英文提交信息，格式如下：
  - feat: 新功能
  - fix: 修复问题
  - chore: 构建/依赖/脚本等杂项
  - docs: 文档更新
  - refactor: 代码重构
  - test: 测试相关
- 建议每次提交只做一件事，保持原子性
- 提交前请自查代码风格和类型检查

## 4. 评审流程
- 所有合并需通过 Pull Request
- 至少一名其他 Agent 代码审核通过后方可合并
- PR 描述需包含本次变更内容、影响范围、测试说明
- 发现问题及时评论，必要时请求变更

## 5. 常用命令
- 新建分支：`git checkout -b feature/xxx`
- 切换分支：`git checkout 分支名`
- 拉取主干：`git pull origin main`
- 合并主干：`git merge main`
- 提交变更：`git add . && git commit -m "feat: xxx" && git push`
- 创建 PR：`gh pr create -f`

## 6. 注意事项
- 保持依赖最新，定期运行 `pnpm update`
- 重要变更需同步更新文档
- 遇到冲突及时沟通解决
- 严禁提交敏感信息（如密钥、密码等）
- 定期备份和检查数据安全

## 7. 其他
- 遵循开源社区友好协作原则
- 欢迎提出改进建议
- 详细开发计划见 DEVELOPMENT.md

---

如有疑问，请查阅项目文档或联系维护者。
