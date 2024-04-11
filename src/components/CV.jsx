import React from 'react'
import pdf from '../assets/CV.pdf'
import { AiOutlineDownload } from "react-icons/ai";

const CV = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className='my-5'>CV</h2>
        <a href={pdf} download="CV-Jonasi.pdf">
            <AiOutlineDownload className='text-green-500' size={"30px"}/>
        </a>
    </div>
  )
}

export default CV