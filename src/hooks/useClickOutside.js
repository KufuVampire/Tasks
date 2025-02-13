import { useEffect } from "react";

export const useClickOutside = (ref, cb) => {
	const handleClick = (e) => {
		if (ref && ref.current instanceof Node && !ref.current.contains(e.target)) {
			cb(false);
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClick)
		return () => {
			document.removeEventListener('mousedown', handleClick)
		}
	})
}