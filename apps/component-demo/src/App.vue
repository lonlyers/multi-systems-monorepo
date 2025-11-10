<script setup lang="ts">
import { ref } from 'vue'
import { Button, Input } from '@multi-systems/vue-components'

const username = ref('')
const password = ref('')
const email = ref('')
const loading = ref(false)
const buttonDisabled = ref(false)

const handlePrimaryClick = () => {
  alert('主要按钮被点击!')
}

const handleSubmit = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    alert(`表单提交:\n用户名: ${username.value}\n密码: ${password.value}\n邮箱: ${email.value}`)
  }, 2000)
}
</script>

<template>
  <div class="demo-container">
    <header class="demo-header">
      <h1>Vue 组件库演示</h1>
      <p>基于 Vue 3 + TypeScript 构建的现代化组件库</p>
    </header>

    <main class="demo-main">
      <!-- Button 演示 -->
      <section class="demo-section">
        <h2>Button 按钮组件</h2>
        <div class="demo-group">
          <h3>按钮类型</h3>
          <div class="button-group">
            <Button type="default">默认按钮</Button>
            <Button type="primary" @click="handlePrimaryClick">主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="success">成功按钮</Button>
            <Button type="danger">危险按钮</Button>
            <Button type="warning">警告按钮</Button>
          </div>
        </div>

        <div class="demo-group">
          <h3>按钮尺寸</h3>
          <div class="button-group">
            <Button type="primary" size="small">小型按钮</Button>
            <Button type="primary" size="medium">中型按钮</Button>
            <Button type="primary" size="large">大型按钮</Button>
          </div>
        </div>

        <div class="demo-group">
          <h3>按钮状态</h3>
          <div class="button-group">
            <Button type="primary" :disabled="true">禁用按钮</Button>
            <Button type="primary" :loading="loading" @click="handleSubmit">
              {{ loading ? '加载中...' : '点击加载' }}
            </Button>
          </div>
        </div>
      </section>

      <!-- Input 演示 -->
      <section class="demo-section">
        <h2>Input 输入框组件</h2>
        
        <div class="demo-group">
          <h3>基础输入框</h3>
          <div class="input-group">
            <Input 
              v-model="username" 
              label="用户名" 
              placeholder="请输入用户名"
              :required="true"
              helperText="用户名用于登录系统"
            />
          </div>
        </div>

        <div class="demo-group">
          <h3>密码输入框</h3>
          <div class="input-group">
            <Input 
              v-model="password" 
              type="password"
              label="密码" 
              placeholder="请输入密码"
              :required="true"
              helperText="密码长度至少8位"
            />
          </div>
        </div>

        <div class="demo-group">
          <h3>邮箱输入框</h3>
          <div class="input-group">
            <Input 
              v-model="email" 
              type="email"
              label="邮箱" 
              placeholder="example@email.com"
              helperText="用于接收系统通知"
            />
          </div>
        </div>

        <div class="demo-group">
          <h3>禁用状态</h3>
          <div class="input-group">
            <Input 
              modelValue="这是禁用的输入框"
              label="禁用输入框" 
              :disabled="true"
            />
          </div>
        </div>

        <div class="demo-group">
          <h3>错误状态</h3>
          <div class="input-group">
            <Input 
              modelValue="invalid@"
              label="邮箱" 
              placeholder="请输入邮箱"
              error="请输入有效的邮箱地址"
            />
          </div>
        </div>
      </section>

      <!-- 表单示例 -->
      <section class="demo-section">
        <h2>表单示例</h2>
        <div class="form-demo">
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
            :required="true"
          />
          <Input 
            v-model="email" 
            type="email"
            label="邮箱" 
            placeholder="example@email.com"
          />
          <div class="form-actions">
            <Button type="primary" size="large" :loading="loading" @click="handleSubmit">
              {{ loading ? '提交中...' : '提交' }}
            </Button>
            <Button type="secondary" size="large">取消</Button>
          </div>
        </div>
      </section>
    </main>

    <footer class="demo-footer">
      <p>© 2024 Multi-Systems Monorepo - Vue Components Library</p>
    </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.demo-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.demo-header {
  text-align: center;
  color: white;
  margin-bottom: 3rem;
}

.demo-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.demo-header p {
  font-size: 1.25rem;
  opacity: 0.9;
}

.demo-main {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-section {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.demo-section h2 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e5e7eb;
}

.demo-group {
  margin-bottom: 2rem;
}

.demo-group:last-child {
  margin-bottom: 0;
}

.demo-group h3 {
  font-size: 1.25rem;
  color: #374151;
  margin-bottom: 1rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.input-group {
  max-width: 400px;
}

.form-demo {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.demo-footer {
  text-align: center;
  color: white;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.demo-footer p {
  opacity: 0.8;
}
</style>
