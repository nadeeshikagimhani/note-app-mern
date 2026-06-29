import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import NoteCreate from "./pages/NoteCreate"
import NoteDetails from "./pages/NoteDetails"

const App = () => {
  return (
    <div data-theme="cupcake">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<NoteCreate/>}/>
        <Route path="/note/:id" element={<NoteDetails/>}/>
      </Routes>
    </div>
  )
}

export default App