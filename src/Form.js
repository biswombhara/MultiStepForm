import { useState } from "react";

import Profession from "./components/Profession";
import Interest from "./components/Interest";
import RightPlace from "./components/RightPlace";
import Math from "./components/Math";
import OnYourWay from "./components/OnYourWay";
import Finding from "./components/Finding";
import Learning from "./components/Learning";
export default function Form(){
    let [Page, setPage] = useState(0);
    let form = [ 
    <Profession/>, <Interest/>, <RightPlace/>, <Math/>, <OnYourWay/>, <Finding/>,<Learning/>
    ];
    if(Page===5){
        setTimeout( ()=>{
            setPage(6);
        },4000);
    }
    let bar = [ "w-[10%]", "w-[20%]", "w-[40%]", "w-[60%]", "w-[100%]"]
    let Submit = () => {
        setPage( (Page) => {
            return Page+=1;
        })
    }
    let Prev = () => {
        setPage( (Page) => {
            return Page-=1;
        })
        console.log(Page)
    }
    
    //{}
    return <div className="flex mx-auto w-10/12 flex-col items-center">
        <div className={Page>4? "hidden":"flex items-center"}>
            <div onClick={Prev} className=" cursor-pointer">
                <i className={Page===0?"hidden":"fa-solid mr-2 fa-chevron-left"}></i>
            </div>
            <div className="w-[83vw] my-10 border rounded-md h-1 bg-slate-200">
                <div className={`${bar[Page]} bg-green-700 relative bottom-[0.05rem] h-1 transition-all`}>
                
                </div>
            </div>
        </div>
        {form[Page]}
        <div className={Page>4? "":""}>
            <button disabled={Page<=0? false:false} 
            className={Page<=4?"bg-black px-16 py-2 rounded-lg text-white     text-xl my-4 mx-auto w-fit":"hidden"} onClick={Submit}>Submit</button>
        </div>        
    </div>
}