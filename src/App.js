import React from "react";
import Card from './components/Card';
import Data from './data.json';
import EventHandler from "./EventHandler";
function App()
{
    return <div>
                <EventHandler/>
                {/*<h1 className='styleheadings'>My tinder app</h1>*/}
                {/*{Data.map((item,index)=> <Card key={index} titleTinder={item.title} descNo={item.desc}/>)}*/}
                
           </div>
}
export default App;