import React from 'react';
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core" 
function InfoBox({title, cases, active,isRed, total,...props}) {
    return (
        <Card onClick = {props.onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
            <CardContent>
                {/* Tittle i.e coronavirus Cases*/}
                <Typography className="infoBox_tittle" color="textSecodary">
                    {title}
                </Typography>

                {/* +120k number of cases*/}
                <h2 className={`infoBox_cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>

                {/* 1.2M total*/}
                <Typography className="info_total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
