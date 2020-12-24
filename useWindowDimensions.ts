import { useEffect, useState } from 'react'

// returns the window dimensions
const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window

	return {
		width,
		height,
	}
}

/**
 * Creates an event listener subscription that updates the
 * window dimensions then returns the updated dimensions.
 *
 * https://stackoverflow.com/a/36862446/5425359
 */
export const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	)

	useEffect(() => {
		const handleResize = () => setWindowDimensions(getWindowDimensions())

		window.addEventListener(`resize`, handleResize)
		return () => window.removeEventListener(`resize`, handleResize)
	}, [])

	return windowDimensions
}
