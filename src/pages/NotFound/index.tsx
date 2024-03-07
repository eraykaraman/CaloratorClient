import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-red-200 p-10 mx-5 text-red-500 flex items-center justify-center'>
        <h4 className='font-semibold'>Aradığın sayfa buralarda yok gibi 😱 Bununla hemen ilgileniyor olacağız.</h4>

      </div>
      <div className='bg-green p-10 mx-5'>
        <p className='font-semibold underline px-4 text-center text-white'><Link to="/">Anasayfaya Geri Dön</Link></p>
        </div>
    </div>
  )
}

export default NotFound