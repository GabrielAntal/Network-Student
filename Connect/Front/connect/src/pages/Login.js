import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../public/CSS/style.css';
import logoConnect from '../public/images/OIP.jpg';
import axios from 'axios';
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

   async cadastrarUser(){
        
        const res =  await axios.post('http://localhost:3021/users',{
            
                fname: this.state.fname,
                ra: this.state.ra,
                emailadd: this.state.emailadd,
                pwd: this.state.pwd,
                tp: this.state.tp
            
        })
    
        



    }

    login(){
        const axios = require('axios')
        axios.get('http://localhost:3021/users', {
            params: {
                email: this.state.emailadd,
                senha: this.state.pwd
            }
        })
        .then((response) => {
            this.setState({
                fname: response.name
            })
            axios.get('http;//localhost:3021/Home', {
                params: {
                    name: this.state.fname
                }
            })
            .then((response) =>{
                console.log(response)
            })
            .catch((error) =>{
                console.log(error);
            })
        })
        .catch((error) =>{
            console.log(error);
        });
    }

    render(){
        return(
            
            <div id="App" className="App">
               
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
                                        <td><label >Nome:</label></td>
                                        <td><input type="text" id="fname" class="inputtext2"  value={this.state.fname} onChange={this.handleChangeFName.bind(this)} required/></td>
                                    </tr>

                                    <tr>
                                        <td><label>RA:</label></td>
                                        <td><input type="text" id="lname" class="inputtext2"  value={this.state.ra} onChange={this.handleChangeRA.bind(this)} required/></td>
                                    </tr>                                                               

                                    <tr>
                                        <td><label > Email:</label></td>
                                        <td><input type="email" id="emailadd" class="inputtext2"  value={this.state.emailadd} onChange={this.handleChangeEmailAdd.bind(this)} required/></td>
                                    </tr>

                                    <tr>
                                        <td><label >Senha:</label></td>
                                        <td><input type="password" id="pwd" class="inputtext2"  value={this.state.pwd} onChange={this.handleChangePwd.bind(this)} required/></td>
                                    </tr>
                                    <tr>
                                        <td><label >Tipo</label></td>
                                        <td>
                                            <select class="selector" value={this.state.tp} onChange={this.handleChangeTP.bind(this)} >
                                            <option value="Professor">Professor</option>
                                            <option value="Aluno">Aluno</option>
                                        </select>
                                        </td>
                                    </tr>
                                    
                                                                               
                                      
                                </table>
                                <button id="joinnowbttn" onCLick={this.cadastrarUser.bind(this)}>Cadastrar</button>
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