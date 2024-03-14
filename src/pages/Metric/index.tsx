import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Metric = () => {
  const { id } = useParams();
  const [fruitData, setFruitData] = useState<NutritionType | null>(null);
  const [activityTime, setActivityTime] = useState({
    walking: 0,
    running: 0,
    cycling: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:7296/api/Nutrition/GetNutritionById/${id}`);
        const data = await response.json();
        setFruitData(data);
        calculateActivityTime(data.calorie);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const calculateActivityTime = (calories : number) => {
    const walkingTime = Math.ceil(calories / 5); // Yaklaşık 300 kalori/saat ile 60 dakikada 5 kalori
    const runningTime = Math.ceil(calories / 10); // Yaklaşık 600 kalori/saat ile 60 dakikada 10 kalori
    const cyclingTime = Math.ceil(calories / 6.67); // Yaklaşık 400 kalori/saat ile 60 dakikada 6.67 kalori
    setActivityTime({
      walking: walkingTime,
      running: runningTime,
      cycling: cyclingTime,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className='mx-5 pt-20 '>
        {fruitData ? (
          <div>
            <div className="max-w-4xl mx-auto mt-8 bg-gray-900 p-8 rounded-lg shadow-lg ">
              <div className="flex flex-col sm:flex-row items-center">
                <img src={fruitData.picture} alt={fruitData.name} className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg shadow-md mb-4 sm:mb-0" />
                <div className="ml-0 sm:ml-8">
                  <h2 className="text-3xl font-semibold mb-2 text-white">{fruitData.name} <span className='text-gray-300 text-lg'>{fruitData.amount}</span></h2>
                </div>
              </div>
              <div className="mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
                  <LargeNutrient nutrient="Kcal" value={fruitData.calorie} />
                  <LargeNutrient nutrient="Karbonhidrat" value={fruitData.carbohydrate} />
                  <LargeNutrient nutrient="Protein" value={fruitData.protein} />
                  <LargeNutrient nutrient="Yağ" value={fruitData.fat} />
                  <SmallNutrient nutrient="Lif" value={fruitData.fiber} />
                  <SmallNutrient nutrient="Kolestrol" value={fruitData.cholesterol} />
                  <SmallNutrient nutrient="Sodyum" value={fruitData.sodium} />
                  <SmallNutrient nutrient="Potasyum" value={fruitData.potassium} />
                  <SmallNutrient nutrient="Kalsiyum" value={fruitData.calcium} />
                  <SmallNutrient nutrient="Vitamin A" value={fruitData.vitaminA} />
                  <SmallNutrient nutrient="Vitamin C" value={fruitData.vitaminC} />
                  <SmallNutrient nutrient="Demir" value={fruitData.iron} />
                </div>
              </div>
            </div>

            <div className='text-center p-8'>
              <h3 className="text-2xl font-bold">🔥 Bu besini nasıl eritebilirsin?</h3>
              <div className="max-w-md mx-auto  p-8 rounded-lg shadow-lg text-center">
                <p className="text-lg font-semibold mt-3">Yürüyerek (4kmh) <span className='ml-2 bg-gray-900 text-white rounded-lg px-4 py-1 block sm:inline'>{activityTime.walking} dakika</span> </p>
                <p className="text-lg font-semibold mt-3">Koşarak (9kmh) <span className='ml-2 bg-gray-900 text-white rounded-lg px-4 py-1 block sm:inline'>{activityTime.running} dakika</span></p>
                <p className="text-lg font-semibold mt-3">Bisiklet Sürerek (16kmh) <span className='ml-2 bg-gray-900 text-white rounded-lg px-4 py-1 block sm:inline'>{activityTime.cycling} dakika</span></p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center mt-8">Loading...</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

const LargeNutrient = ({ nutrient, value }: any) => {
  // Ortalama referans değerler
  const referenceValues: { [key: string]: number } = {
    Kcal: 300,
    Karbonhidrat: 50,
    Protein: 10,
    Yağ: 15,
  };

  // Renk belirleme fonksiyonu
  const determineColor = (nutrient: string, value: number) => {
    if (value <= referenceValues[nutrient]) {
      return "text-green-500"; // Yeşil
    } else if (value > referenceValues[nutrient] && value <= referenceValues[nutrient] * 1.5) {
      return "text-orange-500"; // Turuncu
    } else {
      return "text-red-500"; // Kırmızı
    }
  };

  return (
    <div className={`flex flex-col bg-white rounded-lg py-4 font-semibold ${determineColor(nutrient, value)}`}>
      <p className="text-3xl sm:text-5xl text-center">{value}</p>
      <p className="font-bold text-center text-lg">{nutrient}</p>
    </div>
  );
};

const SmallNutrient = ({ nutrient, value }: any) => (
  <div className="flex flex-col bg-white rounded-lg p-2 font-semibold">
    <p className="font-bold text-green">{nutrient}</p>
    <p>{value}</p>
  </div>
);

export default Metric;
