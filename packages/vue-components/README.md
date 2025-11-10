# Vue Components Library

一个基于 Vue 3 + TypeScript 构建的现代化前端组件库。

## 特性

- 🎨 精美的 UI 设计
- 📦 开箱即用的高质量组件
- 🔧 TypeScript 支持
- 🎯 Vue 3 Composition API
- ⚡️ Vite 构建，快速开发体验

## 安装

```bash
npm install @multi-systems/vue-components
# 或
yarn add @multi-systems/vue-components
# 或
pnpm add @multi-systems/vue-components
```

## 快速开始

### 全局注册

```typescript
import { createApp } from 'vue'
import VueComponents from '@multi-systems/vue-components'
import '@multi-systems/vue-components/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(VueComponents)
app.mount('#app')
```

### 按需引入

```vue
<script setup lang="ts">
import { Button, Input } from '@multi-systems/vue-components'
import '@multi-systems/vue-components/style.css'
</script>

<template>
  <Button type="primary" @click="handleClick">点击我</Button>
  <Input v-model="text" placeholder="请输入内容" />
</template>
```

## 组件

### Button 按钮

基础的按钮组件，支持多种类型和尺寸。

**Props:**

- `type`: 按钮类型 - `'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'`
- `size`: 按钮尺寸 - `'small' | 'medium' | 'large'`
- `disabled`: 是否禁用
- `loading`: 是否加载中

**示例:**

```vue
<template>
  <Button type="primary" size="medium">主要按钮</Button>
  <Button type="secondary" size="small">次要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="danger" :loading="true">危险按钮</Button>
  <Button type="warning" :disabled="true">警告按钮</Button>
</template>
```

### Input 输入框

基础的输入框组件，支持多种输入类型和验证。

**Props:**

- `modelValue`: 绑定值
- `type`: 输入类型 - `'text' | 'password' | 'email' | 'number' | 'tel' | 'url'`
- `label`: 标签文本
- `placeholder`: 占位符
- `disabled`: 是否禁用
- `readonly`: 是否只读
- `required`: 是否必填
- `error`: 错误信息
- `helperText`: 辅助文本
- `maxlength`: 最大长度

**示例:**

```vue
<template>
  <Input 
    v-model="username" 
    label="用户名" 
    placeholder="请输入用户名"
    :required="true"
  />
  
  <Input 
    v-model="password" 
    type="password"
    label="密码" 
    placeholder="请输入密码"
    :error="passwordError"
  />
  
  <Input 
    v-model="email" 
    type="email"
    label="邮箱" 
    helperText="请输入有效的邮箱地址"
  />
</template>
```

## 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 代码检查
npm run lint
```

## License

MIT
