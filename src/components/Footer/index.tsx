import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 p-4">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
                <div className="text-center lg:text-left mb-4 lg:mb-0 lg:mr-6">
                    <span className='text-green font-semibold text-2xl'>
                        <Link to={"/"}>Calorator</Link>
                    </span>
                    <p className="text-gray-200 text-sm max-w-96 pb-4">
                        Calorator, kullanıcılarına anlık besin değerlerini yansıtarak kişilerin sağlıklı bir beslenme planı oluşturmasına yardımcı bir araçtır. Ancak unutulmamalıdır ki, Calorator tarafından sunulan bilgiler kesin sonuçlar olmamakla birlikte yaklaşık değerler içerebilir. Calorator sağlanan verilerden sorumlu değildir ve kullanıcılar siteye girdiklerinde <a href="/" className='text-green'>kullanıcı aydınlatma metnini</a> kabul etmiş sayılırlar. Sağlıklı beslenme ve yaşam tarzı değişiklikleri konusunda daha fazla destek almak için lütfen doktorunuza danışın.
                    </p>
                </div>

                <div className="text-gray-300 flex flex-col lg:flex-row pb-4">
                    <div className='mb-4 lg:mb-0 lg:mr-6'>
                        <h4 className="text-white text-lg font-semibold mb-2">Site Haritası</h4>
                        <ul className="mt-2">
                            <li className='hover:text-green hover:underline'><Link to={"/"}>Hakkımızda</Link></li>
                            <li className='hover:text-green hover:underline'><Link to={"/"}>S.S.S</Link></li>
                            <li className='hover:text-green hover:underline'><Link to={"/"}>Gizlilik Sözleşmesi</Link></li>
                            <li className='hover:text-green hover:underline'><Link to={"/"}>Tarifler</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-2">Hesaplamalar</h4>
                        <ul className="mt-2">
                            <li className='hover:text-green hover:underline'><Link to={"/"}>Besin Değeri Hesaplama</Link></li>
                            <li className='hover:text-green hover:underline'><Link to={"/"}>Günlük Kalori İhtiyacı Hesaplama</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900  text-center text-gray-300 text-sm">
                <hr className='border-green pt-4'/>
                &copy; {new Date().getFullYear()} <span className='text-green font-semibold'>Calorator</span> Tüm hakları saklıdır. 
            </div>
        </footer>
    );
};

export default Footer;
