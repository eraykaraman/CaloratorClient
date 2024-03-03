import React from 'react';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div >
      <Navbar />
      <div className='m-5 text-center'>
        <div className='slogan'>
          <span className='text-3xl  font-semibold'>"Kaç kalori" diye sormaktan </span> <br/>
          <span className='text-3xl font-semibold'>artık sıkıldıysan</span> <br/>
          <span className='text-6xl font-bold text-green'>Calorator</span> <br/>
          <span className='text-3xl font-semibold'>tam sana göre.</span>
        </div>
        <div className='search-container w-3/5 mx-auto mt-8'>
          <p className='text-xl'>Senin için hangi besini arayalım?</p>
          <div className='search flex items-center justify-between bg-gray-900 p-4 rounded-2xl'>
            <input
              type='text'
              placeholder='Örneğin: Kızarmış Tavuk'
              className='flex-1 w-10 bg-gray-900 text-white rounded-lg focus:outline-none text-center'
            />
          </div>
          <div className="flex mt-2 justify-end">
            <button className="bg-green hover:bg-green-500 text-white text-sm font-semibold py-2 px-10 rounded-xl transition duration-300 ease-in-out">Ara</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
