"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image } from "next/image";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Register from "@/components/Register";
import Searchbar from "@/components/Searchbar";
import Flightdata from "@/components/Flightdata";
import SaveButton from "@/components/SaveButton";


const Home = function() {
  return (
    <>
    <nav className="flex place-content-evenly mt-5">
      <Button className="rounded-full text-orange-400 bg-slate-950 hover:bg-orange-400 border-orange-400 hover:border-slate-950" variant="outline">Home</Button>
      <Button className="rounded-full text-orange-400 bg-slate-950 hover:bg-orange-400 border-orange-400 " variant="outline">About</Button>
      <Button className="rounded-full bg-slate-950 text-slate-950 hover:bg-orange-400 border-orange-400" variant="outline">
      <Dialog className="w-fit h-fit">
  <DialogTrigger className=" text-orange-400 w-full h-full hover:text-slate-950">Swoosh Vault</DialogTrigger>
  <DialogContent className="bg-black border-orange-600">
    <Register></Register>
  </DialogContent>
</Dialog>
 </Button>
 </nav>
<div className="flex place-content-evenly mt-5 bg-sky=400">
    <img src="/logo_swoosh.png" width={450} height={100}></img>
  </div>
    <Searchbar></Searchbar>
    <Flightdata/>
</>
  );
}
export default Home;
