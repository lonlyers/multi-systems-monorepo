# multi-systems-monorepo

A modern monorepo containing Vue 3 component library and demo applications.

## 项目结构

- **packages/vue-components** - Vue 3 组件库，包含 Button、Input 等基础组件
- **apps/component-demo** - 组件演示应用，展示所有组件的使用方法

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 构建组件库

```bash
cd packages/vue-components
pnpm build
```

### 运行演示应用

```bash
cd apps/component-demo
pnpm dev
```

访问 http://localhost:5173 查看组件演示。

## 组件库特性

- 🎨 现代化的 UI 设计
- 📦 基于 Vue 3 + TypeScript
- ⚡️ Vite 构建，快速开发
- 🔧 完整的类型支持
- 📚 详细的中文文档

## 已实现的组件

- **Button** - 按钮组件，支持多种类型、尺寸和状态
- **Input** - 输入框组件，支持验证、错误提示等功能

查看 [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) 了解更多详情。

## License

MIT