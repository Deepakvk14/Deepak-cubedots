
import Building from "./Building";
import Gallery from "./Gallery";
import Floor from "./Floor";
import Location from "./Location";
import Apartment from "./Apartment";
import {Switch,Route} from "react-router-dom"

import './App.css';
import Home from "./Home"
function App() {
  return (
    <div className="App">
      <Home/>
      
                <Switch>
                    <Route exact path="/" >
                    <Building/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/gallery">
                        <Gallery/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/floor">
                        <Floor/>
                       
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/locatiion" >
                        <Location/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/apartment" >
                    <Apartment/>          
                    </Route>
                </Switch>
            
    </div>
  );
}

export default App;
