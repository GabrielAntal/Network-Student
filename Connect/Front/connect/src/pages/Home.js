import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import crooped0 from '../public/images/OIP.jpg';
import logoHome from '../public/images/login/home.png';
import logoPerfil from '../public/images/login/profile.png';
import logoUpload from '../public/images/profile/upload.png';
import placeHolder from '../public/images/placeholder.jpg';
import '../public/CSS/header.css';
import '../public/CSS/home.css';
import '../fonts/font-awesome/css/font-awesome.min.css';

class Home extends Component{

    

    render(){
        return(
            <div id="App" className="App">
               
                <body onload="newpost();">
                    <div class="headerfixed">
                    <div class="header">
                        <div class="wrapper">
                            
                            <a href="home.html">
                                <img src={crooped0} alt="logo Connect" width={120} height={45} class="logoletter"/>
                            </a>
                            <form id="searching">
                                <input type="text" name="search" placeholder="Pesquisar" id="search"/>
                            </form>

                            <div class="icon-bar">

                                <ul>

                                    <li style={{ 'border-bottom': '6px solid white' }}>
                                        <a href="home.html" onmouseover="headerchange(1);" onmouseout="headerorigin(1);">
                                            <img src={logoHome} alt="logo home" id="homaj-home"/>
                                            <p id="p1">Posts</p>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="profile.html" onmouseover="headerchange(2);" onmouseout="headerorigin(2);">
                                            <img src={logoPerfil} alt="foto perfil" id="homaj-profile"/>
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
                                    <img src={logoUpload} alt="logo Upload"/>
                                    <p id="sidename"> Nome usuário</p>
                                    <p id="ssn"> Colocar RA aqui</p>
                                    <p id="logout">
                                        <Link to={'./'}>
                                            <a>Log Out</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div class="mainnotfixed" id="mainnotfixed">
                                <div class="main mainpost" style={{'margin-bottom':'20px', 'padding-bottom':'10px'}}>
                                    <div class="userimg"><img src={logoUpload} alt="logo Upload"/>
                                        </div>
                                        <div class="username">
                                            <p class="name" style={{top:'15px'}}>Nome do usuário</p>
                                        </div>
                                        <p class="quotes">
                                            <textarea id="mypara" placeholder="Compartilhe um artigo, foto ou vídeo.">

                                            </textarea>
                                        </p>
                                        <div class="post">
                                            <img id="load2" class="postimg" src={placeHolder} alt="iamgem do post"/>
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