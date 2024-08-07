import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/layouts/header/header';
import Footer from './components/layouts/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Luxure House - modern buildings',
  description: '🏡 Construimos Casas Prefabricadas en Buenos Aires, Córdoba y todo el país. ✅Ofrecemos facilidades de pago ✅ Ingresá ahora y conocé nuestros modelos.',
  keywords: 'Casas Prefabricadas, Euro Casa, casas prefabricadas, construccion en seco, viviendas precios, casas prefabricadas precios, viviendas americanas, casas industralizadas, cabañas, viviendas premoldeadas, casas prefabricadas buenos aires, casas prefabricadas cordoba',
  author: 'Lucio Palacio',
  copyright: 'Lucio Palacio',
  robots: 'index',
  image: '/images/isologo.png'

};
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
