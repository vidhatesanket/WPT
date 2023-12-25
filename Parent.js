import Child from "./Child"
import {useState} from "react"

export default function Parent()
{
    let [arr,setarr] = useState(["Pune","Mumbai"])
    let [col,setcol] = useState("#ee1111")

    function addToArray(element)
    {
        console.log("addToArray of Parent called",element)
        //arr.push(element)
        //console.log("arr",arr)
    setarr([...arr,element])//spread operator must be used when setting obj state
    console.log("element added",arr)
    }


    function colourPicker(e)
    {
        console.log(e.target.value);
        setcol(e.target.value);
        console.log(col);
    }

    return(
        <div>
            <ol>
                {arr.map((e,index)=>{
                    return <li key={index} style={{color: `${col}` }}>{e}</li>
                })}
            </ol>
            <div>
            <input name="pranav" type="color" style={{backgroundColor: "#FF850A;"}} onChange={colourPicker}/>
            </div>
            <Child add={addToArray} name="pranav"></Child>
        </div>
    )

}