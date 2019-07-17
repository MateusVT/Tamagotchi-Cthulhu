import * as React from "react"
import Home from "./Home";
require('./Login.scss')
const icon = require('../resources/loginIcon.jpg');
const db: dbTypes = require('../resources/db.json');
export type screen = "login" | "home";

export type dbTypes = {
	users: user[]
}


export type user = {
	name: string,
	login: string,
	password: string,
	pets: pet[]

}

export type pet = {

	name: string,
	status: string,
	happines: number,
	starvation: number,
	health: number,
	bored: number,
	dirty: number,
	age: number

}

type Props = {
}


type State = {
	screen: screen
	user: string
	password: string
}
const con = require('electron').remote.getGlobal('console')

class Login extends React.PureComponent<Props, State> {
	state: State = {
		screen: "home",
		user: "",
		password: ""
	}


	verifyLogin = () => {
		const { user, password } = this.state
		for (var i = 0; i < db.users.length; i++) {
			con.log(db.users[i].login)
			con.log(user)
			if (db.users[i].login === user && db.users[i].password === password) {
				con.log("Entrei Login")
				con.log(db.users[i].login)
				this.setState({
					screen: "home"
				})
			}
		}
	}


	handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			user: event.target.value
		})
	}

	handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			password: event.target.value
		})
	}


	render() {
		const { screen } = this.state
		return (<>

			{screen == "home" && <Home />}
			{screen == "login" && (<div className="wrap">
				<div className="avatar">
					<img src={icon} />
				</div>
				<input type="text" placeholder="username" onChange={this.handleLogin} required={true} />
				<div className="bar">
					<i></i>
				</div>
				<input type="password" placeholder="password" onChange={this.handlePassword} required={true} />
				<button onClick={this.verifyLogin}>Entrar</button>
			</div>)}
		</>)
	}
}

export default Login
