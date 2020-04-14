import React from 'react'
import { useMyHook } from '@rehmat-falcon/use-local-storage'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App