import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import crooped0 from '../public/images/OIP.jpg';
import logoHome from '../public/images/login/home.png';
import logoPerfil from '../public/images/login/profile.png';
import logoUpload from '../public/images/profile/upload.png';
import placeHolder from '../public/images/placeholder.jpg';
import '../public/CSS/header.css';
import '../public/CSS/home.css';
import '../public/CSS/style.css';
import '../fonts/font-awesome/css/font-awesome.min.css';
import axios from 'axios';

class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
			incre: 3,  username: localStorage.getItem('username'), ra: localStorage.getItem('ra'), logVz: false, postBox:'', searchProfile: '',
			foundStatus: false
		};
        this.logVz = React.createRef();
    };
//For incrementing the id name for like,dislike,thumbsup and thumbsdown
//username: this.props.state.username
// function to load a new post when click on viewmore

handleChangeSearchBar(ev){
	this.setState({
		searchProfile: ev.target.value
	})
}

handleChangePostBox(ev){
	this.setState({
		postBox: ev.target.value
	})
}

async  search(){
	localStorage.setItem('nameProfile', " ");
	localStorage.setItem('raProfile', " ");
	localStorage.setItem('emailProfile', " ");
	  if((this.state.searchProfile==="")){
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
		 await axios.get('http://localhost:3021/usersProfile', {
			  params: {
				  fname: this.state.searchProfile
			  }
		  })
		  .then((response) => {
				localStorage.setItem('nameProfile', response.fname)
				localStorage.setItem('raProfile', response.ra)
				localStorage.setItem('emailProfile', response.emailadd)
				this.setState((state)=>{
					foundStatus: true
				})
		  })
		  .catch((error) =>{
			  console.log(error)			 
		  });
	  }
 }

async postContent(){
	axios.post('http://localhost:3021/content',{
		postContent: this.state.postBox
	})
	.then((response)=>{
		console.log(response);
	})
	.catch((error)=>{
		console.log(error)
	})
}

