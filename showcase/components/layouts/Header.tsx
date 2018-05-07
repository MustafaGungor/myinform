import * as React from "react";
export default class Header extends React.Component<any,any>{
    render(){
        return  <header id="header">
            <div className="inner">
                <a href="#/" className="logo">
                    <span className="symbol"><img src="images/logo.svg" alt="" /></span><span className="title">Computer Science</span>
                </a>
                <nav>
                    <ul>
                        <li><a href="#menu">Menu</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    }
}