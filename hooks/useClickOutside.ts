import { useEffect, useRef, useState } from 'react'

const useClickOutside = (event: keyof DocumentEventMap = 'mousedown') => {
	const ref = useRef<HTMLDivElement | null>(null)
	const [open, setOpen] = useState<boolean>(false)
	const toggle = () => setOpen((prev) => !prev)

	const handleClickOutside = (e: MouseEvent) => {
		if (ref.current.contains(e.target as Node)) return
		setOpen(false)
	}

	useEffect(() => {
		if (open) document.addEventListener(event, handleClickOutside)
		else document.removeEventListener(event, handleClickOutside)

		return () => {
			document.removeEventListener(event, handleClickOutside)
		}
	}, [open])

	return { ref, open, toggle }
}

export default useClickOutside
