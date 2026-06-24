import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Images = () => {
    const navigate = useNavigate()
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/post/files').then((res) => res.json()).then((data) => {
            // setdata(data.allfFiles)
            setdata(data.allFiles || []);

        })
    }, [])

    return (
        <>
            <div className='flex justify-between px-5'>
                <h1 className='text-4xl ml-10 m-2 font-medium text-indigo-900'>Images</h1>
                <button onClick={(e) => {
                    navigate("/upload")
                }} className='bg-gray-600 px-10 rounded-2xl mt-4 text-blue-300'>Upload Image</button>
            </div>


            <div className="min-h-screen flex flex-wrap p-3 gap-4">
                {data.length > 0 && data.map((user, idx) => {
                    return (<div key={idx} className="min-h-60 w-70 max-h-fit bg-gray-200 rounded-2xl overflow-hidden border-1 border-cyan-400">
                        <img className='bg-gray-400 w-full h-40 object-cover' src={user.uri} alt="" />
                        <h2 className='text-blue-800 ml-3 text-2xl'>Title</h2>
                        <p className='px-2 text-lm text-gray-900 mb-2  '>{user.caption}</p>
                    </div>)
                })}

            </div>
        </>
    )
}

export default Images