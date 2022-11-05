import { useState, useEffect } from "react"

/**
 * function for delaying in change state and return delayed state
 * @param {String} searchTerm input search value
 * @param {Number} delay time in milliseconds
 */


function useDebounce(searchTerm,delay) {
    const [delayedValue,setDelayedValue]=useState(searchTerm)
    useEffect(() => {
        const timerId= setTimeout(() => {
            setDelayedValue(searchTerm)
      }, delay);
      return () => {
        clearTimeout(timerId)
      }
    }, [searchTerm,delay])
    
    return delayedValue
}

export default useDebounce