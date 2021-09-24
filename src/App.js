import { Router,Switch,Route,Link } from "react-router-dom";
import Details from "./screens/Details/Details";
import Home from "./screens/home/Home";
export default function App(){
    return(
        
        <Switch>
            <Route exact path="/details" component={Details}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
        </Switch>
        
    )
}