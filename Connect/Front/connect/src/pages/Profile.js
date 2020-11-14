import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../public/CSS/header.css';
import '../public/CSS/profile.css';
import '../public/CSS/style.css';
import logoConnect from '../public/images/OIP.jpg'
import logoHome from '../public/images/login/home.png';
import logoPerfil from '../public/images/login/profile.png';
import profilePic from '../images/profile/upload.png';


class Profile extends Component{
    render(){
        return(
            <div id="App" className="App">
               
                <body  onload="showSlides(1);">
                    <div class="headerfixed">
                    <div class="header">
                        <div class="wrapper2">
                            <a href="home.html">
                                <img src={logoConnect} width={120} height={45} alt="logo Connect" class="logoletter"/>
                            </a>

                            
                                <input type="text" name="search" placeholder="Procurar" class="search"/>
                          

                            <div class="icon-bar">
                                <ul>
                                    <li>
                                        
                                            <img src={logoHome} alt="logo home" />
                                            
                                    
                                    </li>
                                    <li style={{'border-bottom': '6px solid white'}}>
                                       
                                            <img src={logoPerfil} id="homaj-profile"/>
                                            
                                        
                                    </li>
                                </ul>	 
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="content">
                        <div class="wrapper">
                            <div class="leftfixedprofile">
                                <div class="sidebarleftprofile">
                                    <input type="file" name="pic" class="chooseslide1" accept="image/*" onchange="loadFile1(event)" title="change profile pic"/>
                                    <p class="slideEdit1">&#9998;</p>
                                    <img src={profilePic} title="Profile Pic" class="profilepic"/>
                                    <p id="sidename"> Nome Usuário</p>
                                    <p id="logout">
                                        <Link to={'./'}>
                                            <a>Sair</a>
                                        </Link>
                                    </p>
                                </div>
                                <div class="timeline">

                                    <div class="container left">

                                        <p class="slideEdit2" title="Edit" onclick="enablemodal()">&#9998;</p>
                                        <div class="tcontent">
                                            <h2>Personal Detail</h2>
                                            <h4>First Name:</h4>
                                            <p>Rajkumar Rocktim</p>
                                            <h4>Last Name:</h4>
                                            <p>Narayan Singha</p>
                                            <h4>Email:</h4>
                                            <p>rocktim53@gmail.com</p>
                                            <h4>Date Of Birth:</h4>
                                            <p>12 Feb 1997</p>
                                            <h4>Gender:</h4>
                                            <p>Male</p>
                                            <h4>Phone no:</h4>
                                            <p>8011806053</p>
                                            <h4>Religion</h4>
                                            <p>Hindu</p>
                                        </div>

                                    </div>




                                </div>

                                <div class="modal animate">
                                    <div class="Edit">
                                        <span class="close" title="Close Modal" onclick="disablemodal(0)">&times;</span>
                                        <h2 align="center">Personal Detail Edit</h2>
                                        <form action="#" onsubmit="return false">
                                            <br/>
                                            <label for="fname">First Name</label>
                                            <br/>
                                            <input type="text" id="fname" placeholder="Enter First Name" required/>

                                            <br/>
                                            <label for="lname">Last Name</label>
                                            <br/>
                                            <input type="text" id="lname" placeholder="Enter Last Name" required/>
                                            
                                            <br/>
                                            <label for="email">Email</label>
                                            <br/>
                                            <input type="email" id="email" placeholder="Enter Email-ID" required/>

                                            

                                            <button type="submit" onclick="update1()">Update</button>

                                            <br/>
                                        <button type="button" class="cancelbtn" onclick="disablemodal(0)">Cancel</button>
                                        <br/>
                                        </form>

                                    </div>
                                </div>
                               

                            </div>
                            <div class="rightfixed"/>
                        </div>
                    </div>
                </body>
            </div>
        );
    }
}


export default Profile;