import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from './ui/input';
import InputForm from './InputForm';

const Register = function()  {

  


  return (
  <Tabs defaultValue="getuser" className="w-[400px] ml-10">
  <TabsList className="border-gray-900 bg-orange-400 text-black">
    <TabsTrigger value="Log In" >Sign In</TabsTrigger>
    <TabsTrigger value="Register">Register</TabsTrigger>
  </TabsList>
  <TabsContent value="Log In">
  <p className='text-orange-400'>Username</p>
  <Input type="text" className="mb-2 rounded-md"></Input>
  <InputForm plcHolder="Password" btnName="Log In" cname="mt-2 rounded-md"></InputForm>
  </TabsContent>
  <TabsContent value="Register">
  <p className='text-orange-400'>Choose Username</p>
  <Input  className="rounded-md" type="text"></Input>
  <p className='mt-4 text-orange-400'>Enter Password</p>
  <Input  type="text" className="mb-2 rounded-md"></Input>
  <InputForm plcHolder="Re-Enter Password" btnName="Register" cname="mt-2 rounded-md"></InputForm>
  </TabsContent>
  </Tabs>  
  )
}

export default Register;