newpost(){
    var loader=document.getElementById("viewmore");
	loader.className="loader";
	loader.innerHTML="";

	// load new post after 3 sec
	setTimeout(function()
	{  

	for(var i=0;i<10;i++)
	{
		/*====Parent DIV (mainpost)========*/
		var div=document.createElement("DIV");
		div.className="mainpost";

		/* -------- adding div at the bottom ---------*/
		var parent=document.getElementsByClassName("allpost");
		parent[0].appendChild(div);
		// var hr=document.createElement("hr");
		// parent[0].appendChild(hr);

		/*============ DIV userimg ===============
		var div1=document.createElement("DIV");
		div1.className="userimg";
		var img=document.createElement("img");
		img.src="../images/profile/upload.png";
		div1.appendChild(img);
		div.appendChild(div1); */

		/*============ DIV username ===============*/
		var div2=document.createElement("DIV");
		div2.className="username";
		var para=document.createElement("p");
		para.className="name";
		var text1=document.createTextNode("User Name");
		para.appendChild(text1);
		div2.appendChild(para);
		div.appendChild(div2);

		/*---------- paragraph time ---------------*/
		var para1=document.createElement("p");
		para1.className="time";
		var text2=document.createTextNode("2hr ago");
		para1.appendChild(text2);
		div.appendChild(para1);

		/*---------- paragraph quotes ---------------*/
		var para2=document.createElement("p");
		para2.className="quotes";
		var text3=document.createTextNode("Qualquer coisa");
		para2.appendChild(text3);
		div.appendChild(para2);

		/*============ DIV post ===============*/
		var div3=document.createElement("DIV");
		div3.className="post";
		//var img1=document.createElement("img");
		//img1.className="postimg";
		// img1.src="../images/login/society.jpg";
		//div3.appendChild(img1);
		div.appendChild(div3);

		/*============ DIV likedislike ===============*/
		var div4=document.createElement("DIV");
		div4.className="likedislike";
		/*$$$$$$$$$$ paragraph like $$$$$$$$$$$$$$$$*/
		var para3=document.createElement("p");
		para3.className="like";
		/*........... Span nooflike ............*/
		var span1=document.createElement("span");
		span1.className="nooflike";
		span1.id="like"+this.state.incre;
		var spantext=document.createTextNode("0 ");
		span1.appendChild(spantext);
		var text4=document.createTextNode(" likes \u00a0 ");
		para3.appendChild(span1);
		para3.appendChild(text4);
		div4.appendChild(para3);
	    /*........... Span noofdislike ............*/
		var span2=document.createElement("span");
		span2.className="noofdislike";
		span2.id="dislike"+this.state.incre;
		var spantext1=document.createTextNode("0 ");
		span2.appendChild(spantext1);
		var text5=document.createTextNode(" dislikes");
		para3.appendChild(span2);
		para3.appendChild(text5);
		div4.appendChild(para3);
		/*$$$$$$$$$$$ paragraph likedisbttn $$$$$$$$$$$$$$$*/
		var para4=document.createElement("p");
		para4.className="likedisbttn";
		/*........... Span fa fa-thumbs-up ............*/
		var span3=document.createElement("span");
		span3.className="fa fa-thumbs-up";
		span3.id="thumbsup"+this.state.incre;
		// span3.setAttribute("onClick",fun1);
		// para4.appendChild(span3);
		// div4.appendChild(para4);
	    /*........... Span noofdislike ............*/
		var span4=document.createElement("span");
		span4.className="fa fa-thumbs-down";
		span4.id="thumbsdown"+this.state.incre;
		/*^^^^^^^^^^ Span3 onclick code and append ^^^^^^^^^^*/
		var fun1="increase"+"("+"'"+span1.id+"'"+","+"'"+span2.id+"'"+","+"'"+span3.id+"'"+","+"'"+span4.id+"'"+");";
		span3.setAttribute("onClick",fun1);
		para4.appendChild(span3);
		div4.appendChild(para4);
		/*^^^^^^^^^^ Span4 onclick code and append ^^^^^^^^^^*/
		var fun2="decrease"+"("+"'"+span1.id+"'"+","+"'"+span2.id+"'"+","+"'"+span3.id+"'"+","+"'"+span4.id+"'"+");";
		span4.setAttribute("onclick",fun2);
		para4.appendChild(span4);
		div4.appendChild(para4);
		/*############## Appending DIV4 ############*/
		div.appendChild(div4);
        
        this.setState((state) => {
            return {
               // incre: incre+1
            }
        });

		loader.className="viewmore";
		loader.innerHTML="View More";
	}

	},3000);
	// end of load a new post after 3 sec
		
};


