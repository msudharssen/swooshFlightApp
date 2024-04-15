import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from "./ui/progress"

const Middlecard = function(props) {

    if (props.data && props.data.length >= 10){
  return (
    <Card className="w-[450px] border-orange-400 mt-10 h-[360px] bg-black">
      <CardHeader className="h-50 bg-black">
        <CardTitle className="text-slate-50 self-center">{props.data[11]}</CardTitle>
        <CardDescription className="self-center">{props.data[6]}</CardDescription>
      </CardHeader>
      <CardContent className="flex place-content-evenly">
      <Progress className="mt-20 justify-center items-center" value={props.data[12]}/>
      </CardContent>
    </Card>
  )
    }
    else{
        return <div>HELLO</div>
    }
}

export default Middlecard;