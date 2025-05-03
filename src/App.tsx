import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/Pages/Home"
import ImageInfo from "../components/Pages/ImageInfo"
import Layout from "../components/Templates/Layout"
import SearchResult from "../components/Pages/SearchResult"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="image/:id"  element={<ImageInfo />} />
            <Route path="search"  element={<SearchResult />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
