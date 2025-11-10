<template>
  <div :class="['ms-input', { 'is-disabled': disabled, 'has-error': error }]">
    <label v-if="label" :for="inputId" class="ms-input__label">
      {{ label }}
      <span v-if="required" class="ms-input__required">*</span>
    </label>
    <div class="ms-input__wrapper">
      <span v-if="$slots.prefix" class="ms-input__prefix">
        <slot name="prefix" />
      </span>
      <input
        :id="inputId"
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        class="ms-input__inner"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <span v-if="$slots.suffix" class="ms-input__suffix">
        <slot name="suffix" />
      </span>
    </div>
    <div v-if="error || helperText" class="ms-input__helper">
      <span v-if="error" class="ms-input__error">{{ error }}</span>
      <span v-else-if="helperText" class="ms-input__helper-text">{{ helperText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

export interface InputProps {
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  label?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  error?: string
  helperText?: string
  maxlength?: number
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  input: [value: string | number]
  change: [value: string | number]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const inputValue = ref(props.modelValue ?? '')
const inputId = computed(() => `ms-input-${Math.random().toString(36).substr(2, 9)}`)

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue ?? ''
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  inputValue.value = value
  emit('update:modelValue', value)
  emit('input', value)
}

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('change', value)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}
</script>

<style scoped>
.ms-input {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.ms-input__label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.ms-input__required {
  color: #ef4444;
}

.ms-input__wrapper {
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: #fff;
  transition: all 0.2s;
}

.ms-input__wrapper:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.ms-input.has-error .ms-input__wrapper {
  border-color: #ef4444;
}

.ms-input.has-error .ms-input__wrapper:focus-within {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.ms-input.is-disabled .ms-input__wrapper {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

.ms-input__prefix,
.ms-input__suffix {
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  color: #6b7280;
}

.ms-input__inner {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  color: #111827;
}

.ms-input__inner::placeholder {
  color: #9ca3af;
}

.ms-input__inner:disabled {
  cursor: not-allowed;
}

.ms-input__helper {
  font-size: 0.875rem;
}

.ms-input__error {
  color: #ef4444;
}

.ms-input__helper-text {
  color: #6b7280;
}
</style>
