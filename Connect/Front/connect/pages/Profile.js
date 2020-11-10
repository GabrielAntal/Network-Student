import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component{
    render(){
        return(
            <div className="App">
                <head>
                    <title>Connect</title>

                    <link rel="stylesheet" type="text/css" href="../CSS/header.css"/>
                    <link rel="stylesheet" type="text/css" href="../CSS/profile.css"/>
                    <script src="../javascript/header.js"/>
                    <script src="../javascript/profile.js"/>

                </head>
                <body  onload="showSlides(1);">
                    <div class="headerfixed">
                    <div class="header">
                        <div class="wrapper">
                            <a href="home.html">
                                <img src="../images/OIP.jpg" width={120} height={45} class="logoletter"/>
                            </a>

                            <form id="searching">
                                <input type="text" name="search" placeholder="Search.." id="search"/>
                            </form>

                            <div class="icon-bar">
                                <ul>
                                    <li>
                                        <a href="home.html" onmouseover="headerchange(1);" onmouseout="headerorigin(1);">
                                            <img src="../images/login/home.png" id="homaj-home"/>
                                            <p id="p1">Home</p>
                                        </a>
                                    </li>
                                    <li style="border-bottom: 6px solid white;">
                                        <a href="profile.html" onmouseover="headerchange(2);" onmouseout="headerorigin(2);">
                                            <img src="../images/login/profile.png" id="homaj-profile"/>
                                            <p id="p2">Profile</p>
                                        </a>
                                    </li>
                                </ul>	 
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="content">
                        <div class="wrapper">
                            <div class="leftfixedprofile">
                                <div class="slideshowcontainer">
                                    <input type="file" name="pic" class="chooseslide" accept="image/*" title="change slideshow image" onchange="loadFile(event)" onmouseover="stoptime()" onmouseout="starttime()"/>
                                    <p class="slideEdit">&#9998;</p>
                                    <div class="bubble">
                                    <span class="dot" onclick="currentslide(1)"></span>
                                    <span class="dot" onclick="currentslide(2)"></span>
                                    <span class="dot" onclick="currentslide(3)"></span>
                                    </div>
                                    <div class="singleslide">
                                        <div class="number">1/3</div>
                                        <img src="../images/login/profile/society1.jpg" class="slidimg"/>
                                    </div>
                                    <div class="singleslide">
                                        <div class="number">2/3</div>
                                        <img src="../images/login/profile/society2.jpg" class="slidimg"/>
                                    </div>
                                    <div class="singleslide">
                                        <div class="number">3/3</div>
                                        <img src="../images/login/profile/society3.jpg" class="slidimg"/>
                                    </div>
                                    <div class="prev" onclick="plusSlides(-1);">&#10094;</div>
                                    <div class="next" onclick="plusSlides(1);">&#10095;</div>
                                </div>
                                <div class="sidebarleftprofile">
                                    <input type="file" name="pic" class="chooseslide1" accept="image/*" onchange="loadFile1(event)" title="change profile pic"/>
                                    <p class="slideEdit1">&#9998;</p>
                                    <img src="../images/profile/upload.png" title="Profile Pic" class="profilepic"/>
                                    <p id="sidename"> Nome Usuário</p>
                                    <p id="logout"><a href="../index.html">Sair</a></p>
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

                                    <div class="container right">

                                        <p class="slideEdit2" title="Edit" onclick="enablemodal1(1)">&#9998;</p>
                                        <div class="tcontent">
                                            <h2>Primary Education</h2>
                                            <h4>Primary School:</h4>
                                            <p>Luit Valley Academy</p>
                                            <h4>Degree:</h4>
                                            <p>Higher Secondary</p>
                                            <h4>Field of Study:</h4>
                                            <p>Science</p>
                                            <h4>Academy Year:</h4>
                                            <p>2012-2014</p>
                                        </div>

                                    </div>

                                    <div class="container left">

                                        <p class="slideEdit2" title="Edit" onclick="enablemodal1(2)">&#9998;</p>
                                        <div class="tcontent">
                                            <h2>Secondary Education</h2>
                                            <h4>Secondary School:</h4>
                                            <p>Jorhat Institute of Science and Technology</p>
                                            <h4>Degree:</h4>
                                            <p>Bachelor of Science</p>
                                            <h4>Field of Study:</h4>
                                            <p>Information Technology</p>
                                            <h4>Academy Year:</h4>
                                            <p>2015-2018</p>
                                        </div>

                                    </div>

                                    <div class="container right">

                                        <p class="slideEdit2" title="Edit" onclick="enablemodal2()">&#9998;</p>
                                        <div class="tcontent">
                                            <h2>Address</h2>
                                            <h4>Country:</h4>
                                            <p>India</p>
                                            <h4>State:</h4>
                                            <p>Assam</p>
                                            <h4>District:</h4>
                                            <p>Jorhat</p>
                                            <h4>ZIP code:</h4>
                                            <p>785001</p>
                                        </div>

                                    </div>

                                    <div class="container left">  

                                        <p class="slideEdit2" title="Edit" onclick="enablemodal3()">&#9998;</p>
                                        <div class="tcontent">
                                            <h2>More About You</h2>
                                            <h4>Interested In:</h4>
                                            <p>Woman</p>
                                            <h4>Hobby</h4>
                                            <p>Playing Football</p>
                                            <h4>Language Known:</h4>
                                            <p>English, Hindi, Assamese, Bengali</p>
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

                                            <br/>
                                            <label for="date">Birthday:</label>
                                            <br/>
                                            <select title="Day" id="date name" style="width: 27%; padding: 8px 10px; margin:12px 0; display: inline-block;border: 1px solid #ccc;box-sizing: border-box;border-radius: 5px; font-size: 14px;">
                                            <option value="0">Day</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12" selected="1">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            </select>

                                            <select title="month" name="month" style="width: 32%; padding: 8px 10px; margin:12px 0; display: inline-block;border: 1px solid #ccc;box-sizing: border-box;border-radius: 5px; font-size: 14px;">
                                            <option value="0">Month</option>
                                            <option value="Jan">Jan</option>
                                            <option value="Feb">Feb</option>
                                            <option value="Mar">Mar</option>
                                            <option value="Apr">Apr</option>
                                            <option value="May">May</option>
                                            <option value="Jun">Jun</option>
                                            <option value="Jul">Jul</option>
                                            <option value="Aug">Aug</option>
                                            <option value="Sept">Sept</option>
                                            <option value="Oct" selected="1">Oct</option>
                                            <option value="Nov">Nov</option>
                                            <option value="Dec">Dec</option>
                                            </select>

                                            <select title="year" style="width: 30%; padding: 8px 10px; margin:12px 0; display: inline-block;border: 1px solid #ccc;box-sizing: border-box;border-radius: 5px; font-size: 14px;" name="year">
                                            <option value="0">Year</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999" selected="1">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option>
                                            </select>

                                            <br/>
                                            <input type="radio" value="Male" name="sex" id="male" required/>
                                        <label for="male">Male</label>

                                        <input type="radio" value="Female" name="sex" id="female" style="margin-bottom: 16px;" required/>
                                        <label for="female" id="fm1">Female</label>

                                        <br/>
                                            <label for="phoneno">Phone no</label>
                                            <br/>
                                            <input type="number" id="phoneno" placeholder="Enter Phone no" required/>

                                            <br/>
                                            <label for="religion">Religion</label>
                                            <br/>
                                            <input type="text" id="religion" placeholder="Enter Religion" required/>
                                            
                                            <br/>
                                            <button type="submit" onclick="update1()">Update</button>

                                            <br/>
                                        <button type="button" class="cancelbtn" onclick="disablemodal(0)">Cancel</button>
                                        <br/>
                                        </form>

                                    </div>
                                </div>
                                <div class="modal animate">

                                    <div class="Edit">
                                        <span class="close" title="Close Modal" onclick="disablemodal(1)">&times;</span>
                                        <h2 align="center">Primary School Edit</h2>
                                            <form action="#" onsubmit="return false">
                                                <br/>
                                                <label for="pschool">Primary School</label>
                                                <br/>
                                                <input type="text" id="pschool" placeholder="Enter Primary School" required/>

                                                <br/>
                                                <label for="degree1">Degree</label>
                                                <br/>
                                                <input type="text" id="degree1" placeholder="Enter Degree" required/>
                                                
                                                <br/>
                                                <label for="fstudy1">Field of Study</label>
                                                <br/>
                                                <input type="text" id="fstudy1" placeholder="Enter Field of Study" required/>

                                                <br/>
                                                <label for="syear1">Start Year</label>
                                                <label style="position: absolute;left:50.6%;" for="eyear1">End Year</label>

                                                <br/>
                                                <input style="width:49%;" type="number" id="syear1" placeholder="Start Year" min="1970" max="2017" required/>	 		
                                                <input style="width:49%;" type="number" id="eyear1" placeholder="End Year" min="1970" required/>

                                                <br/>
                                                <button type="submit" onclick="update2(1)">Update</button>

                                                <br/>
                                                <button type="button" class="cancelbtn" onclick="disablemodal(1)">Cancel</button>
                                                <br/>
                                            </form>

                                        </div>

                                </div>	
                                <div class="modal animate">

                                    <div class="Edit">

                                        <span class="close" title="Close Modal" onclick="disablemodal(2)">&times;</span>
                                        <h2 align="center">Secondary School Edit</h2>

                                            <form action="#" onsubmit="return false">
                                                <br/>
                                                <label for="sschool">Secondary School</label>
                                                <br/>
                                                <input type="text" id="sschool" placeholder="Enter Secondary School" required/>

                                                <br/>
                                                <label for="degree2">Degree</label>
                                                <br/>
                                                <input type="text" id="degree2" placeholder="Enter Degree" required/>
                                                
                                                <br/>
                                                <label for="fstudy2">Field of Study</label>
                                                <br/>
                                                <input type="text" id="fstudy2" placeholder="Enter Field of Study" required/>

                                                <br/>
                                                <label for="syear1">Start Year</label>
                                                <label style="position: absolute;left:50.6%;" for="eyear1">End Year</label>

                                                <br/>
                                                <input style="width:49%;" type="number" id="syear1" placeholder="Start Year" min="1970" max="2017" required/>	 		
                                                <input style="width:49%;" type="number" id="eyear1" placeholder="End Year" min="1970" required/>

                                                <br/>
                                                <button type="submit" onclick="update2(2)">Update</button>

                                                <br/>
                                                <button type="button" class="cancelbtn" onclick="disablemodal(2)">Cancel</button>
                                                <br/>
                                            </form>

                                    </div>

                                </div>

                                <div class="modal animate">

                                    <div class="Edit">

                                        <span class="close" title="Close Modal" onclick="disablemodal(3)">&times;</span>
                                        <h2 align="center">Address Edit</h2>

                                        <form action="#" onsubmit="return false">
                                            <br/>
                                            <label for="country">Country</label>
                                            <br/>
                                            <input type="text" id="country" placeholder="Enter Country" required/>

                                            <br/>
                                            <label for="state">State</label>
                                            <br/>
                                            <input type="text" id="state" placeholder="Enter State" required/>
                                            
                                            <br/>
                                            <label for="district">District</label>
                                            <br/>
                                            <input type="text" id="district" placeholder="Enter District" required/>

                                            <br/>
                                            <label for="zipcode">ZIP code</label>
                                            <br/>
                                            <input type="number" id="zipcode" placeholder="Enter ZIP code" required/>

                                            <br/>
                                            <button type="submit" onclick="update3()">Update</button>

                                            <br/>
                                        <button type="button" class="cancelbtn" onclick="disablemodal(3)">Cancel</button>
                                        <br/>
                                        </form>

                                    </div>

                                </div>

                                <div class="modal animate">

                                    <div class="Edit">

                                        <span class="close" title="Close Modal" onclick="disablemodal(4)">&times;</span>
                                        <h2 align="center">More About You Edit</h2>

                                            <form action="#" onsubmit="return false">
                                                <br/>
                                                <label for="interest">Interest In</label>
                                                <br/>
                                                <select style="width: 100%;
                                                            padding: 10px 16px;
                                                            margin: 12px 0;
                                                            display: inline-block;
                                                            border: 1px solid #ccc;
                                                            box-sizing: border-box;
                                                            border-radius: 5px;
                                                            font-size: 14px;" title="Interest" id="interest">
                                                <option value="Interest In">Interest In</option>
                                                <option value="Men">Men</option>
                                                <option value="Woman">Women</option>
                                                <option value="Men and Woman">Men and Women</option>
                                                </select>
                                                <br/>
                                                <label for="hobby">Hobby</label>
                                                <br/>
                                                <input type="text" id="hobby" placeholder="Enter Hobby" required/>
                                                
                                                <br/>
                                                <label for="lknown">Language Known</label>
                                                <br/>
                                                <input type="text" id="lknown" placeholder="Enter Language Known" required/>

                                                <br/>
                                                <button type="submit" onclick="update4()">Update</button>

                                                <br/>
                                                <button type="button" class="cancelbtn" onclick="disablemodal(4)">Cancel</button>
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