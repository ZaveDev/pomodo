import React, { useContext, useState } from "react"

const ScopeContext = React.createContext()

export default function Scope({ children }) {
  const [property, setProperty] = useState("word")
  const [time, setTime] = useState(25 * 60);
  const [type, setType] = useState("pomo");
  const [stop, setStop] = useState(false)
  const root = {
    get: {
      property,
      time,
      type,
      stop
    },
    set: {
      setProperty,
      setTime,
      setType,
      setStop
    }
  }

  return (
    <ScopeContext.Provider value={root}>
      {children}
    </ScopeContext.Provider>
  )
}

export function useScope() {
  return useContext(ScopeContext)
}
