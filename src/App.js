import MainHome from "./components/mainh";
import Navbar from "./components/Nav";
import {BrowserRouter as Router,Route,Switch , useLocation} from 'react-router-dom'
import MainPro from "./components/mainp";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();
  // const location = useLocation();
  const [cur,setcur] = useState(0);
  return (

    <div className="App">
      <Navbar cur = {cur} />
      <AnimatePresence>
      <Switch location={location} key = {location.key}>
        <Route exact path= '/'>
          <div className="Main">
            <MainHome setc = {setcur} />
          </div>
        </Route>
        <Route path='/projects'>
            <MainPro  setc = {setcur}/>
        </Route>
        <Route path='/contact'>
            <Contact  setc = {setcur}/>
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
