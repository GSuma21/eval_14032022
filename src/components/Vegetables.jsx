import React from "react"

const Vegetable = () =>{
    const [count1,setCount1] = React.useState(10); 
   
  function add1 () {
       setCount1(count1+1)
    }
   function adsub1(){
       setCount1(count1-1)
   }

   const [count2,setCount2] = React.useState(8); 
   
  function add2 () {
       setCount2(count2+1)
    }
   function adsub2(){
       setCount2(count2-1)
   }
   const [count3,setCount3] = React.useState(5); 
   
  function add3 () {
       setCount3(count3+1)
    }
   function adsub3(){
       setCount3(count3-1)
   }
   const [count4,setCount4] = React.useState(7); 
   
  function add () {
       setCount4(count4+1)
    }
   function adsub(){
       setCount4(count4-1)
   }
    return (
        <>
        <div>tomatoes:{count1}</div>
        <button onClick={add1}>+</button>
        <button onClick={adsub1}>-</button>

        <div>potatoes:{count2}</div>
        <button onClick={add2}>+</button>
        <button onClick={adsub2}>-</button>

        <div>carrots:{count3}</div>
        <button onClick={add3}>+</button>
        <button onClick={adsub3}>-</button>

        <div>onions:{count4}</div>
        <button onClick={add}>+</button>
        <button onClick={adsub}>-</button>
        </>
    )
}

export default Vegetable;