import {Routes, Route} from "react-router-dom";
import Home from './container/Home/index';
import About from './container/About/index';
import PageNotFound from "container/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  );
}

export default App;
