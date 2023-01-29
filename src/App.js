import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home'
import About from './About';
import Project from './Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Components/Logo/Logo';


function App() {
  return (
    <>
      <div className='main'>
        <Logo />

        
          <BrowserRouter>
            <Routes>


              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="project" element={<Project />} />

            </Routes>
          </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
