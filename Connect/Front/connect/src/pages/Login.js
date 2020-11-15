import React, {Component} from 'react';
import {Redirect } from 'react-router-dom';
import '../public/CSS/style.css';
import logoConnect from '../public/images/OIP.jpg';
import axios from 'axios'
class Login extends Component{

    constructor(props) {
        super(props)
        this.state = {
            fname: '', ra: '', emailadd: '', pwd: '', tp: '', infemail: false, infcad: false, username:'', logPass:'', logEmail: '',
            loggedIn: false, logEm: false, logVz: false, infpren:false, infinv: false
        };
        this.infemail =React.createRef();
        this.infcad =React.createRef();
        this.infpren =React.createRef();
        this.logEm =React.createRef();
        this.logVz =React.createRef();
        this.infinv= React.createRef();
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

    handleChangeLog(ev){
        this.setState({
            logEmail: ev.target.value
        })
    }

    handleChangeLogp(ev){
        this.setState({
            logPass: ev.target.value
        })
    }

    

   async cadastrarUser(){

    if((this.state.fname ==="")||(this.state.ra ==="")||(this.state.emailadd ==="")||(this.state.pwd ==="")|| (this.state.tp ==="")){
        this.setState((state)=>{
            return{
                infpren: true
            }
            
        })
        setTimeout(()=>{
            this.setState((state)=>{
                return{
                    infpren: false
                }
            });
            
        }, 2500)
    }else{
        if ((this.state.emailadd.indexOf("@") < 1) || (this.state.emailadd.indexOf(".") < 7)) {
            this.setState((state) => {
                return {
                    infinv: true 

                }
            });
            setTimeout(() => {
                this.setState((state) => {
                    return {
                        infinv: false
                    }
                });
            }, 2500);
        }else{
            await axios.post('http://localhost:3021/users',{
            
                fname: this.state.fname,
                ra: this.state.ra,
                emailadd: this.state.emailadd,
                pwd: this.state.pwd,
                tp: this.state.tp
            
        }).then((response)=>{
            console.log(response.status)
            this.setState((state)=>{
                return{
                    infcad: true
                }

            })
            setTimeout(()=>{
                this.setState((state)=>{
                    return{
                        infcad: false
                    }
                });
                
            }, 2500)
        }).catch((error)=>{
            this.setState((state)=>{
                return{
                    infemail: true
                }
                
            })
            setTimeout(()=>{
                this.setState((state)=>{
                    return{
                        infemail: false
                    }
                });
                
            }, 2500)
        })
        }
    }
        
        

        this.setState((state) => {
            return {
                username: this.state.fname,
                fname: '',
                ra: '',
                emailadd: '',
                pwd: '',
                tp: ''
            }
        });



    }

  async  login(){
      localStorage.clear();
        if((this.state.logEmail==="")||(this.state.logPass==="")){
            this.setState((state)=>{
                return{
                    logVz: true
                }

            })
            setTimeout(()=>{
                this.setState((state)=>{
                    return{
                        logVz: false
                    }
                });
                
            }, 2500)
        }else{
           await axios.get('http://localhost:3021/users', {
                params: {
                    email: this.state.logEmail,
                    senha: this.state.logPass
                }
            })
            .then((response) => {
                        this.setState((state)=>{
                    return{
                        loggedIn: true
                    }
                });
                console.log(response);
                console.log(this.state.loggedIn);
                localStorage.setItem('username', response.data.nome);
                localStorage.setItem('ra', response.data.ra);
                localStorage.setItem('email', response.data.email);

                if(this.state.loggedIn === true){
                    console.log("era para redirecionar")
                }
            })
            .catch((error) =>{
                this.setState((state)=>{
                    return{
                        logEm: true
                    }
                });
                setTimeout(()=>{
                    this.setState((state)=>{
                        return{
                            logEm: false
                        }
                    });
                    
                }, 2500)
               
            });
            
        }

        this.setState((state)=>{
            return{logEmail:'',
            logPass: ''
        }
        })
        
       
    }

    render(){
        if(this.state.loggedIn){
            return <Redirect to='/Home'/>
        }
        return(
            
            <div id="App" className="App">
               
                <body>

                    <div class="header">
                        <div class="wrapper">
                            <img src={logoConnect} alt="logo Connect" width={160} height={70} class="logoletter"/>
                            
                                <div class="loginuser" id="login">
                                        <input placeholder="E-mail" value={this.state.logEmail} onChange={this.handleChangeLog.bind(this)} type="text" id="email" class="inputtext" required/>
                                        <input placeholder="Senha" value={this.state.logPass} onChange={this.handleChangeLogp.bind(this)} type="password" id="logpassword" class="inputtext" required/>
                                        <button id="loginbutton" class="loginbutton" onClick={this.login.bind(this)}>Logar</button>
                            
                                       
                                </div>
                                {this.state.logEm?<span  class="log">E-mail ou senha incorretos</span>: null} 
                                {this.state.logVz?<span  class="log">Preencha os campos</span>: null}
                        </div>
                        
                        
                    </div>

                    <div class="main">
                        <div class="wrapper">
                        <div class="signup">
                            <h1>Faça seu cadastro</h1>

                            
                                <table id="signuptable">
                                    <tr>
                                        <td><label >Nome:</label></td>
                                        <td><input type="text" id="fname" class="inputtext2"  value={this.state.fname} onChange={this.handleChangeFName.bind(this)} required/></td>
                                    </tr>

                                    <tr>
                                        <td><label>RA:</label></td>
                                        <td><input type="number" id="lname" class="inputtext2"  value={this.state.ra} onChange={this.handleChangeRA.bind(this)} required/></td>
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
                                            <option ></option>
                                            <option value="Professor">Professor</option>
                                            <option value="Aluno">Aluno</option>
                                        </select>
                                        </td>
                                    </tr>
                                    
                                                                               
                                      
                                </table>
                                {
                                    this.state.infemail?<span class="inf email">Email já cadastrado</span> : null   
                                }
                                {
                                    this.state.infinv?<span class="inf email">Email inválido</span> : null   
                                }
                                {
                                    this.state.infcad?<span class="inf cad">Cadastrado</span> : null   
                                }
                                                                 {
                                    this.state.infpren?<span class="inf pren">Preencha todos os campos</span> : null   
                                }
                                <button id="joinnowbttn" onClick={this.cadastrarUser.bind(this)}>Cadastrar</button>
                                
                            </div>
                        </div>
                        
                    </div>
                </body>
            </div>
        );
    }
}

export default Login;