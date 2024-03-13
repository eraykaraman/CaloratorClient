import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MostWanteds = () => {
    const [mostWantedFoods, setMostWantedFoods]: any = useState([]);

    useEffect(() => {
        getMostWantedNutritions();
    }, []);

    const getMostWantedNutritions = async () => {
        try {
            const response = await fetch(`https://localhost:7296/api/Nutrition/GetMostWantedNutritions`);
            const data = await response.json();
            setMostWantedFoods(data);
        } catch (error) {
            console.error('Arama hatası:', error);
        }
    };
    return (
        <div className='most-wanteds mt-8'>
            <h2 className='text-2xl font-semibold mb-4'>En Çok Aranan Besinler</h2>
            <div className='flex justify-center flex-wrap mb-3'>
                {mostWantedFoods.map(food => (
                    <div key={food.id} className='mr-4 mb-4'> {/* Sağa 4 birim, aşağıya 4 birim boşluk bırakır */}
                        <Link to={`/metric/${food.id}`}>
                            <div className="hover:scale-105 transition-transform duration-300 drop-shadow-md ">
                                <img src={food.picture} alt={food.nutritionName} className='rounded-lg h-16 w-20 sm:h-20 sm:w-28 md:h-24 md:w-32 lg:h-28 lg:w-36 xl:h-32 xl:w-40 2xl:h-36 2xl:w-44 object-cover mb-2' />
                            </div>
                            <b className='font-bold mt-2'>{food.nutritionName}</b> <br />
                            <span className='text-sm text-gray-700'>{food.amount}</span>

                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostWanteds;
