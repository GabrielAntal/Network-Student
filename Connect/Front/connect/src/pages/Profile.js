import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../public/CSS/header.css';
import '../public/CSS/profile.css';
import '../public/CSS/style.css';
import logoConnect from '../public/images/OIP.jpg'
import logoHome from '../public/images/login/home.png';
import logoPerfil from '../public/images/login/profile.png';
import logoRestrict from '../images/login/restrict.svg';
import profilePic from '../images/profile/upload.png';


class Profile extends Component{

    constructor(props){
        super(props)
        this.state = {
			username: localStorage.getItem('username'), ra: localStorage.getItem('ra'), email: localStorage.getItem('email')
		};
    };


    render(){
        return(
            <div id="App" className="App">
               
                <body  onload="showSlides(1);">
                    <div class="headerfixed">
                    <div class="header">
                        <div class="wrapper2">
                            <Link to='./Home'>
                                <a>
                                    <img src={logoConnect} width={120} height={45} alt="logo Connect" class="logoletter"/>
                                </a>
                            </Link>
            
                                <input type="text" name="search" placeholder="Procurar" class="search"/>
                          

                            <div class="icon-bar">
                                <ul>
                                    <li>
                                        <Link to='./Home'>
                                            <img src={logoHome} alt="logo home" />
                                        </Link>    
                                    
                                    </li>
                                    <li style={{'border-bottom': '6px solid white'}}>
                                       
                                            <img src={logoPerfil} id="homaj-profile"/>
                                    </li>
                                    <li>
											<Link to='./Restrict'>
												<img src={logoRestrict} alt="restrict" />
											</Link>
											
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
                                    <p id="sidename">{this.state.username}</p>
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
                                            <h2>Dados:</h2>
                                            <h4>Name:</h4>
                                            <p>{this.state.username}</p>
                                            <h4>Email:</h4>
                                            <p>{this.state.email}</p>
                                            <p>RA:</p>
                                            <p>{this.state.ra}</p>
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