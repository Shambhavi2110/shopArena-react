import React, {useState} from 'react'
const Count = () => {
    console.log("rendering");
    let [count, setCount] = useState(0);
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl text-zinc-900 font-semibold'>Count is: {count}</h1>
      <button className='border-2 bg-red-500 text-white p-2 font-semibold border-black cursor-pointer ' 
        onClick={(e)=>{

            // BATCHING

            // setCount(count+1);
            // setCount(count+1);
            // setCount(count+1); will increase by 1 only due to batching
            
            // setCount(++count);
            // setCount(++count);
            // setCount(++count); // +3 hoga

            //setcount k andr prev state bhi hota hai
            setCount((prev)=>prev+1); //implicit return
            setCount((prev)=>prev+1);
            setCount((prev)=>prev+1); //rendering ek bar hogi but add +3 hoga
            


            console.log(count);

        }}>
        Increment
      </button>
    </div>
  )
}

export default Count
