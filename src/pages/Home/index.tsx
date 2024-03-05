import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom'; 

const mostWantedFoods = [
  { name: 'Elma', image: 'https://cdn.yemek.com/uploads/2015/10/elma-zencefil-suyu-aralik-2020.jpg', id: 1 },
  { name: 'Brokoli', image: 'https://www.acibadem.com.tr/hayat/Images/YayinTarifler/brokoli-salatasi_5958_1.jpg', id: 2 },
  { name: 'Muz', image: 'https://www.ufuktarim.com/imaj/blog/sera-muz-yetistiriciligi.jpg', id: 3 },
  { name: 'Havuç', image: 'https://www.gurmar.com.tr/images/thumbs/0005439_havuc-kg_510.jpg', id: 4 },
  { name: 'Ispanak', image: 'https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/3140/uploads/urunresimleri/buyuk/d0619eb6-b6a6-4ca4-b4a3-2bcbeaea7270.jpg', id: 5 },
  { name: 'Tavuklu Pilav', image: 'https://www.zeynel.com.tr/wp-content/uploads/2021/12/tavuklu-pilav.png', id: 6 }
];

// Arama Sonuçları Bileşeni
const SearchResults = ({ results } : any) => (
  <div className='search-results w-full md:w-2/4 lg:w-1/3 mx-auto rounded-b-lg bg-green'>
    <div className='overflow-x-auto rounded-b-lg '>
      <table className='table-auto w-full mx-auto'>
        <tbody>
          {results.length === 0 ? (
            <tr className='bg-red-400'>
              <td className='px-4 py-4 text-white text-center' colSpan='2'>Besin bulunamadı.</td>
            </tr>
          ) : (
            results.map(result =>  (
              <tr key={result.id} className='bg-gray-900 hover:bg-green mb-10 transition duration-300 ease-in-out'>
                <td className='px-4 py-4 '>
                  <Link to={`/food/${result.id}`} className=' text-white'>{result.nutritionName}</Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>
);

const Home = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = async () => {
    const query = searchText.trim();
    
    if (query !== "") {
      try {
        const response = await fetch(`https://localhost:7296/api/Nutrition/Search?SearchText=${query}`);
        const data = await response.json();
        setSearchResult(data);
        setShowSearchResults(true);
      } catch (error) {
        console.error('Arama hatası:', error);
      }
    }
  };

  const handleChange = (e : any) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e : any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Navbar />
      <div className='m-5 text-center'>
        <div className='slogan text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl mb-8'>
          <span className='font-semibold'>"Kaç kalori" diye sormaktan </span> <br/>
          <span className='font-semibold'>artık sıkıldıysan</span> <br/>
          <span className='font-bold text-green'>Calorator</span> <br/>
          <span className='font-semibold'>tam sana göre.</span>
        </div>
        <div className='search-container w-full md:w-2/4 lg:w-1/3 mx-auto'>
          <p className='text-lg mb-1'>Senin için hangi besini arayalım?</p>
          <div className='search flex items-center justify-between bg-gray-900 py-3 px-4 rounded-t-lg'>
            <input
              type='text'
              placeholder='Örneğin: Kızarmış Tavuk'
              className='flex-1 w-full bg-gray-900 text-white text-lg rounded-lg focus:outline-none text-center -mr-14'
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <div className="flex justify-end">
            <button className="bg-green hover:bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out" onClick={handleSearch}>Ara</button>
          </div>
          </div>
          
        </div>

        {/* Arama Sonuçları */}
        {showSearchResults && <SearchResults results={searchResult} />}

        <div className='most-wanteds mt-8'>
          <h2 className='text-2xl font-semibold mb-4'>En Çok Aranan Besinler</h2>
          <div className='flex justify-center flex-wrap'>
            {mostWantedFoods.map(food => (
              <div key={food.id} className='mr-4 mb-4'>
                <Link to={`/food/${food.id}`}>
                  <div className="hover:scale-105 transition-transform duration-300 drop-shadow-md ">
                    <img src={food.image} alt={food.name} className='rounded-lg h-20 w-24 sm:h-24 sm:w-32 md:h-28 md:w-36 lg:h-32 lg:w-40 xl:h-36 xl:w-44 2xl:h-40 2xl:w-48 object-cover mb-2' />
                  </div>
                  <p className='text-base font-semibold -mt-2'>{food.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
