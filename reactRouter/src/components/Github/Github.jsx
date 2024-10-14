import React, { useEffect, useState } from 'react'


function Github() {
    
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/Omdarade1399')
        .then((res)=> res.json())
        .then((data) => setData(data))
    }, [])

  return (
    <div className='flex justify-around flex-col items-center text-center m-5 bg-gray-600 text-white p-5 text-3xl'>
        <img className='m-5 shadow-yellow-300 rounded-full' src={data.avatar_url} alt="Git picture" width={300} />
        <h1 className='m-5'>Github Followers: {data.followers}</h1>
    </div>
  )
}

export default Github
