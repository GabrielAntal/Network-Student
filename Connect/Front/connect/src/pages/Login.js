import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../public/CSS/style.css';
import logoConnect from '../public/images/OIP.jpg';

class Login extends Component{

    constructor(props) {
        super(props)
        this.state = {
            fname: '', ra: '', emailadd: '', pwd: '', tp: ''
        };

    }

    handleChangeFName(ev){
        this.setState({
            fname: ev.target.value
        })
    }

    handleChangeRA(ev){
        this.setState({
            ra: ev.target.value
        })
    }

    handleChangeEmailAdd(ev){
        this.setState({
            emailadd: ev.target.value
        })
    }

    handleChangePwd(ev){
        this.setState({
            pwd: ev.target.value
        })
    }

    handleChangeTP(ev){
        this.setState({
            tp: ev.target.value
        })
    }

    cadastrarPost(){
        const axios = require('axios')
        axios.post('http://localhost:3021/users',{
            params:{
                fname: this.state.fname,
                ra: this.state.ra,
                emailadd: this.state.emailadd,
                pwd: this.state.pwd,
                tp: this.state.tp
            }
        }

        )
    }

    render(){
        return(
            <div id="App" className="App">
                <head>
                    <title>Connect</title>
                </head>
                <body>

                    <div class="header">
                        <div class="wrapper">
                            <img src={logoConnect} alt="logo Connect" width={160} height={70} class="logoletter"/>
                            <form action="./login/home.html" class="loginuser">
                                <div class="login" id="login">
                                        <input placeholder="E-mail" type="text" id="email" class="inputtext" required/>
                                        <input placeholder="Senha" type="password" id="logpassword" class="inputtext" required/>
                                        <input type="submit" value="Logar" id="loginbutton" class="loginbutton"/>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="main">
                        <div class="wrapper">
                        <div class="signup">
                            <h1>Faça seu cadastro</h1>

                            <form>
                                <table id="signuptable">
                                    <tr>
                                        <td><label for="fname">Nome:</label></td>
                                        <td><input type="text" id="fname" class="inputtext2" name="fname" value={this.state.fname} required/></td>
                                    </tr>

                                    <tr>
                                        <td><label for="lname">RA:</label></td>
                                        <td><input type="text" id="lname" class="inputtext2" name="lname" value={this.state.ra} required/></td>
                                    </tr>

                                    <tr>
                                        <td><label for="emailadd"> Email:</label></td>
                                        <td><input type="email" id="emailadd" class="inputtext2" name="emailid" value={this.state.emailadd} required/></td>
                                    </tr>

                                    <tr>
                                        <td><label for="pwd">Senha:</label></td>
                                        <td><input type="password" id="pwd" class="inputtext2" name="pwd" value={this.state.pwd} required/></td>
                                    </tr>
                                    <tr>
                                        <td><label for="tp">Tipo</label></td>
                                        <td>
                                            <select class="selector" value={this.state.tp} name="tp">
                                            <option value="Professor">Professor</option>
                                            <option value="Aluno">Aluno</option>
                                        </select>
                                        </td>
                                    </tr>
                                    <tr id="joinbut">
                                        <td colspan={2} style="selectorSpan">
                                            <input id="joinnowbttn" onCLick={cadastrarPost().bind(this)} value="Cadastrar"/>
                                        </td>
                                    </tr>
                                </table>
                            </form>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        );
    }
}

export default Login;