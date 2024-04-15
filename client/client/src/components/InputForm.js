import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const InputForm = (props) => {
  return (
    <>
    <p className="{props.cname} text-orange-400">{props.plcHolder}</p>
    <Input className="rounded-md" type="text"></Input>
    <Button className={props.cname}>{props.btnName}</Button>
    </>
  )
}

export default InputForm;
