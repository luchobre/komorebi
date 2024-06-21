import NavbarCo from './components/Navbar/NavbarCo'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Botanicos from './components/Botanicos/Botanicos'
import Whatsapp from './components/Whatsapp/Whatsapp'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <main >
      <NavbarCo />
      <Banner />
      <About />
      <Botanicos />
      <Whatsapp />
      <Footer />
    </main>
  );
}
