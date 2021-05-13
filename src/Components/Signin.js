import React from 'react';
import { Avatar, Link, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import 'tachyons';

class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signinusername: '',
			signinPass: '',
			avatarStyle: { backgroundColor: '#1bbd7e' },
			paperStyle: { paddingTop: 10, height: '40%', width: 500, margin: "20px auto", backgroundColor: 'white' }
		}
	}

	onUsernameChange = (event) => {
		this.setState({ signinusername: event.target.value });
	}

	onPassChange = (event) => {
		this.setState({ signinPass: event.target.value });
	}

	onForgotPass = (e) => {
		e.preventDefault();
		this.props.onRouteChange('Forgot')
	}

	onSubmitSignIn = (e) => {
		//e.preventDefault();
		const link = this.props.link;

		if (this.state.signinPass === '' || this.state.signinusername === '')
			alert('Kindly Fill all the details!!!')

		else {
			fetch(link + '/api/signin', {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: this.state.signinusername,
					password: this.state.signinPass
				})
			})
				.then(response => response.json())
				.then(data => {

					if (data === 'unable to login')
						alert('Wrong Credentials');
					else {
						sessionStorage.setItem('jwtToken', data.token);
						var ind = data.id;
						if (ind > 0 && ind < 11)
							this.props.onRouteChange('station', data);
						else
							this.props.onRouteChange('ssp', data);
					}
				})
		}
	}

	render() {

		return (
			<div style={{paddingTop: '13%'}}>
			<article style={this.state.paperStyle} className="br3 ba shadow-2 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<Avatar style={this.state.avatarStyle} className="center pa3 shadow-2"><LockOutlinedIcon /></Avatar>
				<main className="pa3 black-80">
					<div className="measure">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f2 fw6 ph0 mh0">Sign In</legend>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
								<input
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="email"
									name="email-address"
									id="email-address"
									required
									onChange={this.onUsernameChange}
								/>
							</div>
							<div className="mv3">
								<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
								<input
									className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="password"
									name="password"
									id="password"
									onChange={this.onPassChange}
								/>
							</div>
						</fieldset>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							//className={classes.submit}
							onClick={this.onSubmitSignIn}
						>
						Sign In
					   </Button>
						<div className='tl pt3'>
							<Link variant="body2" href="" onClick={this.onForgotPass}>
								Forgot password?
				</Link>
						</div>

					</div>
				</main>
			</article>
			</div>
		);
	}
}

export default Signin;

/*import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {Paper, Box} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	paper1: {
		marginLeft: '35%',
		marginTop: '12%',
		marginRight: '35%',
		width: '30%',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		padding: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn(props) {

	const [signinusername, setUser] = React.useState('');
	const [signinPass, setPass] = React.useState('');
	const classes = useStyles();

	const onForgotPass = (e) => {
		e.preventDefault();
		props.onRouteChange('Forgot')
	}

	const onSubmitSignIn = (e) => {
		e.preventDefault();
		const link = props.link;

		if(signinPass === '' || signinusername === '')
		  alert('Kindly Fill all the details!!!')

		else{
			fetch(link + '/api/signin', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					username: signinusername,
					password: signinPass
				})
			})
			.then(response => response.json())
			.then(data => {

				if(data === 'unable to login')
				alert('Wrong Credentials');
				else{
				sessionStorage.setItem('jwtToken', data.token);
				var ind = data.id;
				if(ind>0 && ind<11)
				props.onRouteChange('station', data);
				else
					props.onRouteChange('ssp', data);
				}
			})
		}
	}

	return (

		<Paper className={classes.paper1}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in

		  </Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							fullWidth
							id="sername"
							label="Username"
							name="username"
							onChange = {e => {
								const val = e.target.value;
								setUser(val);
								 }
								}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							onChange = {e => {
								const val = e.target.value;
								setPass(val);
								 }
								}
						/>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={onSubmitSignIn}
						>
						Sign In
					   </Button>
						<Grid container>
							<Grid item xs>
								<div className='pb4 pt2 tl' >
									<Link variant="body2" href=""  onClick = {onForgotPass}>
										Forgot password?
				</Link>
								</div>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		</Paper>

	);
}
*/