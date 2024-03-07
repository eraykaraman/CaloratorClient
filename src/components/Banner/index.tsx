import React from 'react';

const Banner = () => {
  return (
    <div className='bg-green'>
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Calorator ile kalori takibi artık çok kolay!</h1>

        </div>
        <div className="md:w-1/2">
          <p className="text-xl text-white">Calorator ile kalori takibini kolayca sağla, hesaplamalarını anlık olarak gerçekleştir ve besinlerin değerlerini anlık olarak öğren!</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
