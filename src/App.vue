<script setup lang="ts">
import { onMounted } from 'vue'

import { getAllDaysInMonth } from '@/utils'

import CalendarWrapper from './CalendarWrapper.vue'

onMounted(() => {
	console.log(getAllDaysInMonth(2024, 0))
})
</script>

<template>
  <div>
    <CalendarWrapper />
  </div>
</template>

<style scoped>

</style>
