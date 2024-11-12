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
import TableData from "@/components/TableData";


const Home = function() {
  return (
    <>
    <nav className="flex place-content-evenly mt-5">
      
 </nav>
<div className="flex place-content-evenly mt-5 bg-sky=400">
    <img src="/logo_swoosh.png" width={450} height={100}></img>
  </div>
    <Searchbar></Searchbar>
</>
  );
}
export default Home;
