//require("!style-loader!css-loader!./index.css") ;

window.$ = require("jquery");
if(module.hot) {
    module.hot.accept();
}
import "./public/css/main.css"
import "./public/css/newComponent.css"

var React = require('react');

var ReactDOM = require('react-dom');
import ComonentHeader from './public/components/header';
import ComonentBody from './public/components/body';
import  Comonentfooter from './public/components/footer'

class Index extends React.Component{

    render(){
        return(
            <div className="main">
                <ComonentHeader/>
                <ComonentBody/>
                <Comonentfooter/>
            </div>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('main'));