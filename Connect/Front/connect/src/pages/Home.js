import React, { Component, createElement } from 'react';
import { Link, Redirect } from 'react-router-dom';
import crooped0 from '../public/images/OIP.jpg';
import logoHome from '../public/images/login/home.png';
import logoPerfil from '../public/images/login/profile.png';
import logoUpload from '../public/images/profile/upload.png';
import placeHolder from '../public/images/placeholder.jpg';
import ReactDOM from 'react-dom';
import '../public/CSS/header.css';
import '../public/CSS/home.css';
import '../public/CSS/style.css';
import '../fonts/font-awesome/css/font-awesome.min.css';
import axios from 'axios';

class Home extends Component {

	constructor(props) {
		super(props)
		this.state = {
			incre: 3, username: localStorage.getItem('username'), ra: localStorage.getItem('ra'), logVz: false, postBox: '', searchProfile: '',
			foundStatus: false, tp: localStorage.getItem('tipo'), conPost:'',  postArray: [], image: null, imageArray: []
		};
		this.logVz = React.createRef();
	};
	//For incrementing the id name for like,dislike,thumbsup and thumbsdown
	//username: this.props.state.username
	// function to load a new post when click on viewmore

	handleChangeSearchBar(ev) {
		this.setState({
			searchProfile: ev.target.value
		})
	}

	handleChangePostBox(ev) {
		this.setState({
			postBox: ev.target.value
		})
	}

	async search() {
		localStorage.setItem('nameProfile', " ");
		localStorage.setItem('raProfile', " ");
		localStorage.setItem('emailProfile', " ");
		if ((this.state.searchProfile === "")) {
			this.setState((state) => {
				return {
					logVz: true
				}
			})
			setTimeout(() => {
				this.setState((state) => {
					return {
						logVz: false
					}
				});
			}, 2500)
		} else {
			await axios.get('http://localhost:3021/usersProfile', {
				params: {
					fname: this.state.searchProfile
				}
			})
				.then((response) => {
					localStorage.setItem('nameProfile', response.fname)
					localStorage.setItem('raProfile', response.ra)
					localStorage.setItem('emailProfile', response.emailadd)
					this.setState((state) => {
						return {
							foundStatus: true
						}

					})
				})
				.catch((error) => {
					console.log(error)
				});
		}
	}

	async postContent() {
		await axios.post('http://localhost:3021/images', {
			postImage: this.state.image
		})
		await axios.post('http://localhost:3021/content', {
			postContent: this.state.postBox,
			tp: this.state.tp
		})
			.then((response) => {
				console.log(response.data);
				this.sendPost();
			})
			.catch((error) => {
				console.log(error)
			})
	}




	 sendPost() {

		axios.get('http://localhost:3021/images')
		.then((response)=>{
			var img = [] = response.data.path
			this.setState((state)=>{
				return{
					imageArray: img
				}
			});
		})

		 axios.get('http://localhost:3021/content', {
			params: {
				tp: this.state.tp
			}

		})
			.then((response) => {
				var con = [] = response.data;
				console.log(response.data)
				console.log(response.data[0].content);
				var postNum = con.length, uiItems = [];
				while(postNum--){
					uiItems.push(
						<div class="post">
							<div class="description">
								<div class="userimg"><img src={placeHolder} alt="logo Upload" /></div>
								<p class="name" >Usuário</p>
								<div class="contet-post">
									{con[postNum].content}
									<img src={this.state.uploadPath} alt="foto do post"></img>
								</div>
							</div>
						</div>
					)
					this.setState((state)=>{
						return{
							uploadPath: ''
						}
					})
				}
				this.setState((state)=>{
					return{
						postArray: uiItems
					}
				})
				/*for (var i = 0; i < con.length; i++) {
					//console.log(con[i]);
					 this.setState((state)=>{
						 return{
							conPost: con[i]
						 }
						 
					 })
					 element = <div class="post">
						<div class="description">
							<div class="userimg"><img src={placeHolder} alt="logo Upload" /></div>
							<p class="name" >Usuário</p>
							<div class="contet-post">
								{con[i].content}
							</div>
						</div>

					</div>
				}*/
				//ReactDOM.render(element, document.getElementById('allpost'))

			})
			.catch((error) => {
				console.log(error)
			})



	}

	//FAZER PAGINA PARA PERFIL PROPRIO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	render() {
		if (this.state.foundStatus) {
			return <Redirect to='/Profile' />
		}
		return (
			<div id="App" className="App">

				<body onload="newpost();">
					<div class="headerfixed">
						<div class="header">
							<div class="wrapper2">


								<img src={crooped0} alt="logo Connect" class="logoletter" />


								<input type="text" name="search" placeholder="Pesquisar" value={this.state.searchProfile} class="search" />
								{this.state.logVz ? <span class="log">Preencha os campos</span> : null}

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
									<img src={placeHolder} alt="logo Upload" />
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
								<div class="main mainpost" style={{ 'margin-bottom': '20px', 'padding-bottom': '10px' }}>
									<div class="userimg"><img src={placeHolder} alt="logo Upload" />
									</div>
									<div class="username">
										<Link class="lin" to={'./Profile'}>
											<p class="name" style={{ top: '15px' }}>{this.state.username}</p>
										</Link>
									</div>
									<p class="quotes">
										<textarea id="mypara" value={this.state.postBox} onChange={this.handleChangePostBox.bind(this)} placeholder="Compartilhe um artigo, foto ou vídeo.">

										</textarea>
									</p>

									<div class="postbar">
										<input type="file" accept="images/*" id="chooseimg" onchange="loadFile(event)" onmouseover="onbuttoncolor()" onmouseout="outbuttoncolor()" />
										<button type="button" value={this.state.image} class="imgbttn" id="imgbttn">&#x1f4f7; Arquivos</button>
										<button type="button" id="postmypost" class="postmypost" onClick={this.postContent.bind(this)} /*{this.mypost().bind(this)}*/ >Postar</button>
									</div>
								</div>
								<hr />
								<div id="allpost" class="allpost">
									{this.state.postArray}
								</div>
								<button type="button" id="viewmore" class="viewmore"  >Ver mais</button>
							</div>
						</div>
					</div>
				</body>
			</div>

		);
	}
}


export default Home;