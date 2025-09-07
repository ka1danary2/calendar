<script setup lang="ts">
import TopBar from './components/TopBar.vue'
</script>

<template>
  <div>
    <TopBar
      month-name="Июнь"
      :start-week-day="9"
      :end-week-day="15"
    />
  </div>
</template>