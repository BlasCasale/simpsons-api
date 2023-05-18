import { BrowserRouter, Routes, Route } from "react-router-dom"
import SimpsonsListContainer from "./components/SimpsonsListContainer/SimpsonsListContainer"
import './index.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SimpsonsListContainer/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
