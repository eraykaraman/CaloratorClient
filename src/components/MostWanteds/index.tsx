import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MostWanteds = () => {
    
    const mostWantedFoods = [
        { name: 'Elma', image: 'https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg', id: 1 },
        { name: 'Brokoli', image: 'https://www.acibadem.com.tr/hayat/Images/YayinTarifler/brokoli-salatasi_5958_1.jpg', id: 2 },
        { name: 'Muz', image: 'https://www.ufuktarim.com/imaj/blog/sera-muz-yetistiriciligi.jpg', id: 3 },
        { name: 'Havuç', image: 'https://www.gurmar.com.tr/images/thumbs/0005439_havuc-kg_510.jpg', id: 4 },
        { name: 'Ispanak', image: 'https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/3140/uploads/urunresimleri/buyuk/d0619eb6-b6a6-4ca4-b4a3-2bcbeaea7270.jpg', id: 5 },
        { name: 'Tavuklu Pilav', image: 'https://www.zeynel.com.tr/wp-content/uploads/2021/12/tavuklu-pilav.png', id: 6 }
    ];

    return (
        <div className='most-wanteds mt-8'>
            <h2 className='text-2xl font-semibold mb-4'>En Çok Aranan Besinler</h2>
            <div className='flex justify-center flex-wrap mb-3'>
                {mostWantedFoods.map(food => (
                    <div key={food.id} className='mr-4 mb-4'> {/* Sağa 4 birim, aşağıya 4 birim boşluk bırakır */}
                        <Link to={`/food/${food.id}`}>
                            <div className="hover:scale-105 transition-transform duration-300 drop-shadow-md ">
                                <img src={food.image} alt={food.name} className='rounded-lg h-16 w-20 sm:h-20 sm:w-28 md:h-24 md:w-32 lg:h-28 lg:w-36 xl:h-32 xl:w-40 2xl:h-36 2xl:w-44 object-cover mb-2' />
                            </div>
                            <p className='font-semibold -mt-2'>{food.name}</p>


                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostWanteds;
