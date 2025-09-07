export interface Month {
	id: number
	name: string
	blockedDays: Day[]
}

export interface Week {
	id: number
	startDate: Day,
	EndDate: Day
}

export interface Day {
	day: Date
	y: number
	m: number
	d: number
	weekday: 0 | 1 | 2 | 3 | 4 | 5 | 6
	inCurrentMonth: boolean
	isToday: boolean
	isWeekend: boolean
}