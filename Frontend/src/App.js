import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from './pages/page1';
import Menu from "./components/Menu";

function App() {
  return (
    <>
    
    
    

    <BrowserRouter>
    <Menu/>

        <Routes>
          <Route index element={<p>Too lazy to make home page</p>} />
          <Route path="page1" element={<Page1/>} />

        </Routes>
      </BrowserRouter>
    
    
    
    
    
    
    </>
   


  );
}

export default App;
