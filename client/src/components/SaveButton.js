import React from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';

const SaveButton = function(){
  return (
    <div className="flex place-content-center">
    <Button className="flex rounded-md ml-10 mt-10 w-20" onClick={() =>{toast("Sign In To Continue")}}>SAVE</Button>
    </div>
  )
}

export default SaveButton;
