import { useEffect, useRef, useState } from 'react'

const useClickOutside = (event: keyof DocumentEventMap = 'mousedown') => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const toggle = () => setOpen(prev => !prev)

  const handleClickOutside: EventListener = e => {
    if (ref.current?.contains(e.target as Node)) return
    setOpen(false)
  }

  useEffect(() => {
    document.addEventListener(event, handleClickOutside)

    return () => {
      document.removeEventListener(event, handleClickOutside)
    }
  }, [open, event])

  return { ref, open, toggle }
}

export default useClickOutside
