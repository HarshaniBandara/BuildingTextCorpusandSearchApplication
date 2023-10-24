import "./App.css";
import FloatingWords from "./components/floatingwords/FloatingWords";
import MenuBar from "./components/menu_bar/MenuBar";
import PageSearch from "./components/pageSearch/PageSearch";
import SideBar from "./components/side_bar/SideBar";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>
        <Route path="/metopher-search" element={<PageSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
