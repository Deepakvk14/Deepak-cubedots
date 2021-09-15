import React,{useEffect,useState} from 'react'
import axios from "axios";
import filter from "./filter.json";
import "./Building.css"
// import data1 from "./data";

function Building() {
    const [apiData, setApiData] =useState([]);
    const [search1, setSearch] =useState('');
    const [post, setPost] =useState('');
    const [prices, setPrices] = useState([]);
    const [input, setInput] =useState([]);
    const [show, setShow] =useState([]);
    useEffect(()=>{
        const MainData = (()=>{
       axios.get('./UserData.json')
        .then((res)=>{
          console.log(res.data);
          setApiData(res.data); 
        }).catch((err)=>{
          console.log(err);
        })
        // console.log("hello",Data)
    })
    MainData()
   
    },[])
    const Show= ()=>{
        setShow(input)
    }
    console.log(filter)
    const Search =()=>{
        
        if(search1==='prices' ) {
            setPrices(post.prices)
        }
        else if(search1==='floor') {
            setPrices(post.floor);
        }
        else if(search1==='bedroom') {
            setPrices(post.bedroom);
        }
        else if(search1==='grossm2') {
            setPrices(post.grossm2);
        }else {
            console.log(post)
        }
    }
   console.log(prices)
    // const a = JSON.stringify(filter)
    return (
        <div>
            <select value={search1} onClick={()=>setPost(filter)} onChange={(e)=>setSearch(e.target.value) }>
                <option> Select </option>
                <option> prices </option>
                <option> floor</option>
                <option> grossm2</option>
                <option> bedroom</option>
               
            </select>
            <button onClick={Search}> Search</button> 
           <select value={input} onChange={(e)=>setInput(e.target.value)}> 
          {
              prices.map((elem,ind)=>{
                  return(
                      <option key={ind}>{elem}</option>
                  )
              })
          }
          </select>
          <button onClick={Show}>Show</button>
          <div className="Card">
          {
              apiData.filter((val)=>{
                  if(input==="") {
                      return val;
                  } else if(val.floor.includes(input)) {
                      return val
                  }
              }).map((elem,id)=>{
                return(
                    <div className="card" key={id}>
                        <p>{`prices:${elem.prices}`}</p>
                        <p>{`bedroom:${elem.bedroom}`}</p>
                        <p>{`floor: ${elem.floor}`}</p>
                        <p>{`grossm2: ${elem.grossm2}`}</p>
                        {/* <p>{elem.availability}</p> */}
                    </div>
                  
                )
            })
          }
          </div>
          {` Its Work only on floor.... bcoz of fillter value does not match ${show}`}
        </div>
    )
}

export default Building
