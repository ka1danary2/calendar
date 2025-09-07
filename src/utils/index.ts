export const getAllDaysInMonth = (year: number, month: number): Date[] => {
	const days: Date[] = []
	const totalDays = new Date(year, month + 1, 0).getDate()

	for (let day = 1; day <= totalDays; day++) {
		days.push(new Date(year, month, day))
	}

	return days
}