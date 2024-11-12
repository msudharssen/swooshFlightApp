import React from 'react'
import Leftcard from './Leftcard'
import Middlecard from './Middlecard';
import Rightcard from './Rightcard';
import SaveButton from './SaveButton';

const Flightdata = function(props){
  
    if (props.data && props.data.length >= 10){
  return (
    <>
    <div className="flex border-sky-400 place-content-center">
    <Leftcard data={props.data}></Leftcard>
    <Middlecard data={props.data}></Middlecard>
    <Rightcard data={props.data}></Rightcard>
    </div>
    </>
  )
  }
}

export default Flightdata;


