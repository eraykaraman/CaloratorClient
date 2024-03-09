import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import CalorieCalculator from '../../components/CalorieCalculator';
import SearchResults from '../../components/SearchResults';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import BMICalculator from '../../components/BmiCalculator';
import MostWanteds from '../../components/MostWanteds';


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

  const handleChange = async (e: any) => {
    const query = e.target.value.trim();
    setSearchText(query);

    if (query !== "") {
      try {
        const response = await fetch(`https://localhost:7296/api/Nutrition/Search?SearchText=${query}`);
        const data = await response.json();
        setSearchResult(data);
        setShowSearchResults(true);
      } catch (error) {
        console.error('Arama hatası:', error);
      }
    } else {
      setShowSearchResults(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='pt-28 text-center '>
        <div className='slogan text-2xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl mb-8'>
          <span className='font-semibold'>"Kaç kalori" diye sormaktan </span> <br />
          <span className='font-semibold'>artık sıkıldıysan</span> <br />
          <span className='font-bold text-green'>Calorator</span> <br />
          <span className='font-semibold'>tam sana göre.</span>
        </div>
        <div className='search-container w-full md:w-2/4 lg:w-2/4 mx-auto'>
          <p className='text-lg mb-1'>Senin için hangi besini arayalım?</p>
          <div className='search flex items-center justify-between bg-gray-900 py-3 px-4 mx-4 rounded-t-lg'>
            <input
              type='text'
              placeholder='Örneğin: Kızarmış Tavuk'
              className='flex-1 w-full bg-gray-900 text-white text-lg rounded-lg focus:outline-none text-center -mr-8'
              onChange={handleChange}
            />
            <div className="flex justify-end">
              <button className="bg-green text-white py-2 px-4 rounded-lg hover:bg-white hover:text-green font-semibold transition duration-300 ease-in-out" onClick={handleSearch}>Ara</button>
            </div>
          </div>
        </div>

        {/* Arama Sonuçları */}
        {showSearchResults && <SearchResults results={searchResult} />}

        <div className='most-wanteds mt-8'>
          <MostWanteds/>
        </div>
        <div className='banner'>
          <Banner />
        </div>
        <div className='flex flex-wrap justify-center'>
          <div id='calculator' className='calculator p-4 bg-white flex flex-col md:flex-row gap-6'>
            <div className="w-full md:w-1/2">
              <CalorieCalculator />
            </div>
            <div className="w-full md:w-1/2">
              <BMICalculator />
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </div>
  );
}

export default Home;
