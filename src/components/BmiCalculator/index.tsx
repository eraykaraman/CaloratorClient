import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [error, setError] = useState('');

  const calculateBMI = (e: any) => {
    e.preventDefault();

    if (!height || !weight) {
      setError('Lütfen tüm alanları doldurunuz.');
      return;
    }

    if (height <= 0 || weight <= 0) {
      setError('Boy, kilo ve yaş değerleri sıfırdan büyük olmalıdır.');
      return;
    }

    setError('');

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
  };

  const getBMIClassification = () => {
    if (bmi < 18.5) {
      return 'Zayıf';
    } else if (bmi < 24.9) {
      return 'Normal';
    } else if (bmi < 29.9) {
      return 'Fazla Kilolu';
    } else if (bmi < 34.9) {
      return '1. Derece Obez';
    } else if (bmi < 39.9) {
      return '2. Derece Obez';
    } else {
      return '3. Derece Obez';
    }
  };

  const getClassificationColor = () => {
    const classification = getBMIClassification();
    switch (classification) {
      case 'Zayıf':
        return 'text-yellow-500';
      case 'Normal':
        return 'text-green-500';
      case 'Fazla Kilolu':
        return 'text-green-500';
      case '1. Derece Obez':
        return 'text-red-500';
      case '2. Derece Obez':
        return 'text-red-500';
      case '3. Derece Obez':
        return 'text-red-500';
      default:
        return '';
    }
  };

  return (
    <div className="mx-auto max-w-md p-4 bg-gray-900 rounded-lg drop-shadow-md ">
      <h2 className="text-2xl mb-6 font-bold text-white">Vücut Kitle İndeksi (BMI) Hesaplayıcı</h2>
      <form onSubmit={calculateBMI}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold text-white">Boy (cm)</label>
            <input className="w-full rounded-lg p-2 focus:outline-none text-green" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-white">Kilo (kg)</label>
            <input className="w-full rounded-lg p-2 focus:outline-none text-green" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className="col-span-2 text-right">
            <button className="bg-green text-white py-2 px-4 rounded-lg hover:bg-white hover:text-green font-semibold transition duration-300 ease-in-out" type="submit">Hesapla</button>
          </div>
        </div>
        {error && <p className="bg-red-400 p-2 rounded-lg text-white mt-2 font-bold">{error}</p>}
      </form>
      {bmi !== null && (
        <div className="mt-6 bg-white rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Hesaplanan Vücut Kitle İndeksi (BMI)</h3>
          <p className={`text-lg ${getClassificationColor()}`}>Vücut Kitle İndeksi (BMI): <strong>{bmi}</strong></p>
          <p className={`text-lg ${getClassificationColor()}`}>Derecelendirme: <strong>{getBMIClassification()}</strong></p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
