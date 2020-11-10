import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Login extends Component{


    render(){
        return(
            <div className="App">
                <head>
                    <title>Connect</title>
                    <link rel="stylesheet" type="text/css" href="./CSS/style.css"/>
                </head>
                <body>

                    <div class="header">
                        <div class="wrapper">
                            <img src="images/OIP.jpg" width={160} height={70} class="logoletter"/>
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

                            <form action="/cad_post" method="POST" accept-charset="UTF-8">
                                <table id="signuptable">
                                    <tr>
                                        <td><label for="fname">Nome:</label></td>
                                        <td><input type="text" id="fname" class="inputtext2" name="fname" required/></td>
                                    </tr>

                                    <tr>
                                        <td><label for="lname">RA:</label></td>
                                        <td><input type="text" id="lname" class="inputtext2" name="lname" required/></td>
                                    </tr>

                                    <tr>
                                        <td><label for="emailadd"> Email:</label></td>
                                        <td><input type="email" id="emailadd" class="inputtext2" name="emailid" required/></td>
                                    </tr>

                                    <tr>
                                        <td><label for="pwd">Senha:</label></td>
                                        <td><input type="password" id="pwd" class="inputtext2" name="pwd" required/></td>
                                    </tr>
                                    <tr>
                                        <td><label for="tp">Tipo</label></td>
                                        <td>
                                            <select class="selector"  name="tp">
                                            <option value="Professor">Professor</option>
                                            <option value="Aluno">Aluno</option>
                                        </select>
                                        </td>
                                    </tr>
                                    <tr id="joinbut">
                                        <td colspan={2} style="padding-left: 40px; padding-right: 0px">
                                            <input id="joinnowbttn" type="submit" value="Cadastrar"/>
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