import { Link } from "react-router-dom";

// Arama Sonuçları Bileşeni
const SearchResults = ({ results }: any) => (
    <div className='search-results w-full md:w-2/4 lg:w-1/3 mx-auto rounded-b-lg'>
      <div className='overflow-x-auto rounded-b-lg mx-4'>
        <table className='table-auto w-full mx-auto'>
          <tbody>
            {results.length === 0 ? (
              <tr className='bg-red-400'>
                <td className='px-4 py-4 text-white text-center font-semibold' colSpan='2'>Besin bulunamadı.</td>
              </tr>
            ) : (
              results.map(result => (
                <tr key={result.id} className='bg-gray-900 hover:bg-green mb-10 transition duration-300 ease-in-out '>
                  <td className='px-4 py-4'>
                    <Link to={`/food/${result.id}`} className='flex items-center text-white'>
                      <img className='h-16 w-20 object-cover mr-2 rounded-lg' src={result.picture} alt={result.name} />
                      <span className='font-semibold'>{result.nutritionName}</span>
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  export default SearchResults