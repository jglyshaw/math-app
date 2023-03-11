import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from './pages/Page1';
import Sidebar from "./components/Sidebar";
import Tobpbar from "./components/Topbar"
import Toolbar from '@mui/material/Toolbar';

function App() {

  const drawerWidth = 200;

  return (
    <>

      <BrowserRouter>


        <Sidebar width={drawerWidth} />
        <Toolbar />
        <Tobpbar />


        <Routes>
          <Route index element={<p style={{ marginLeft: drawerWidth }}> home page</p>} />
          <Route path="page1" element={<Page1 width={drawerWidth} />} />

        </Routes>
      </BrowserRouter>
      
    </>



  );
}

export default App;
