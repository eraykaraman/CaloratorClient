import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Recipe = () => {

    const recipes = [
        {
            id: 1,
            title: 'Fırında Tavuk',
            ingredients: ['Tavuk', 'Zeytinyağı', 'Tuz', 'Karabiber', 'Kekik'],
            cookingTime: '45 dakika',
            image: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2016/07/firin-posetinde-tavuk-yeni.jpg',
            instructions: '1. Tavuk parçalarını zeytinyağı, tuz, karabiber ve kekik ile ovun. 2. Fırın tepsisine yerleştirin. 3. Önceden ısıtılmış 200°C fırında 45 dakika pişirin.'
        },
        {
            id: 2,
            title: 'Mevsim Salatası',
            ingredients: ['Marul', 'Domates', 'Salatalık', 'Havuç', 'Zeytinyağı', 'Limon', 'Tuz'],
            cookingTime: '15 dakika',
            image: 'https://yemektarifleri24.com/wp-content/uploads/2019/12/mevsim.jpg',
            instructions: '1. Marulu, domatesi, salatalığı ve havucu doğrayın. 2. Zeytinyağı, limon ve tuz ile sos hazırlayın. 3. Sebzeleri karıştırın ve üzerine sosu dökün.'
        },
        {
            id: 3,
            title: 'Ispanaklı Omlet',
            ingredients: ['Yumurta', 'Ispanak', 'Peynir', 'Tuz', 'Karabiber'],
            cookingTime: '20 dakika',
            image: 'https://cdn.yemek.com/mnresize/940/940/uploads/2016/11/ispanakli-omlet.jpg',
            instructions: '1. Yumurtaları çırpın. 2. Ispanağı doğrayın ve yumurtalara ekleyin. 3. Peyniri rendeleyin ve tuz, karabiber ekleyerek karıştırın. 4. Karışımı tavada pişirin.'
        },
        {
            id: 4,
            title: 'Mercimek Çorbası',
            ingredients: ['Kırmızı Mercimek', 'Soğan', 'Havuç', 'Patates', 'Zeytinyağı', 'Tuz', 'Karabiber', 'Kimyon'],
            cookingTime: '40 dakika',
            image: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2015/02/mercimek-corbasi-yemekcom.jpg',
            instructions: '1. Soğanı doğrayın ve zeytinyağında kavurun. 2. Havuç ve patatesi doğrayın, mercimekle birlikte ekleyin. 3. Üzerine su ekleyin ve kaynamaya bırakın. 4. Baharatları ekleyin ve püre haline gelinceye kadar pişirin.'
        },
        {
            id: 5,
            title: 'Fırında Sebzeli Balık',
            ingredients: ['Balık', 'Kabak', 'Patates', 'Soğan', 'Zeytinyağı', 'Limon', 'Tuz', 'Karabiber'],
            cookingTime: '35 dakika',
            image: 'https://cdn.kisikates.com.tr/image-cache/cache/recipe_main_image_large/https---cdn.kisikates.com.tr/recipe-media/8f2d42c422b1cf276b75beadd04010215991691a.jpeg',
            instructions: '1. Balığı temizleyin ve tuzlayın. 2. Sebzeleri doğrayın. 3. Fırın tepsisine balığı ve sebzeleri yerleştirin. 4. Üzerine zeytinyağı, limon, tuz ve karabiber gezdirin. 5. Önceden ısıtılmış 180°C fırında 35 dakika pişirin.'
        },
        {
            id: 6,
            title: 'Mantar Sote',
            ingredients: ['Mantar', 'Sarımsak', 'Tereyağı', 'Maydanoz', 'Tuz', 'Karabiber'],
            cookingTime: '20 dakika',
            image: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2021/04/mantar-sote-sunum-yemekcom.jpg',
            instructions: '1. Mantarları dilimleyin. 2. Sarımsağı ezin. 3. Tereyağında mantarları ve sarımsağı soteleyin. 4. Tuz ve karabiber ekleyin. 5. Servis yapmadan önce maydanoz ile süsleyin.'
        },
        {
            id: 7,
            title: 'Tavuklu Noodle',
            ingredients: ['Tavuk Göğsü', 'Noodle', 'Soğan', 'Havuç', 'Biber', 'Soya Sosu', 'Zeytinyağı'],
            cookingTime: '25 dakika',
            image: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2022/01/vestel-tavuk-noodle-yemekcom.jpg',
            instructions: `1. Tavuk göğsünü doğrayın ve tavada pişirin. 2. Soğanı doğrayın, biber ve havuçla birlikte soteleyin. 3. Noodle'ları haşlayın. 4. Tüm malzemeleri bir araya getirin, soya sosu ve zeytinyağı ekleyerek karıştırın.`,
        },
        {
            id: 8,
            title: 'Közlenmiş Patlıcan Salatası',
            ingredients: ['Patlıcan', 'Domates', 'Biber', 'Sarımsak', 'Zeytinyağı', 'Limon', 'Tuz'],
            cookingTime: '30 dakika',
            image: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2020/10/patlican-salatasi-yatay-3-yilbasi.jpg',
            instructions: '1. Patlıcanı közleyin ve kabuklarını soyun. 2. Domatesi, biberi doğrayın. 3. Sarımsağı ezin. 4. Tüm malzemeleri karıştırın, zeytinyağı, limon ve tuz ile tatlandırın.'
        },
        {
            id: 9,
            title: 'Köfte Izgara',
            ingredients: ['Kıyma', 'Soğan', 'Maydanoz', 'Ekmek İçi', 'Tuz', 'Karabiber', 'Kırmızı Biber'],
            cookingTime: '30 dakika',
            image: 'https://www.unileverfoodsolutions.com.tr/dam/global-ufs/mcos/TURKEY/calcmenu/recipes/TR-recipes/general/k%C3%B6fte-izgara/main-header.jpg',
            instructions: '1. Kıymayı yoğurun. 2. Soğanı rendeleyin, maydanozu ince doğrayın. 3. Ekmek içini ıslatıp kıymaya ekleyin. 4. Tuz, karabiber, kırmızı biberi ekleyin ve yoğurun. 5. Köfteleri şekil verin ve ızgarada pişirin.'
        }
    ];
    

    return (
       <div>
            <Navbar/>
            <div className="container mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold mb-4 text-green text-center">Besin Tarifleri</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map(recipe => (
                        <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                            <div className="px-6 py-4">
                               <Link to={"/"}> <h2 className="text-xl font-semibold mb-2 text-gray-900  hover:underline hover:text-green">{recipe.title}</h2></Link>
                                <div className="mb-4">
                                    <p className="text-gray-700 font-semibold">Malzemeler</p>
                                    <ul className="list-disc list-inside">
                                        {recipe.ingredients.map((ingredient, index) => (
                                            <li key={index} className="ml-2">{ingredient}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-gray-700 font-semibold">Pişirme Süresi: <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">{recipe.cookingTime}</span></p>
                                    
                                </div>
                                <p className="text-gray-700 mb-4">{recipe.instructions}</p>
                                <a href="#" className="text-green hover:underline">Daha fazla oku</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default Recipe;
