import React from 'react'
import './Table.css';  
import './dashboard.css';

export default class Table extends React.Component{
     
       constructor(props){
           super(props);
           this.state = {
               policeStation : ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur'],
           }
       }

       render(){
        
        if(this.props.flag === 1){
            const scores = [{ id: 1, score: this.props.report[0].score }, {id:2, score:this.props.report[1].score}, { id:3 , score:this.props.report[2].score}, { id:4 , score: this.props.report[3].score}, { id:5, score: this.props.report[4].score }, { id:6, score: this.props.report[5].score}, {id:7, score: this.props.report[6].score}, { id:8, score: this.props.report[7].score}, { id:9, score: this.props.report[8].score}, {id:10, score: this.props.report[9].score }];     
            scores.sort(function(a, b) {
                return b.score - a.score;
            });

            return(
                <div className="table">

                { scores.map((details, index) => (
                        <tr key={index} >
                            <td>{this.state.policeStation[details.id - 1]}</td>
                            <td>
                                <strong> {details.score} </strong>
                            </td>
                        </tr>
                        ))
                    }
                </div>
            );
           }
         
        else{
            const datemod = [{ id: 1, datemod: this.props.report[0].datemod.split(' ')[0] }, {id:2, datemod:this.props.report[1].datemod.split(' ')[0]}, { id:3 , datemod:this.props.report[2].datemod.split(' ')[0] }, { id:4 , datemod: this.props.report[3].datemod.split(' ')[0] }, { id:5, datemod: this.props.report[4].datemod.split(' ')[0] }, { id:6, datemod: this.props.report[5].datemod.split(' ')[0] }, {id:7, datemod: this.props.report[6].datemod.split(' ')[0] }, { id:8, datemod: this.props.report[7].datemod.split(' ')[0]}, { id:9, datemod: this.props.report[8].datemod.split(' ')[0]}, {id:10, datemod: this.props.report[9].datemod.split(' ')[0] }];
            return(
              <div>
              <div className="table table2">
                 {  datemod.map((details, index) => (
                        <tr key={index} >
                        <td>{this.state.policeStation[details.id - 1]}</td>
                        {  details.datemod === ''
                            ?  <td>   
                                <strong> NA </strong>
                                </td>
                            :
                            <td>   
                            <strong> {details.datemod} </strong>
                            </td>
                         }
                         </tr>
                       ))
                   }
                </div>
            </div>
            );
        }  
        }
    }

