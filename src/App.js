import {Routes, Route} from "react-router-dom";
import Home from './container/Home/index';
import ActiveBids from './container/ActiveBids/index';
import PageNotFound from "container/PageNotFound";
import LogIn from "container/LogIn";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/activeBids' element={<ActiveBids/>} />
      <Route path='/login' element={<LogIn/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  );
}

export default App;
