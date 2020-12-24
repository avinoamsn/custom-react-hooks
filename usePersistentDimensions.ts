import { MutableRefObject, useEffect, useRef } from 'react'

import useSize from '@react-hook/size'

import { usePersistentState } from './usePersistentState'

/**
 * Persist HTML element dimensions using local storage.
 *
 * @param key the key used by usePersistentState to save to local storage
 * @param shouldSet truthy val that must eval to true to save the dimensions
 * @param defaults the default (estimated) dimensions, to minimize popping on inital load
 */
export const usePersistentDimensions: (
	key: string,
	data: unknown,
	defaults: { width: number | null; height: number | null }
) => {
	ref: MutableRefObject<null>
	dimensions: { width: number; height: number }
} = (key, data, defaults) => {
	const ref = useRef(null)
	const [width, height] = useSize(ref)
	const [dimensions, setDimensions] = usePersistentState(key, defaults)

	useEffect(() => {
		if (data) setDimensions({ width, height })
	}, [width, height])

	return { ref, dimensions }
}

export default usePersistentDimensions
