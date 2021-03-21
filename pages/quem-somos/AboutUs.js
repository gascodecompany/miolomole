import AboutUsImagination from "../../components/AboutUsImagination/AboutUsImagination";
import AboutUsJumbotron from "../../components/AboutUsJumbotron";
import AboutUsOurHistory from "../../components/AboutUsOurHistory";
import AboutUsQuote from "../../components/AboutUsQuote";
import AboutUsSectionOne from "../../components/AboutUsSectionOne";
import AboutUsSlider from "../../components/AboutUsSlider";

export default function AboutUs({ texts }){

 return(
    <div>
      <AboutUsJumbotron/>
      <AboutUsOurHistory texts={texts} />
      <AboutUsQuote texts={texts} />
      <AboutUsSectionOne texts={texts} />
      <AboutUsImagination texts={texts} />
      <AboutUsSlider/>
    </div>
  )
}