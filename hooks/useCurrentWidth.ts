import { useState, useEffect } from 'react'

const getWidth = (window: Window): number =>
	window?.innerWidth ||
	(document?.documentElement && document?.documentElement.clientWidth) ||
	(document?.body && document?.body.clientWidth)

/**
 * React hook to calculate the window width.
 *
 * Source: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c
 */
const useCurrentWidth = () => {
	const [width, setWidth] = useState<number>()

	useEffect(() => {
		// timeoutId for debounce mechanism
		let timeoutId: NodeJS.Timeout | number | undefined
		const resizeListener = () => {
			clearTimeout(timeoutId as number)
			timeoutId = setTimeout(() => setWidth(getWidth(window)), 150)
		}
		window.addEventListener('resize', resizeListener)

		return () => {
			window.removeEventListener('resize', resizeListener)
		}
	}, [])

	return width
}

export default useCurrentWidth
