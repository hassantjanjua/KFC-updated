import Footer from "./components/footer";
import Navbar from "./components/navbar";
import DownloadPage from "./sections/download";
import FoodMarquee from "./sections/foodmarquee";
import Hero from "./sections/hero";
import Review from "./sections/review";


export default function Home() {
  return (
    <main className="overflow-hidden">
     <Hero/>
     <Navbar/>
     <FoodMarquee/>
    <DownloadPage/>
    <Review/>
    <Footer/>
    
    </main>
  )
}