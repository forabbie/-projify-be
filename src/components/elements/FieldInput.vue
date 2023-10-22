<template>
  <vee-field
    v-model="value"
    :id="id"
    :as="as"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :class="className"
  />
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  id: String,
  data: String,
  type: String,
  name: String,
  className: String,
  as: String
})

const placeholder = props.type === 'password' ? '••••••••' : props.name

const data = ref(computed(() => JSON.parse(JSON.stringify(props.data))))

const value = ref(data)

watch(data, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    value.value = newValue
  }
})
</script>
