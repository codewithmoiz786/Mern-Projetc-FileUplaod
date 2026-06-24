import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Images from './componenets/Images'
import UploadForm from './componenets/UploadForm';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Images/>}   />
        <Route path='/upload' element={<UploadForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App