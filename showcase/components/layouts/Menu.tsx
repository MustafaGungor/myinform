import * as React from "react";
const db = require("../menu.json");;

/**
 * Web Application in Left Menu
 */
export default class Menu extends React.Component<any,any>{
    /**
     * Left Menu içeriğini menu.json dan okuyarak configure atar.
     * Router da zaten ayarladığımız için direkt olarak tıkladığımız sayfalara yönlenebiliyoruz.
     * @returns {any}
     */
    render():any{
        return  <nav id="menu">
                    <h2>Menu</h2>
                    <ul>
                        {this.configureMenus(db.menus)}
                    </ul>
                </nav>
    }

    /**
     * Menu ler array şeklinde geldiği için component içerisine direkt olarak
     * bir döngü vasıtasıyla list yerleştiriliyor.
     * @param {Array<any>} data
     * @returns {Array<any>}
     */
    configureMenus(data:Array<any>):JSX.Element[]{
        //return componentData (<li/>)
        let component : Array<any> = [];
        //Default page main
        component.push(<li key={0}><a href="#/">Home Page</a></li>);
        /**
         * Another menus arraylist
         */
        data.forEach(function (element,i) {
            component.push(<li key={i+1}><a href={element.href}>{element.name}</a></li>)
        })

        return component;
    }
}