// function to post a new post
mypost(){
	/*====Parent DIV (mainpost)========*/
	var div=document.createElement("DIV");
	div.className="mainpost";

	/* -------- adding div at the top ---------*/
	var parent=document.getElementsByClassName("allpost");
	parent[0].insertBefore(div, parent[0].childNodes[0]);
	// var hr=document.createElement("hr");
	// parent[0].insertBefore(hr, parent[0].childNodes[1]);

	/*============ DIV userimg ===============*/
	//var div1=document.createElement("DIV");
	//div1.className="userimg";
	//var img=document.createElement("img");
	//img.src="../images/profile/upload.png";
	//div1.appendChild(img);
	//div.appendChild(div1);

	/*============ DIV username ===============*/
	var div2=document.createElement("DIV");
	div2.className="username";
	var para=document.createElement("p");
	para.className="name";
	var text1=document.createTextNode("Rajkumar Rocktim Narayan Singha");
	para.appendChild(text1);
	div2.appendChild(para);
	div.appendChild(div2);

	/*---------- paragraph time ---------------*/
	var para1=document.createElement("p");
	para1.className="time";
	var text2=document.createTextNode("Just now");
	para1.appendChild(text2);
	div.appendChild(para1);

	/*---------- paragraph quotes ---------------*/
	var para2=document.createElement("p");
	para2.className="quotes";
	var pararec=document.getElementById("mypara");
	// var paapa=pararec.value;
	var paapa=pararec.value.replace(/\s/g, "\u00a0");
	pararec.value="";

	var text3=document.createTextNode(paapa);
	para2.appendChild(text3);
	div.appendChild(para2);

	/*============ DIV post ===============*/
	var div3=document.createElement("DIV");
	div3.className="post";
	//var img1=document.createElement("img");
	//img1.className="postimg";
	var output = document.getElementById('load2');
    //img1.src = output.src;
    output.src="";
	//div3.appendChild(img1);
	div.appendChild(div3);

	/*============ DIV likedislike ===============*/
	var div4=document.createElement("DIV");
	div4.className="likedislike";
	/*$$$$$$$$$$ paragraph like $$$$$$$$$$$$$$$$*/
	var para3=document.createElement("p");
	para3.className="like";
	/*........... Span nooflike ............*/
	var span1=document.createElement("span");
	span1.className="nooflike";
	span1.id="like"+this.state.incre;
	var spantext=document.createTextNode("0 ");
	span1.appendChild(spantext);
	var text4=document.createTextNode(" likes \u00a0 ");
	para3.appendChild(span1);
	para3.appendChild(text4);
	div4.appendChild(para3);
    /*........... Span noofdislike ............*/
	var span2=document.createElement("span");
	span2.className="noofdislike";
	span2.id="dislike"+this.state.incre;
	var spantext1=document.createTextNode("0 ");
	span2.appendChild(spantext1);
	var text5=document.createTextNode(" dislikes");
	para3.appendChild(span2);
	para3.appendChild(text5);
	div4.appendChild(para3);
	/*$$$$$$$$$$$ paragraph likedisbttn $$$$$$$$$$$$$$$*/
	var para4=document.createElement("p");
	para4.className="likedisbttn";
	/*........... Span fa fa-thumbs-up ............*/
	var span3=document.createElement("span");
	span3.className="fa fa-thumbs-up";
	span3.id="thumbsup"+this.state.incre;
	// span3.setAttribute("onClick",fun1);
	// para4.appendChild(span3);
	// div4.appendChild(para4);
    /*........... Span noofdislike ............*/
	var span4=document.createElement("span");
	span4.className="fa fa-thumbs-down";
	span4.id="thumbsdown"+this.state.incre;
	/*^^^^^^^^^^ Span3 onclick code and append ^^^^^^^^^^*/
	var fun1="increase"+"("+"'"+span1.id+"'"+","+"'"+span2.id+"'"+","+"'"+span3.id+"'"+","+"'"+span4.id+"'"+");";
	span3.setAttribute("onClick",fun1);
	para4.appendChild(span3);
	div4.appendChild(para4);
	/*^^^^^^^^^^ Span4 onclick code and append ^^^^^^^^^^*/
	var fun2="decrease"+"("+"'"+span1.id+"'"+","+"'"+span2.id+"'"+","+"'"+span3.id+"'"+","+"'"+span4.id+"'"+");";
	span4.setAttribute("onclick",fun2);
	para4.appendChild(span4);
	div4.appendChild(para4);
	/*############## Appending DIV4 ############*/
	div.appendChild(div4);

	this.setState((state) => {
            return {
            //    incre: incre+1
            }
    });
};

/*======== Like increase =========*/

increase(likerec,dislikerec,thumbsuprec,thumbsdownrec){
	var idname1=likerec;
	var idname2=dislikerec;
	var thumbsup=thumbsuprec;
	var thumbsdown=thumbsdownrec;
	var like=document.getElementById(idname1);
	like.innerHTML=parseInt(like.innerHTML)+1;
	var up=document.getElementById(thumbsup);
	up.style.color= "#009688";
	up.style.pointerEvents="none";
	var down=document.getElementById(thumbsdown)
	if(down.style.color=="rgb(0, 150, 136)")
	{
		var dislike=document.getElementById(idname2);
		dislike.innerHTML=parseInt(dislike.innerHTML)-1;
	}
	down.style.color="black";
	down.style.pointerEvents="all";
};

