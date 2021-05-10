import React from 'react';
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
		marginLeft: theme.spacing('60'),
		marginRight: theme.spacing('50'),
		marginTop: theme.spacing('20'),
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