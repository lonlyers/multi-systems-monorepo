<template>
  <button
    :class="['ms-button', `ms-button--${type}`, `ms-button--${size}`, { 'is-disabled': disabled, 'is-loading': loading }]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="ms-button__loading">⟳</span>
    <span class="ms-button__content">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'medium',
  disabled: false,
  loading: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.ms-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
}

.ms-button--small {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
}

.ms-button--medium {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.ms-button--large {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
}

.ms-button--default {
  background-color: #fff;
  border-color: #d1d5db;
  color: #374151;
}

.ms-button--default:hover:not(.is-disabled) {
  background-color: #f9fafb;
  border-color: #9ca3af;
}

.ms-button--primary {
  background-color: #3b82f6;
  color: #fff;
}

.ms-button--primary:hover:not(.is-disabled) {
  background-color: #2563eb;
}

.ms-button--secondary {
  background-color: #6b7280;
  color: #fff;
}

.ms-button--secondary:hover:not(.is-disabled) {
  background-color: #4b5563;
}

.ms-button--success {
  background-color: #10b981;
  color: #fff;
}

.ms-button--success:hover:not(.is-disabled) {
  background-color: #059669;
}

.ms-button--danger {
  background-color: #ef4444;
  color: #fff;
}

.ms-button--danger:hover:not(.is-disabled) {
  background-color: #dc2626;
}

.ms-button--warning {
  background-color: #f59e0b;
  color: #fff;
}

.ms-button--warning:hover:not(.is-disabled) {
  background-color: #d97706;
}

.ms-button.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.ms-button.is-loading {
  cursor: wait;
}

.ms-button__loading {
  display: inline-block;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.ms-button__content {
  display: inline-flex;
  align-items: center;
}
</style>
