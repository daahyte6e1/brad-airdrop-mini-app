import { useState } from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count] = useState(0)

  return (
    <>
      {/*  */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      </div>
    </>
  )
}

export default App
