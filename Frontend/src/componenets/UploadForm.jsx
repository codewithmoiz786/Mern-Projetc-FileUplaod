import React, { useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UploadForm = () => {
    const [image, setimage] = useState(null)
    const [caption, setcaption] = useState("")
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const fileRef = useRef()

    const handleForm = async (e) => {
        e.preventDefault()

        if (!image) {
            alert("Please select an image")
            return
        }
        const formData = new FormData()
        formData.append("image", image)
        formData.append("caption", caption)
        setloading(true)
        try {

            const res = await axios.post('http://localhost:3000/post/createPost', formData)
            console.log("success", res.data);
            navigate("/")
            setcaption('')
            setimage(null)
            fileRef.current.value = ""
        }
        catch (err) {
            console.log(err);
        } finally { setloading(false) }
    }

    return (
        <div className='h-screen w-full  flex justify-center items-center'>
            <form onSubmit={handleForm} className='p-10 flex flex-col w-100 border-1 h-100 items-center justify-center gap-2 bg-zinc-700 rounded-2xl'>
                <input type="file" ref={fileRef} name='image' className='px-4 py-2 bg-cyan-100 border-1  outline-none rounded' onChange={(e) => {
                    setimage(e.target.files[0])
                }} />
                <input type="text" name='caption' placeholder='Enter caption' className='px-4 py-2 bg-cyan-100 border-1 outline-none rounded h-20  w-full ' onChange={(e) => {
                    setcaption(e.target.value)
                }} />
                <button
                    disabled={loading}
                    className={`py-2 px-10 rounded-3xl ${loading ? "bg-gray-500" : "bg-zinc-800"
                        } text-amber-50`}
                >
                    {loading ? "Uploading..." : "Submit"}
                </button>
            </form>
        </div>
    )
}

export default UploadForm