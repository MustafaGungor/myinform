import * as React from "react";
import { Container, Row, Col, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from 'reactstrap';
import { HashRouter as Router, Route, Link, browserHistory, Switch } from "react-router-dom";
const menu = require('./menu.json');
import {debug} from "util";

export default class Main extends React.Component<any, any> {

    constructor(props:any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    render() {
        let menus = menu.menus;
        return <body>
        <div id="wrapper">
            <header id="header">
                <div className="inner">
                    <a href="index.html" className="logo">
                        <span className="symbol"><img src="images/logo.svg" alt="" /></span><span className="title">Computer Science</span>
                    </a>

                    <nav>
                        <ul>
                            <li><a href="#menu">Menu</a></li>
                        </ul>
                    </nav>

                </div>
            </header>

            <nav id="menu">
                <h2>Menu</h2>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="generic.html">Ipsum veroeros</a></li>
                    <li><a href="mypage.html">Tempus etiam</a></li>
                    <li><a href="generic.html">Consequat dolor</a></li>
                    <li><a href="elements.html">Elements</a></li>
                </ul>
            </nav>

            <div id="main">
                <div className="inner">
                    <header>
                        <h1>Kendi öğrenmek istediklerim ve öğrenmeye çalıştığım teknolojileri not almak için oluşturduğum bir platformdur..</h1>
                    </header>
                    <section className="tiles">
                        {this.returnSubMenus(menus)}
                    </section>
                </div>
            </div>

            <footer id="footer">
                <div className="inner">
                    <section>
                        <h2>Get in touch</h2>
                        <form method="post" action="#">
                            <div className="field half first">
                                <input type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div className="field half">
                                <input type="email" name="email" id="email" placeholder="Email" />
                            </div>
                            <div className="field">
                                <textarea name="message" id="message" placeholder="Message"></textarea>
                            </div>
                            <ul className="actions">
                                <li><input type="submit" value="Send" className="special" /></li>
                            </ul>
                        </form>
                    </section>
                    <section>
                        <h2>Follow</h2>
                        <ul className="icons">
                            <li><a href="#" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon style2 fa-dribbble"><span className="label">Dribbble</span></a></li>
                            <li><a href="#" className="icon style2 fa-github"><span className="label">GitHub</span></a></li>
                            <li><a href="#" className="icon style2 fa-500px"><span className="label">500px</span></a></li>
                            <li><a href="#" className="icon style2 fa-phone"><span className="label">Phone</span></a></li>
                            <li><a href="#" className="icon style2 fa-envelope-o"><span className="label">Email</span></a></li>
                        </ul>
                    </section>
                    <ul className="copyright">
                        <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </footer>

        </div>



        </body>
    }

    /**
     *
     * @param {Array<any>} menus
     * @returns {Array<any>}
     */
    returnSubMenus(menus:Array<any>){
        let arr:Array<any> = [];
        menus.forEach(function (element) {
            arr.push(<article key={element.id} className={element.className}>
									<span className="image">
										<img src={element.images} alt="" />
									</span>
                <a href={element.href}>
                    <h2>{element.name}</h2>
                    <div className="content">
                        <p>{element.description}</p>
                    </div>
                </a>
            </article>)
        })
        return arr;
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}