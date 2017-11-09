/**
 * Created by ANN on 2017/8/7.
 */
import  React from 'react';
import ReactDOM from 'react-dom';



export default class Detail_left extends React.Component{
    constructor(){
        super()
        var this_ = this
        var news = ""
      /*  fetch('/api/user/newsDetailLeft', {
            method: 'post',//方法
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                //参数类型
            },

            //参数
        })
            .then(response => response.json())//后台数据解析
            .then(function (data) {
                console.log(data);


            })
            .catch(function (error) {
                console.log('Request failed', error);
            })*/
       /* $.ajax({
            url:"/api/user/newsDetailLeft",
            async:false
        }).done(function (data) {
            news = data[0].data

        })*/

        $.ajax({
            url:"/api/user/newsDetailLeft",

            type:"post",
            async:false
        }).done(function(data){

            console.log( $.type(data))
            news = data[0].data
            //_this.setState({newsData:data})
        })

        this.state ={
            newsLeft:news
        }
    }


    componentDidMount(){

    }

    render(){
        return(
            <div className="DetailleftComponent">
                   <div className="hotnewsTitle">热门新闻</div>

                <ul className="newsListDetail">
               { this.state.newsLeft.map((val,index)=>{
                        return (
                            <li key={index} className="newsListDetailSon"><a>{val.longtitle}</a></li>
                        )

                })
                }
                </ul>
            </div>
        )
    }
}