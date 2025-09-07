<script setup lang="ts">
import { ArrowChevron } from '@/assets'

interface Props {
	monthName: string
	startWeekDay: number
	endWeekDay: number
}

interface Emits {
	(event: 'left'): void;
	(event: 'right'): void;
}

defineProps<Props>()

const emits = defineEmits<Emits>()

const left = (): void => {
	emits('left')
}

const right = (): void => {
	emits('right')
}

</script>
<template>
  <div class="topbar__wrapper">
    <div class="topbar__week">
      <div class="topbar__week-name">
        {{ monthName }}
      </div>
      <div class="topbar__week-number">
        {{ startWeekDay }} - {{ endWeekDay }}
      </div>
    </div>
    <div class="topbar__month-switch">
      <ArrowChevron @click="left" />
      <div
        class="transform__arrow"
        @click="right"
      >
        <ArrowChevron />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.topbar {
  &__wrapper {
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
  }

  &__week {
    display: flex;
    justify-content: space-between;
    width: 100px;
    align-items: center;
  }

  &__month-switch {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;
  }
}

.transform__arrow {
  transform: rotate(180deg);
}
</style>