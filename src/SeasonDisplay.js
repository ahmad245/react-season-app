import React from 'react';
import classes from './SeasonDisplay.module.css';

const seasonConfig={
    winter:{
        text:"Let's hit the beach",
        iconName:'snowflake'
    },
    summer:{
        text:"Burr, it is chilly",
        iconName:'sun'
    }
}
const getSeason=(lat,month)=>{
   if(month > 2 && month < 9){
       return lat > 0 ? 'summer' :'winter';
   }else{
       return lat > 0 ? 'winter' :'summer';
   }
}
const SeasonDisplay=props=>{
    const season=getSeason(props.lat,new Date().getMonth());
    let {text,iconName}=seasonConfig[season];
    return (
    <div className={`${classes.SeasonDisplay} ${classes[season]}`}>
        <i className={  `${classes.IconLeft}     massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={ `${classes.IconRight} massive ${iconName} icon`} />
    </div>
    );
}
export default SeasonDisplay;