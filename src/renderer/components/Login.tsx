import * as React from "react"
import Home from "./Home";
import { status } from "./Pet";
require('./Login.scss')
const icon = require('../resources/loginIcon.jpg');
const background = require('../resources/login.png');
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
	status: status,
	energy: number,
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
	password: string,
	userData: user | null
}
const con = require('electron').remote.getGlobal('console')

class Login extends React.PureComponent<Props, State> {
	state: State = {
		screen: "login",
		user: "",
		password: "",
		userData: null,
	}


	verifyLogin = () => {
		const { user, password } = this.state
		for (var i = 0; i < db.users.length; i++) {
			if (db.users[i].login === user && db.users[i].password === password) {
				if (db.users[i]) {
					this.setState({
						screen: "home",
						userData: db.users[i]
					})
				}
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
		const { screen, userData } = this.state
		return (<>

			{screen == "home" && <Home user={userData} />}
			{screen == "login" && (<div className="wrap">
				<div className="avatar">
					<img src={icon} />
				</div>
				<input type="text" placeholder="username" onChange={this.handleLogin} required={true} />
				<div className="bar">
					<i></i>
				</div>
				<input type="password" placeholder="password" onChange={this.handlePassword} required={true} />
				<button style={{marginTop:"50px", width:"100px" }} onClick={this.verifyLogin}>Entrar</button>
			</div>)}
		</>)
	}
}

export default Login
