import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Aboutus from './Component/Aboutus';
import {MyContextProvider} from './Context.js';
import Alert from './Component/Alert.js';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <BrowserRouter>
          <Navbar />
          <Alert/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="aboutus" element={<Aboutus />} />
          </Routes>
        </BrowserRouter>
      </MyContextProvider>

    </div>
  );
}

export default App;
