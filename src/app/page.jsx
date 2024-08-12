import Banner from './components/home/banner';
import Empresa from './components/home/empresa';
import Models from './components/home/models';
import Sistema from './components/home/sistema';
import Footer from './components/layouts/footer/footer';
import Header from './components/layouts/header/header';

export default function Home() {
  return (
    <>
      <Header isHome />
      <Banner />
      <Models />
      <Empresa />
      <Sistema />
      <Footer />
    </>
  );
}
