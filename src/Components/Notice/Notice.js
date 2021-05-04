import React from 'react';
import Select from 'react-select';
import { TextField, Paper, makeStyles, Button, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import 'tachyons'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(3),
        marginLeft: theme.spacing(20),
        marginRight: theme.spacing(20),
        padding: theme.spacing(3)
    }
}))

function Notice() {
    const [message, setMessage] = React.useState('');
    const [police_station] = React.useState([{ value: 1, label: 'Nangal' }, { value: 2, label: 'City Morinda' },
    { value: 3, label: 'Sri Anandpur Sahib' }, { value: 4, label: 'City Rupnagar' }, { value: 5, label: 'Kiratpur Sahib' },
    { value: 6, label: 'Sri Chamkaur Sahib' }, { value: 7, label: 'Sadar Rupnagar' }, { value: 8, label: 'Sadar Morinda' },
    { value: 9, label: 'Nurpurbedi' }, { value: 10, label: 'Singh Bhagwantpur' }]);

    const [choosen, setChoosen] = React.useState('all');
    const [ps_choosen, setPS] = React.useState([]);
    const classes = useStyles();

    function onSubmitChange(e) {
        setChoosen(e.target.value);
    }

    function handleChange(e){
         setPS(e)
    }

    function onSubmit() {
        if(message === '')
          alert('Message field is empty!!!\nKindly add it...')
        else{
            fetch('http://localhost:3000/api/notice', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    message: message,
                    type: 'all'
                })
              })
            .then(data => {
                console.log(data);
            })
        }  
    }

    function onSubmit2() {
        if(message === '')
           alert('Message field is empty!!!\nKindly add it...')
        else if(ps_choosen.length === 0)
          alert('Kindly select atleast 1 Police Station!!!')
        else{
            fetch('http://localhost:3000/api/notice', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    message: message,
                    type: 'not all',
                    ps_choosen: ps_choosen
                })
              })
            .then(data => {
                console.log(data);
            })
        }  
    }
    return (
        <div>
            <h2>E-Notice Board</h2>
            <Paper className={classes.pageContent}>
                <TextField required
                    variant="outlined"
                    label="Message"
                    fullWidth='true'
                    name="msg"
                    type='text'
                    multiline={true}
                    rows={3}
                    value={message}
                    onChange={e => {
                        const val = e.target.value;
                        setMessage(val)
                    }}
                />
                <RadioGroup row onChange={onSubmitChange} value={choosen}>
                    <FormControlLabel value='all' name='' control={<Radio />} label=' Send to all police stations' />
                    <FormControlLabel value='not all' name='' control={<Radio />} label='Send to particular police station' />
                </RadioGroup>

                {choosen === 'all'
                    ?
                    <div className='pt4'>
                        <Button variant="contained" color="secondary" onClick={onSubmit}>
                            Send to all police stations
			        </Button>
                    </div>
                    :
                    <div className='pt3'>
                        <h3 className='pb2'>Kindly Select Police Station</h3>
                        <Select
                            style={{width: '20px'}}  
                            value = {ps_choosen}
                            onChange={handleChange}
                            isMulti
                            options={police_station}
                        />
                        <Button variant="contained" color="secondary" onClick={onSubmit2} style={{marginTop: '20px' }} >
                            Send to these police station
			        </Button>
                    </div>
                }

            </Paper>
        </div>
    )
}

export default Notice;