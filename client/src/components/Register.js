import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from './ui/input';
import InputForm from './InputForm';
import { useState } from 'react';
import { Button } from './ui/button';

const Register = function()  {

  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [usernameLogin, setUsernameLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    async function pressToLogin(e){

            let informationToSend = {"username": usernameLogin, "password": passwordLogin}
            const path = `http://localhost:3002/login`;
            const options = 
            {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(informationToSend),
            credentials: "include"
            };
            e.preventDefault();
            const response = await fetch(path, options);
            const logStat = await response.json();
            console.log(logStat)
            if(logStat.userExists){
                alert("Welcome ".concat(logStat.user));
                setUserin(true);
                console.log('logged in')
            }
            else{
                alert("Username or Password Incorrect");
                setUserin(false);
                console.log('not logged in')

            } 

    }  



    async function pressToRegister(e){

        if(password === confirmPassword){
            let informationToSend = {"username": username, "password": password}
            const path = `http://localhost:3002/register`;
            const options = 
            {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(informationToSend)
            };
                e.preventDefault();
                const response = await fetch(path, options);
                const regStatus = await response.json();
                console.log(regStatus)
                if(regStatus.registerStatus === "Successful"){
                    alert("Registration Successful!, Sign In to Continue");
                    window.location.reload();
                    console.log('Registered')

                }
                else{
                    alert("Registration Unsuccessful, Username Already Taken");
                    window.location.reload();
                    console.log('Not Registered')

                }
            }   
        else{
            alert("Passwords Do Not Match!")
        }
    }  



  return (
  <Tabs defaultValue="getuser" className="w-[400px] ml-10">
  <TabsList className="border-gray-900 bg-orange-400 text-black">
    <TabsTrigger value="Log In" >Sign In</TabsTrigger>
    <TabsTrigger value="Register">Register</TabsTrigger>
  </TabsList>
  <TabsContent value="Log In">
  <p className='text-orange-400'>Username</p>
  <Input type="text" className="mb-2 rounded-md" onChange={e => setUsernameLogin(e.target.value)} autoComplete="off"></Input>
  <p className='text-orange-400'>Password</p>
  <Input type="password" className="mb-2 rounded-md" onChange={e => setPasswordLogin(e.target.value)} autoComplete="off"></Input>
  <Button className="mt-2 rounded-md" onClick={pressToLogin}>Log In</Button>
  </TabsContent>
  <TabsContent value="Register">
  <p className='text-orange-400'>Choose Username</p>
  <Input  className="rounded-md" type="text"  onChange={e => setUsername(e.target.value)} autoComplete="off"></Input>
  <p className='mt-4 text-orange-400'>Enter Password</p>
  <Input  type="password" className="mb-2 rounded-md"  onChange={e => setPassword(e.target.value)} autoComplete="off"></Input>
  <p className='mt-4 text-orange-400'>Re-Enter Password</p>
  <Input  type="password" className="mb-2 rounded-md"  onChange={e => setConfirmPassword(e.target.value)} autoComplete="off"></Input>
  <Button className="mt-2 rounded-md" onClick={pressToRegister}>Register</Button>
  </TabsContent>
  </Tabs>  
  )
}

export default Register;
