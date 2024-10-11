import Nav from "../Components/Nav";
import HomePage from "../Components/Home";
import SecondHome from '../Components/SecondHome'
import ThirdHome from '../Components/ThirdHome'
import ForthHome from '../Components/ForthHome'
import FifthBlock from'../Components/FifthBlock'
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <div>
      <Nav />
      <HomePage />
      <SecondHome/>
      <ThirdHome/>
      <ForthHome/>
      <FifthBlock/>
      <Footer/>
    </div>
  );
}
