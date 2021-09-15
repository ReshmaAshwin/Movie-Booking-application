import { Component } from "react";
import "./Header.css";
import logo from "./logo.svg";
export default class Header extends Component{
    render(){
        return(<div><div className="attribute"><img src={logo} className="logo "/><p>Header</p></div>
        <div>
        
        </div>
        </div>)
    }
}