import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
    root: {
        minWidth: 40,
        marginLeft: '2%',
        marginTop: '15%',
        display: 'card',

        flexGrow: 1,
        // padding: theme.spacing(2)
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 12,
    },
    pos: {
        marginBottom: 12,
    }
});

export default function SimpleCard(props) {
    const policeStation = useState(['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']);
   //const policeStation = useState( ['PS1','PS2','PS3','PS4','PS5','PS6','PS7','PS8','PS9','PS10']);
   const [info, setInfo] = useState([]);
    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);
    const [flag3, setFlag3] = useState(false);
    const [changePass, setChangePass] = useState({ pass: '', new_pass: '', conf_pass: '' })
    const [passemail, setPass] = useState('');
    const [passuser, setPassU] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const classes = useStyles()

    function setValues() {
        var token = sessionStorage.getItem('jwtToken');
        fetch(props.link + '/api/profile', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'jwttoken': token },
            body: JSON.stringify({
                station: props.policeStation,
                type: 'check'
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.auth === false)
                    alert('Problem in Authorization!!!\nKindly do it again!!')
                else if (data[0].id)
                    setInfo(data[0]);
            })
    }

    useEffect(() => {
        setValues();
    }, []);

    const somethingEmail=(e)=> {
        if (e.keyCode === 13) {
            onClickEmail();
        }
    }

    const somethingUser=(e)=> {
        if (e.keyCode === 13) {
            onClickUsername();
        }
    }

    const somethingPass=(e)=> {
        if (e.keyCode === 13) {
            onClickPassword();
        }
    }

    function onClickEmail() {
        if (!flag2)
            setFlag2(!flag2)

        else if (email === '' || passemail === '')
            setFlag2(!flag2)

        else {
            if (window.confirm("Click 'Ok' to confirm the Email Change, else Click 'Cancel")) {
                if (email === '')
                    alert('Kindly fill the email address!!!')
                else {
                    var token = sessionStorage.getItem('jwtToken');
                    fetch(props.link + '/api/profile', {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json', 'jwttoken': token },
                        body: JSON.stringify({
                            station: props.policeStation,
                            email: email,
                            pass: passemail,
                            type: 'email'
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.auth === false)
                                alert('Problem in Authorization!!!\nKindly do it again!!')
                            else if (data === 'Incorrect Password')
                                alert('Incorrect Password!!!!!');
                            else if (data === 'success') {
                                alert('Email-id Updated...');
                                setEmail('');
                                setPass('');
                                setValues();
                                setFlag2(!flag2)
                            }
                            else
                                alert('Kindly change the email id again!!!!')

                        })
                }
            }
            else
                setFlag2(!flag2)
        }

    }

    function onClickUsername() {
        if (!flag1)
            setFlag1(!flag1)

        else if (username === '' || passuser === '')
            setFlag1(!flag1)

        else {
            if (window.confirm("Click 'Ok' to confirm the Username Change, else Click 'Cancel")) {
                if (username === '')
                    alert('Kindly fill the username!!!')
                else {
                    var token = sessionStorage.getItem('jwtToken');
                    fetch(props.link + '/api/profile', {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json', 'jwttoken': token },
                        body: JSON.stringify({
                            station: props.policeStation,
                            username: username,
                            pass: passuser,
                            type: 'username'
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.auth === false)
                                alert('Problem in Authorization!!!\nKindly do it again!!')
                            else if (data === 'Incorrect Password')
                                alert('Incorrect Password!!!!!');
                            else if (data === 'success') {
                                alert('Username Updated...');
                                setUsername('');
                                setPassU('');
                                setValues();
                                setFlag1(!flag1)
                            }
                            else
                                alert('Kindly change the email id again!!!!')

                        })
                }
            }
            else
                setFlag1(!flag1)
        }
    }

    function onClickPassword() {
        if (!flag3)
            setFlag3(!flag3)
        else if (changePass.pass === '' && changePass.new_pass === '' && changePass.conf_pass === '')
            setFlag3(!flag3)
        else {
            if (window.confirm("Click 'Ok' to confirm the Password Change, else Click 'Cancel")) {
                if (changePass.pass === '')
                    alert('Kindly fill the current password!!!')
                else if (changePass.new_pass === '')
                    alert('Kindly fill the new password!!!')
                else if (changePass.conf_pass === '')
                    alert('Kindly fill the confirm password!!!')
                else if (changePass.new_pass !== changePass.conf_pass)
                    alert('Error!!!\nNew and confirm password should be same!!!')
                else {
                    var token = sessionStorage.getItem('jwtToken');
                    fetch(props.link + '/api/profile', {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json', 'jwttoken': token },
                        body: JSON.stringify({
                            station: props.policeStation,
                            pass: changePass.pass,
                            new_pass: changePass.new_pass,
                            type: 'pass'
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.auth === false)
                                alert('Problem in Authorization!!!\nKindly do it again!!')
                            else if (data === 'Incorrect current Password')
                                alert('Incorrect Password!!!!!');
                            else if (data === 'success') {
                                alert('Password Updated...');
                                setChangePass({
                                    pass: '',
                                    new_pass: '',
                                    conf_pass: ''
                                })
                                setValues();
                                setFlag3(!flag3)
                            }
                            else
                                alert('Error!!!\nKindly change the password again!!!!')

                        })
                }
            }
            else
                setFlag3(!flag3)
        }
    }


    return (

        <div>
            {
                props.policeStation === '11'
                    ? <h2 className='center'>SSP Office</h2>
                    :
                    <h2 className='center'>{policeStation[0][props.policeStation - 1]} Police Station</h2>
            }

            {  info.length === 0
                ? <p></p>
                :

                <Grid container>
                    <Grid item md={4}>
                        <div style={{ display: "flex" }}>
                            <Card className={classes.root} style={{ backgroundColor: "" }}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        <h2>{info.username}</h2>
                                    </Typography>
                                    <div style={{ paddingTop: '10px' }}></div>
                                    {
                                        flag1 === true
                                            ?
                                            <div>
                                                <TextField
                                                    style={{ paddingTop: '10px' }}
                                                    variant="outlined"
                                                    size="large"
                                                    label="New Username"
                                                    type='text'
                                                    value={username}
                                                    required
                                                    onKeyDown={(e) => somethingUser(e) }
                                                    onChange={e => {
                                                        const val = e.target.value;
                                                        setUsername(val)
                                                    }}
                                                />
                                                <div style={{ paddingTop: '15px' }}></div>
                                                <TextField
                                                    style={{ paddingTop: '10px' }}
                                                    variant="outlined"
                                                    size="large"
                                                    label="Password"
                                                    type='password'
                                                    value={passuser}
                                                    onKeyDown={(e) => somethingUser(e) }
                                                    required
                                                    onChange={e => {
                                                        const val = e.target.value;
                                                        setPassU(val)
                                                    }}
                                                />
                                            </div>
                                            : <p></p>
                                    }
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" color="primary" style={{ margin: '0 auto', display: "flex" }} onClick={onClickUsername}>
                                        Change Username
                             </Button>

                                </CardActions>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item md={4}  >
                        <div style={{ marginLeft: "3", height: "80%" }} >
                            <Card className={classes.root} style={{ backgroundColor: "", }}>
                                <CardContent >
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        <h2>{info.email}</h2>
                                    </Typography>
                                    <div style={{ paddingTop: '10px' }}></div>
                                    {
                                        flag2 === true
                                            ?
                                            <div>
                                                <TextField
                                                    style={{ paddingTop: '10px' }}
                                                    variant="outlined"
                                                    size="large"
                                                    label="New Email"
                                                    type='text'
                                                    value={email}
                                                    required
                                                    onKeyDown={(e) => somethingEmail(e) }
                                                    onChange={e => {
                                                        const val = e.target.value;
                                                        setEmail(val)
                                                    }}
                                                />
                                                <div style={{ paddingTop: '15px' }}></div>
                                                <TextField
                                                    style={{ paddingTop: '10px' }}
                                                    variant="outlined"
                                                    size="large"
                                                    label="Password"
                                                    type='password'
                                                    value={passemail}
                                                    onKeyDown={(e) => somethingEmail(e) }
                                                    required
                                                    onChange={e => {
                                                        const val = e.target.value;
                                                        setPass(val)
                                                    }}
                                                />
                                            </div>
                                            : <p></p>
                                    }

                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" color="secondary" style={{ margin: '0 auto', display: "flex" }}
                                        onClick={onClickEmail}>
                                        Change Email
                            </Button>
                                </CardActions>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item md={4}  >
                        <div style={{ marginLeft: "3", height: "80%" }} >
                            <Card className={classes.root} style={{ backgroundColor: "", }}>
                                <CardContent >
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        <h2>Password Change</h2>
                                    </Typography>
                                    <div style={{ paddingTop: '10px' }}></div>
                                    {
                                        flag3 === true
                                            ?
                                            <div>
                                                <TextField
                                                    style={{ paddingTop: '10px' }}
                                                    variant="outlined"
                                                    size="large"
                                                    label="Old Password"
                                                    type='password'
                                                    value={changePass.pass}
                                                    required
                                                    onKeyDown={(e) => somethingPass(e) }
                                                    onChange={e => {
                                                        const val = e.target.value;
                                                        setChangePass(prevState => {
                                                            return { ...prevState, pass: val }
                                                        });
                                                    }}
                                                />
                                                <div style={{ paddingTop: '15px' }}></div>
                                                <TextField
                                                    style={{ paddingTop: '10px' }}
                                                    variant="outlined"
                                                    size="large"
                                                    label="New Password"
                                                    type='password'
                                                    value={changePass.new_pass}
                                                    onKeyDown={(e) => somethingPass(e) }
                                                    required
                                                    onChange={e => {
                                                        const val = e.target.value;
                                                        setChangePass(prevState => {
                                                            return { ...prevState, new_pass: val }
                                                        });
                                                    }}
                                                />
                                                <div style={{ paddingTop: '15px' }}></div>
                                                <TextField
                                                    style={{ paddingTop: '10px' }}
                                                    variant="outlined"
                                                    size="large"
                                                    label="Confirm Password"
                                                    type='password'
                                                    value={changePass.conf_pass}
                                                    onKeyDown={(e) => somethingPass(e) }
                                                    required
                                                    onChange={e => {
                                                        const val = e.target.value;
                                                        setChangePass(prevState => {
                                                            return { ...prevState, conf_pass: val }
                                                        });
                                                    }}
                                                />
                                            </div>
                                            : <p></p>
                                    }

                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" style={{ margin: '0 auto', display: "flex" }}
                                        onClick={onClickPassword}>
                                        Password Change
                            </Button>
                                </CardActions>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            }

        </div>

    );
}