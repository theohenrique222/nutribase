<template>
  <div class="flex flex-col gap-1">
    <label class="text-sm font-semibold">{{ label }}</label>

    <InputNumber
      v-if="type === 'number'"
      v-model="model"
      class="w-full"
      inputClass="w-full"
    />

    <Dropdown
      v-else-if="type === 'select'"
      v-model="model"
      :options="options"
      optionLabel="label"
      optionValue="value"
      placeholder="Selecione"
      class="w-full"
    />

    <InputText v-else v-model="model" class="w-full" />
  </div>
</template>

<script>
export default {
  props: ['label', 'modelValue', 'type', 'options'],
  emits: ['update:modelValue'],
  computed: {
    model: {
      get() { return this.modelValue },
      set(val) { this.$emit('update:modelValue', val) }
    }
  }
};
</script>