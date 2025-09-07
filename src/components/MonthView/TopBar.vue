<script setup lang="ts">
interface Props {
	monthName: string
	startWeekDay: number
	endWeekDay: number
}

defineProps<Props>()
</script>
<template>
  <div class="topbar__wrapper">
    <div class="topbar__week">
      "
      <div class="topbar__week-name">
        {{ monthName }}
      </div>
      <div class="topbar__week-number">
        {{ startWeekDay }} - {{ endWeekDay }}
      </div>
    </div>
    <div class="topbar__month-switch">
    </div>
  </div>
</template>