import * as React from "react"
require('./Login.scss')
const icon = require('../resources/loginIcon.jpg');

type Props = {}
type State = {}


class Login extends React.PureComponent<Props, State> {
    state: State = {}
    render() {
        return (<>
            <div className="wrap">
		        <div className="avatar">
                     <img src={icon}/>
		        </div>
		    <input type="text" placeholder="username" required={true}/>
		        <div className="bar">
			        <i></i>
		        </div>
		    <input type="password" placeholder="password" required={true}/>
		        {/* <a href="" className="forgot_link">forgot ?</a> */}
		        <button>Entrar</button>
            </div>
        </>)
    }
}

export default Login
