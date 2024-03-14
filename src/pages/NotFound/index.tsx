import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const NotFound = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-9xl font-bold text-green mb-4">404</h1>
        <p className="text-2xl font-semibold mb-4">Hmm... Kaybolmuş gibisin.</p>
        <p>
          Anasayfaya dönmek için
          <a href="/" className="text-green hover:underline"> buraya</a> tıklayabilirsin.
        </p>
      </div>
      <Footer/>
    </div>

  );
}

export default NotFound;
