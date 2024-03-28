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

const Rightcard = function(props) {
    if (props.data && props.data.length >= 10){
  return (
    <div>
    <Card className="w-[300px] border-orange-400 mt-10">
      <CardHeader>
        <CardTitle className="text-slate-50 self-center">ARRIVAL</CardTitle>
        <CardDescription className="self-center">{props.data[8]}</CardDescription>
      </CardHeader>
      <CardContent className="flex place-content-evenly">
      <p className="text-slate-50 text-5xl mt-1">{props.data[3]}</p>
      </CardContent>
      <CardContent className="flex place-content-evenly">
      <p className="text-slate-50 text-2xl mt-1">{props.data[5]}</p>
      </CardContent>
      <CardContent className="flex place-content-evenly">
      <p className="text-slate-50 text-1xl mt-1">{props.data[4]}</p>
      </CardContent>
      <CardFooter className="flex place-content-evenly">
      <CardDescription className="self-center">{props.data[10]}</CardDescription>
      </CardFooter>
      <CardFooter className="flex place-content-evenly">
      <CardDescription className="self-center">Timezone: {props.data[14]}</CardDescription>
      </CardFooter>
    </Card>
    </div>
  )
    }
    else{
        return <div>HELLO</div>
    }
}

export default Rightcard;