/*============== Like decrease ================*/
decrease(likerec,dislikerec,thumbsuprec,thumbsdownrec){
	var idname1=likerec;
	var idname2=dislikerec;
	var thumbsup=thumbsuprec;
	var thumbsdown=thumbsdownrec;
	var dislike=document.getElementById(idname2);
	dislike.innerHTML=parseInt(dislike.innerHTML)+1;
	var down=document.getElementById(thumbsdown);
	down.style.color= "#009688";
	down.style.pointerEvents="none";
	var up=document.getElementById(thumbsup);
	if(up.style.color=="rgb(0, 150, 136)")
	{
		var like=document.getElementById(idname1);
		like.innerHTML=parseInt(like.innerHTML)-1;
	}
	up.style.color="black";
	up.style.pointerEvents="all";
};



    loadFile = function(event) {
	    var output = document.getElementById('load2');
	    output.src = URL.createObjectURL(event.target.files[0]);
	};

// changing imagebutton color on hover
 onbuttoncolor(){
 	var on=document.getElementById("imgbttn");
 	on.style.backgroundColor = "#009688";
 	on.style.color="white";
 };

 outbuttoncolor(){
 	var out=document.getElementById("imgbttn");
 	out.style.backgroundColor = "white";
 	out.style.color="black";
 };

    render(){
		if(this.state.foundStatus){
            return <Redirect to='/Profile'/>
        }
        return(
            <div id="App" className="App">
               
                <body onload="newpost();">
                    <div class="headerfixed">
                    <div class="header">
                        <div class="wrapper2">
                            
                           
                                <img src={crooped0} alt="logo Connect"  class="logoletter"/>
                            
                           
                                <input type="text" name="search" placeholder="Pesquisar" value={this.state.searchProfile} class="search"/>
								{this.state.logVz?<span  class="log">Preencha os campos</span>: null}

                            <div class="icon-bar">

                                <ul>

                                    <li style={{ 'border-bottom': '6px solid white' }}>
											<Link to='./Home'>
												<img src={logoHome} alt="logo home" />
											</Link>
                                    </li>
                                    <li>
											<Link to='./Profile'>
												<img src={logoPerfil} alt="foto perfil" />
											</Link>
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
                                    <img src={placeHolder} alt="logo Upload"/>
									<p id="sidename">{this.state.username}</p>
									<p id="ssn">{this.state.ra}</p>
                                    <p id="logout">
                                        <Link to={'./'}>
                                            <a>Log Out</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div class="mainnotfixed" id="mainnotfixed">
                                <div class="main mainpost" style={{'margin-bottom':'20px', 'padding-bottom':'10px'}}>
                                    <div class="userimg"><img src={placeHolder} alt="logo Upload"/>
                                        </div>
                                        <div class="username">
                                            <Link to={'./Profile'}>
                                                <p class="name" style={{top:'15px'}}>{this.state.username}</p>
                                            </Link>
                                        </div>
                                        <p class="quotes">
                                            <textarea id="mypara" value={this.state.postBox} placeholder="Compartilhe um artigo, foto ou vídeo.">

                                            </textarea>
                                        </p>

                                        <div class="postbar">
                                            <input type="file" accept="images/*" id="chooseimg" onchange="loadFile(event)" onmouseover="onbuttoncolor()" onmouseout="outbuttoncolor()"/>
                                            <button type="button" class="imgbttn" id="imgbttn">&#x1f4f7; Arquivos</button>
                                            <button type="button" id="postmypost" class="postmypost" onClick="mypost()" /*{this.mypost().bind(this)}*/ >Postar</button>
                                        </div>
                                </div>
                                <hr/>
                                <div class="allpost">
                                </div>
                                <button type="button" id="viewmore" class="viewmore" onClick="newpost()" /*{this.newpost().bind(this)}*/ >Ver mais</button>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
            
        );
    }
}


export default Home;