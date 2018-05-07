import * as React from "react";
import {Label} from "reactstrap";

/**
 * Üst menüler anasayfada bulunan menüler alınıyor
 */
const upMenu = require("auth/menuDB.json");
/**
 * Alt menüler sayfaya entegre ediliyor
 */
const subMenuJava = require("db/javaDB.json");
const subMenuReact = require("db/reactDB.json");
const subMenuPhp = require("db/phpDB.json");
const subMenuPython = require("db/pythonDB.json");
const subMenuWiLi = require("db/windowslinuxDB.json");
const subMenuHtmlCss = require("db/htmlcssDB.json");
const subMenuOracle = require("db/oracleDB.json");
const subMenuMySQL = require("db/mysqlDB.json");
const subMenuAndroid = require("db/androidDB.json");
const subMenuType = require("db/typescriptDB.json");
const subMenuAlgoritma = require("db/algoritmaDB.json");
const subMenuJenkins = require("db/jenkinsDB.json");

export default class Page extends React.Component<any,any>{
    /**
     * Sub menüler üst menüye bağlı id ler ile eşleştiriliyor
     * @type {{upId: number; menu: any}[]}
     */
    subMenus = [
        {upId:1,menu:subMenuJava},
        {upId:2,menu:subMenuReact},
        {upId:3,menu:subMenuPhp},
        {upId:4,menu:subMenuPython},
        {upId:5,menu:subMenuWiLi},
        {upId:6,menu:subMenuHtmlCss},
        {upId:7,menu:subMenuOracle},
        {upId:8,menu:subMenuMySQL},
        {upId:9,menu:subMenuAndroid},
        {upId:10,menu:subMenuType},
        {upId:11,menu:subMenuAlgoritma},
        {upId:12,menu:subMenuJenkins}
        ];

    /**
     * Initial Values
     * @param props
     */
    constructor(props:any){
        super(props);
        this.state = {}
    }

    /**
     *
     * @returns {any}
     */
    render():any{
        return this.returnSelectPage(this.props.upMenuId,this.props.subMenuId);
    }

    /**
     * Hangi sayfadan gelindiği ve altmenüden hangi sayfa gösterileceği burada
     * ayıklanıyor
     * @param {number | string} upMenuId
     * @param {number | string} subMenuId
     */
    returnSelectPage(upMenuId:number , subMenuId:number | string){
        let component:any = [];
        upMenu.menus.forEach(function (menu:any,idx:number) {
            if(upMenuId == menu.id){
                component = this.fixSubMenus(this.subMenus[upMenuId-1].menu,subMenuId);
            }
        }.bind(this));
        return component;

    }

    /**
     * Alt menüler üst menüye return ediliyor
     * Hangi menüden geldiği burada ayıklanacak
     * @param {number | string} subMenuId
     */
    fixSubMenus(menu:any,subMenuId: string){
        let subMenu:any=[];
        menu.list.forEach(function (menu:any,idx:number) {
            if(idx+1 == parseInt(subMenuId)){
                subMenu.push(<div>
                    <Label>{menu.name}</Label><hr/>
                    <div>
                        {menu.expression}
                    </div>
                </div>)
            }
        })
        return subMenu;
    }
}
