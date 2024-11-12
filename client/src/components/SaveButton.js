import React from 'react';
import { Button } from './ui/button';
import { useToast } from "./ui/use-toast";




const SaveButton = function(){
  const { toast } = useToast()
  return (
    <div className="flex place-content-center">
    <Button className="flex rounded-md ml-10 mt-10 w-20" onClick={() =>{toast({title: "Sign In To Continue",})}}>SAVE</Button>
    </div>
  )
}

export default SaveButton;
