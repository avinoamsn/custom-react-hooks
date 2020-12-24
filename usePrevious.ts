import { useEffect, useRef } from 'react'

/**
 * Comparable to prevState from the old React component setState callback.
 * https://stackoverflow.com/a/53446665/5425359
 *
 * @param value the value that will be referenced
 */
export const usePrevious = (value: unknown): undefined => {
	const ref = useRef()
	useEffect(() => {
		ref.current = value as undefined
	})
	return ref.current
}
