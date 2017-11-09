/**
 * Created by ANN on 2017/8/7.
 */
/**
 * Created by ANN on 2017/8/7.
 */
/**
 * Created by ANN on 2017/8/7.
 */
import  React from 'react';
import ReactDOM from 'react-dom';



export default class Detail_Right extends React.Component{
    constructor(){
        super()
        var newsRight=""
        $.ajax({
            url:"/api/user/newsDetailRight",

            type:"post",
            async:false
        }).done(function(data){


            newsRight = data[0].results
            //_this.setState({newsData:data})
        })

        this.state ={
            newsRight:newsRight
        }
    }

    render(){
        return(
            <div className="DetailRightComponent">
              <div className="rightTitle">新闻视频</div>

                    <ul className="rigntUi">
                        {
                            this.state.newsRight.map((val,index)=>{
                                return(
                                     <li key={index}>
                                        <div className="imgLeft">
                                            <img src={val.fields.pic160x90}/>
                                        </div>
                                        <div className="textRight">

                                            <a>  {val.fields.title}</a>
                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>

            </div>
        )
    }
}