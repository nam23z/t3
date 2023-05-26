import {Routes, Route} from "react-router-dom";
import Home from './container/Home/index';
import About from './container/About/index';
import PageNotFound from "container/PageNotFound";
import LogIn from "container/LogIn";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<LogIn/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  );
}

export default App;
