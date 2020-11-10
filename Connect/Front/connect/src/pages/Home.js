import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import crooped0 from '../images/OIP.jpg'

class Home extends Component{


    render(){
        return(
            <div className="App">
                <head>
                    <title>Connect</title> 

                    <link rel="stylesheet" type="text/css" href="../CSS/header.css" />
                    <link rel="stylesheet" type="text/css" href="../CSS/home.css" />
                    <link rel="stylesheet" type="text/css" href="../fonts/font-awesome/css/font-awesome.min.css" />
                    <script src="../javascript/header.js" />
                    <script src="../javascript/home.js" />

                </head>
                <body onload="newpost();">
                    <div class="headerfixed">
                    <div class="header">
                        <div class="wrapper">
                            
                            <a href="home.html">
                                <img src={crooped0} width={120} height={45} class="logoletter"/>
                            </a>
                            <form id="searching">
                                <input type="text" name="search" placeholder="Pesquisar" id="search"/>
                            </form>

                            <div class="icon-bar">

                                <ul>

                                    <li style="border-bottom: 6px solid white;">
                                        <a href="home.html" onmouseover="headerchange(1);" onmouseout="headerorigin(1);">
                                            <img src="../images/login/home.png" id="homaj-home"/>
                                            <p id="p1">Posts</p>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="profile.html" onmouseover="headerchange(2);" onmouseout="headerorigin(2);">
                                            <img src="../images/login/profile.png" id="homaj-profile"/>
                                            <p id="p2">Perfil</p>
                                        </a>
                                    </li>

                                </ul>	

                            </div>

                        </div>
                    </div>
                    </div>
                    <div class="content">
                        <div class="wrapper">
                            <div class="leftfixed">
                                <div class="sidebarleft">
                                    <img src="../images/profile/upload.png"/>
                                    <p id="sidename"> Nome usuário</p>
                                    <p id="ssn"> Colocar RA aqui</p>
                                    <p id="logout"><a href="../index.html">Log Out</a></p>
                                </div>
                            </div>
                            <div class="mainnotfixed" id="mainnotfixed">
                                <div class="main mainpost" style="margin-bottom:20px; padding-bottom:10px;">
                                    <div class="userimg"><img src="../images/profile/upload.png"/>
                                        </div>
                                        <div class="username">
                                            <p class="name" style="top:15px;">Nome do usuário</p>
                                        </div>
                                        <p class="quotes">
                                            <textarea id="mypara" placeholder="Compartilhe um artigo, foto ou vídeo.">

                                            </textarea>
                                        </p>
                                        <div class="post">
                                            <img id="load2" class="postimg" src="../1234"/>
                                        </div>

                                        <div class="postbar">
                                            <input type="file" accept="images/*" id="chooseimg" onchange="loadFile(event)" onmouseover="onbuttoncolor()" onmouseout="outbuttoncolor()"/>
                                            <button type="button" class="imgbttn" id="imgbttn">&#x1f4f7; Arquivos</button>
                                            <button type="button" id="postmypost" class="postmypost" onclick="mypost();">Postar</button>
                                        </div>
                                </div>
                                <hr/>
                                <div class="allpost">
                                </div>
                                <button type="button" id="viewmore" class="viewmore" onclick="newpost();">Ver mais</button>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
            
        );
    }
}


export default Home;