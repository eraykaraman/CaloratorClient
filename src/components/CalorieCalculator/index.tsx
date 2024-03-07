import React, { useState } from 'react';

const KaloriHesaplayici = () => {
  const [gender, setgender] = useState('');
  const [age, setage] = useState('');
  const [height, setheight] = useState('');
  const [weight, setweight] = useState('');
  const [activityLevel, setactivityLevel] = useState('');
  const [goal, setgoal] = useState('');
  const [calories, setCalories] = useState(null);
  const [protein, setProtein] = useState(null);
  const [carbohydrate, setcarbohydrate] = useState(null);
  const [fat, setfat] = useState(null);
  const [error, setError] = useState('');

  const hesapla = (e: any) => {
    e.preventDefault();

    if (!gender || !age || !height || !weight || !activityLevel || !goal) {
      setError('Lütfen tüm alanları doldurunuz.');
      return;
    }

    if (age <= 0 || height <= 0 || weight <= 0) {
      setError('Yaş, height ve weight değerleri sıfırdan büyük olmalıdır.');
      return;
    }

    setError('');

    let bazalMetabolizmaOrani = 0;

    if (gender === 'erkek') {
      bazalMetabolizmaOrani = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'kadın') {
      bazalMetabolizmaOrani = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    let aktiviteKatsayisi = 1.2; // Varsayılan olarak hareketsiz

    switch (activityLevel) {
      case 'hafif':
        aktiviteKatsayisi = 1.375;
        break;
      case 'orta':
        aktiviteKatsayisi = 1.55;
        break;
      case 'yüksek':
        aktiviteKatsayisi = 1.725;
        break;
      case 'çokYüksek':
        aktiviteKatsayisi = 1.9;
        break;
      default:
        break;
    }

    let goalKatsayisi = 0;

    switch (goal) {
      case 'weightAl':
        goalKatsayisi = 1.1;
        break;
      case 'weightVer':
        goalKatsayisi = 0.9;
        break;
      case 'weightKoruma':
        goalKatsayisi = 1.0;
        break;
      default:
        break;
    }

    const toplamKalori: any = Math.round(bazalMetabolizmaOrani * aktiviteKatsayisi * goalKatsayisi);
    const toplamProtein: any = Math.round((toplamKalori * 0.3) / 4); // %30'u protein
    const toplamcarbohydrate: any = Math.round((toplamKalori * 0.5) / 4); // %50'si carbohydrate
    const toplamfat: any = Math.round((toplamKalori * 0.2) / 9); // %20'si yağ

    setCalories(toplamKalori);
    setProtein(toplamProtein);
    setcarbohydrate(toplamcarbohydrate);
    setfat(toplamfat);
  };

  return (
    <div className="mx-auto max-w-md p-4 bg-gray-900 rounded-lg drop-shadow-md ">
      <h2 className="text-2xl mb-6 font-bold text-white">Kalori ve Makro Besin Hesaplayıcı</h2>
      <form onSubmit={hesapla}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold  text-white">Cinsiyet</label>
            <select className="w-full rounded-lg p-2 focus:outline-none  text-green " value={gender} onChange={(e) => setgender(e.target.value)}>
              <option value="">Seçiniz</option>
              <option value="erkek">Erkek</option>
              <option value="kadın">Kadın</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold  text-white ">Yaş</label>
            <input className="w-full rounded-lg p-2 focus:outline-none   text-green" type="number" value={age} onChange={(e) => setage(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 font-semibold  text-white">Boy (cm)</label>
            <input className="w-full rounded-lg p-2 focus:outline-none   text-green" type="number" value={height} onChange={(e) => setheight(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 font-semibold  text-white">Kilo (kg)</label>
            <input className="w-full rounded-lg p-2 focus:outline-none   text-green" type="number" value={weight} onChange={(e) => setweight(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 font-semibold  text-white">Aktivite Seviyesi</label>
            <select className="w-full rounded-lg p-2 focus:outline-none text-green" value={activityLevel} onChange={(e) => setactivityLevel(e.target.value)}>
              <option value="">Seçiniz</option>
              <option value="hafif">Hafif (Haftada 1-3 gün)</option>
              <option value="orta">Orta (Haftada 3-5 gün)</option>
              <option value="yüksek">Yüksek (Haftada 6-7 gün)</option>
              <option value="çokYüksek">Çok Yüksek (Fiziksel iş ya da çift antrenman)</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold  text-white">Hedef</label>
            <select className="w-full rounded-lg p-2 focus:outline-none  text-green" value={goal} onChange={(e) => setgoal(e.target.value)}>
              <option value="">Seçiniz</option>
              <option value="weightAl">Kilo Almak</option>
              <option value="weightVer">Kilo Vermek - Yağ Yakmak</option>
              <option value="weightKoruma">Kilo Korumak</option>
            </select>
          </div>
          <div className="col-span-2 text-right">
            <button className="bg-green text-white py-2 px-4 rounded-lg hover:bg-white hover:text-green font-semibold transition duration-300 ease-in-out" type="submit">Hesapla</button>
          </div>
        </div>
        {error && <p className="bg-red-400 p-2 rounded-lg text-white mt-2 font-bold">{error}</p>}
      </form>
      {calories && (
        <div className="mt-6 bg-white rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Hesaplanan Makrolar</h3>
          <p className='text-lg'>🔥Günlük Kalori İhtiyacınız: <strong className='text-green'>{calories}</strong> kalori.</p>
          <p className='text-lg'>🥩Günlük Protein İhtiyacınız: <strong className='text-green'>{protein}</strong> gram.</p>
          <p className='text-lg'>🥖Günlük Karbonhidrat İhtiyacınız: <strong className='text-green'>{carbohydrate}</strong> gram.</p>
          <p className='text-lg'>🧈Günlük Yağ İhtiyacınız: <strong className='text-green'>{fat}</strong> gram.</p>
        </div>
      )}
    </div>
  );
};

export default KaloriHesaplayici;
