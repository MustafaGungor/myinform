import * as React from "react";
import { HashRouter as Router, Route, Link, browserHistory, Switch } from "react-router-dom";
const db = require("./menuDB.json");
import Main from "../components/Main";
import Java from "../lang/java/Java";

export default class Authorization extends React.Component<any,any>{
    render(){
        let menusX = db.menus;
        return  <Switch>
            <Route key={0} exact path="/" component={Main} />
            {this.returnRouteElements(menusX)}
        </Switch>
    }
    returnRouteElements(data:Array<any>):JSX.Element[]{
        let routes :JSX.Element[] = [];
        data.forEach(function (v,i) {
            let Elm = require('../'+ v.component);
            routes.push(<Route key={i+1} path={v.path} component={Elm.default}/>)
        })
        return routes;
    }
}