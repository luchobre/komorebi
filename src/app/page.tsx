import NavbarCo from './components/Navbar/NavbarCo'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Botanicos from './components/Botanicos/Botanicos'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <main >
      <NavbarCo />
      <Banner />
      <About />
      <Botanicos />
      <Contact />
      <Footer />
    </main>
  );
}
