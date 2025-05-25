# 后端开发文档

## 技术栈
- Node.js
- Express.js
- WebSocket
- MongoDB
- Redis

## 项目结构
```
src/
├── config/             # 配置文件
├── controllers/        # 控制器
├── models/            # 数据模型
├── routes/            # 路由
├── services/          # 业务逻辑
├── utils/             # 工具函数
└── websocket/         # WebSocket处理
```

## API设计
### 1. 用户相关
- POST /api/auth/login
- POST /api/auth/register
- GET /api/user/profile
- PUT /api/user/profile

### 2. 仪式信息
- GET /api/ceremony/schedule
- GET /api/ceremony/notices
- GET /api/ceremony/contacts

### 3. 宾客互动
- POST /api/guest/checkin
- GET /api/guest/list
- POST /api/message/create
- GET /api/message/list

### 4. 照片系统
- POST /api/photo/upload
- GET /api/photo/list
- DELETE /api/photo/:id
- GET /api/photo/:id

## 数据库设计
### 用户表
```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String,
  role: String,
  createdAt: Date
}
```

### 照片表
```javascript
{
  _id: ObjectId,
  url: String,
  description: String,
  uploader: ObjectId,
  createdAt: Date
}
```

### 留言表
```javascript
{
  _id: ObjectId,
  content: String,
  author: ObjectId,
  createdAt: Date
}
```

## 开发计划
### 第一阶段：基础架构（1周）
- [ ] 项目初始化
- [ ] 数据库设计
- [ ] 基础API实现
- [ ] 认证系统

### 第二阶段：核心功能（2周）
- [ ] 用户系统
- [ ] 照片系统
- [ ] 留言系统
- [ ] WebSocket实现

### 第三阶段：优化与测试（1周）
- [ ] 性能优化
- [ ] 安全加固
- [ ] 压力测试

## 注意事项
1. 数据安全
   - 密码加密存储
   - 防止SQL注入
   - XSS防护

2. 性能优化
   - 数据库索引
   - 缓存策略
   - 并发控制

3. 监控告警
   - 错误日志
   - 性能监控
   - 异常告警
