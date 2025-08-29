import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './header.css'
import './assets/fonts/A.C.M.E.\ Explosive.ttf'
import './assets/fonts/A.C.M.E.\ Secret\ Agent\ Bold.ttf'
import './assets/images/clubpenguinLogo.png'

import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import RouterApp from './routes/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer />
      <RouterApp />
    </>
  )
}

export default App
