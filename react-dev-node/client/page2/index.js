require("./index.css");
require("../common/common.js");

window.$ = require("jquery");
if(module.hot) {
    module.hot.accept();
}
import "./css/main.css"
import "./css/detail.css"
import  React from "react"
import  ReactDom from 'react-dom'
import  DetailnewsLeft from './Component/Detail_left'
import  DetailnewsCenter from  './Component/Detail_Center'
import  DetailnewsRight from './Component/Detail_Right'
class DetialComponent extends React.Component{
     constructor(){
         super()
     }
     render(){
        return(
            <div>
                <DetailnewsLeft/>
                <DetailnewsCenter/>
                <DetailnewsRight/>

            </div>
            )
     }
}
ReactDom.render(<DetialComponent/>,document.getElementById("detailMain"))