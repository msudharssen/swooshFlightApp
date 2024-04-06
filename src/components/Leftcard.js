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

const Leftcard = function(props) {
    if (props.data && props.data.length >= 10){
  return (
    <Card className="w-[300px] border-orange-400 mt-10">
      <CardHeader>
        <CardTitle className="text-slate-50 self-center w=[250px]">DEPARTURE</CardTitle>
        <CardDescription className="self-center">{props.data[7]}</CardDescription>
      </CardHeader>
      <CardContent className="flex place-content-evenly">
      <p className="text-slate-50 text-5xl mt-1">{props.data[0]}</p>
      </CardContent>
      <CardContent className="flex place-content-evenly">
      <p className="text-slate-50 text-2xl mt-1">{props.data[2]}</p>
      </CardContent>
      <CardContent className="flex place-content-evenly">
      <p className="text-slate-50 text-1xl mt-1">{props.data[1]}</p>
      </CardContent>
      <CardFooter className="flex place-content-evenly">
      <CardDescription className="self-center">{props.data[9]}</CardDescription>
      </CardFooter>
      <CardFooter className="flex place-content-evenly">
      <CardDescription className="self-center">Timezone: {props.data[13]}</CardDescription>
      </CardFooter>
    </Card>
  )
 }
 else{
    return <div>HELLO</div>
}
}

export default Leftcard;
