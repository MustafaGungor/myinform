import * as React from "react";
const menu = require('./../menu.json');

export default class MainPage extends React.Component<any,any>{
    constructor(props:any){
        super(props);

    }
    render(){
        let menus = menu.menus;
        return <div className="inner">
            <header>
                <h1>Kendi öğrenmek istediklerim ve öğrenmeye çalıştığım teknolojileri not almak için oluşturduğum bir platformdur..</h1>
            </header>
            <section className="tiles">
                {this.returnSubMenus(menus)}
            </section>
        </div>
    }

    /**
     *
     * @param {Array<any>} menus
     * @returns {Array<any>}
     */
    returnSubMenus(menus:Array<any>){
        let arr:Array<any> = [];
        menus.forEach(function (element) {
            arr.push(<article key={element.id} className={element.className+' sample-count'}>
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
}