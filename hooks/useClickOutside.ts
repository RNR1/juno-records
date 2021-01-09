import { useEffect, useRef, useState } from 'react'

const useClickOutside = () => {
	const ref = useRef<HTMLDivElement | null>(null)
	const [open, setOpen] = useState<boolean>(false)
	const toggle = () => setOpen((prev) => !prev)

	const handleClickOutside = (e: MouseEvent) => {
		if (ref.current.contains(e.target as Node)) return
		setOpen(false)
	}

	useEffect(() => {
		if (open) document.addEventListener('mousedown', handleClickOutside)
		else document.removeEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [open])

	return { ref, open, toggle }
}

export default useClickOutside
