import AboutUsImagination from "../../components/AboutUsImagination/AboutUsImagination";
import AboutUsJumbotron from "../../components/AboutUsJumbotron";
import AboutUsOurHistory from "../../components/AboutUsOurHistory";
import AboutUsQuote from "../../components/AboutUsQuote";
import AboutUsSectionOne from "../../components/AboutUsSectionOne";
import AboutUsSlider from "../../components/AboutUsSlider";

export default function AboutUs(){

 return(
    <div>
      <AboutUsJumbotron/>
      <AboutUsOurHistory/>
      <AboutUsQuote/>
      <AboutUsSectionOne/>
      <AboutUsImagination/>
      <AboutUsSlider/>
    </div>
  )
}