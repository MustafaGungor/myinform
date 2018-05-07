import * as React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import Page from "../../Page";
const db = require('../../db/javaDB.json');

export default class Java extends React.Component<any,any>{

    /**
     * Initial values,
     * Change the state
     * @param props
     */
    constructor(props:any){
        super(props);
        this.state={
            id : 1,
            subId : undefined
        }
    }

    /**
     * Java sayfasına ait page yapısı
     * @returns {any}
     */
    render(){
        let page:any = [];
        if(this.state.subId != undefined){
            page = <Page upMenuId={this.state.id} subMenuId={this.state.subId}/>
        }else {
            page = <ListGroup>{this.subMenus(db.list)}</ListGroup>;
        }
        return  <div className="inner">{page}</div>
    }

    /**
     * Liste şeklinde ön tarafa return olunuyor
     * Bunun için reacstrap kullanıldı
     * @param {Array<any>} data
     * @returns {JSX.Element[]}
     */
    subMenus(data:Array<any>):JSX.Element[]{
        let childs : Array<any> = [];
        childs.push(<ListGroupItem active key={0}>JAVA</ListGroupItem>)
        data.forEach(function (v,i) {
            childs.push(<ListGroupItem key={i} tag={"button"}  onClick={this.onClick.bind(this)}>{v.id+ '. '+ v.name}</ListGroupItem>)
        }.bind(this))
        return childs;
    }

    /**
     * List onClick Event
     * Change the state
     * @param e
     */
    onClick(e){
        let subId = e.target.innerText.split('.')[0];
        this.setState({subId:subId});
    }
}
