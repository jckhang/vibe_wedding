# 前端开发文档

## 技术栈
- Next.js 14（React框架）
- TailwindCSS（样式）
- WebSocket（实时互动）
- PWA支持（可安装到手机）

## 项目结构
```
src/
├── app/                 # 页面路由
├── components/          # 可复用组件
│   ├── common/         # 通用组件
│   ├── layout/         # 布局组件
│   └── features/       # 功能组件
├── hooks/              # 自定义Hooks
├── styles/             # 全局样式
├── utils/              # 工具函数
└── types/              # TypeScript类型定义
```

## 开发规范
1. 组件开发
   - 使用函数式组件
   - 使用TypeScript
   - 遵循React Hooks规范
   - 组件文档化

2. 样式开发
   - 使用TailwindCSS
   - 遵循移动优先原则
   - 保持设计一致性

3. 状态管理
   - 使用React Context
   - 必要时使用Redux
   - 合理使用本地状态

4. 性能优化
   - 组件懒加载
   - 图片优化
   - 缓存策略

## 开发计划
### 第一阶段：基础架构（1周）
- [ ] 项目初始化
- [ ] 路由配置
- [ ] 基础组件库
- [ ] 主题配置

### 第二阶段：核心功能（2周）
- [ ] 仪式信息模块
- [ ] 宾客互动功能
- [ ] 照片系统

### 第三阶段：优化与测试（1周）
- [ ] 性能优化
- [ ] 兼容性测试
- [ ] 用户体验优化

## 注意事项
1. 确保移动端适配
2. 注重加载性能
3. 保持代码可维护性
4. 定期代码审查
