import { ref } from 'vue'

import type { Day } from '@/types'



interface UseGetMonthOptions {
    year: number
    month: number
    fillTo42: boolean
}

interface UseGetMonthReturn {
    days: Day[]
    leading: number
    trailing: number
    firstDate: Date
    lastDate: Date
    todayIndex: number | -1
}

export const useGetMonth = (options: UseGetMonthOptions): UseGetMonthReturn => {
    const { year, month, fillTo42 } = options
    const today = new Date()

    const first = new Date(year, month, 1)
    const last = new Date(year, month + 1, 0)

    const total = ref<number>(31)

    const setStartDay = (): void => {
        if (fillTo42) {
            total.value = 42
        }
        else {
            total.value = 
        }


    }
}