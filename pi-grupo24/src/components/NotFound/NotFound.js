import {Component} from "react";

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    } 

    render(){
        return(
            <div className="NotFound">
                <h1>Error 404 Not Found</h1>
                <p>La página que buscas no existe.</p>
                <p>Anda pa allá bobo! </p>
                <div className="notFoundImg" >
                    <img src="./img/error-404-no.jpg" alt="not"/>
                </div>
                
            </div>
        )
    }
}

export default NotFound;