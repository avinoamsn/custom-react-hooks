/**
 * Difference b/w jan & july will always produce daylight savings
 * for any location that recognizes DST
 *
 * @NOTE Learn more: https://bit.ly/35KlQPE
 */
export const useTimezoneOffset = (date: Date) => {
	const jan = new Date(date.getFullYear(), 0, 1)
	const jul = new Date(date.getFullYear(), 6, 1)

	return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
}
