import React from "react"

const Wishlist = () =>{
    
    const [query,setQuery] = React.useState(""); 
    const [task,setTask] = React.useState([]);
    let a=0
    const handleChange = (e) =>{
        const {value} = e.target;
        setQuery(value);
       

    }

    const addto = () =>{
       a++
        const payload = {
            title: query,
        };
       

        let updatedTasks = [...task ,payload];
        setTask(updatedTasks);
    

    }
    console.log(task)
   

    if(a>3){
        return "You cannot add more than 3 items to wishlist"
    }  else{

    return (
        <>
        <h1>Wishlists</h1>
       <div>
        <input  placeholder="wishes" onChange= {handleChange} value={query} />
        <button onClick={addto}>ADD</button>
        </div>
        <div>
            {
                task.map((item) => {
                    return <div>{item.title}</div>;
                })
            }
        </div>
        
        </>
    )
        
           
        }  

   
}

export default Wishlist;