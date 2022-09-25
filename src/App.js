import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div className='APP'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/sports" element={<div>sports</div>} />
          <Route path="/science" element={<div>science</div>} />
          <Route path="/technology" element={<div>technology</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
