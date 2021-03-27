import AboutUsImagination from "../../components/AboutUsImagination/AboutUsImagination";
import AboutUsJumbotron from "../../components/AboutUsJumbotron";
import AboutUsOurHistory from "../../components/AboutUsOurHistory";
import AboutUsQuote from "../../components/AboutUsQuote";
import AboutUsSectionOne from "../../components/AboutUsSectionOne";
import AboutUsSlider from "../../components/AboutUsSlider";

export default function AboutUs({ texts, ...props }){
  return(
    <div>
      <AboutUsJumbotron/>
      <AboutUsOurHistory texts={texts} {...props} />
      <AboutUsQuote texts={texts} {...props} />
      <AboutUsSectionOne texts={texts} {...props} />
      <AboutUsImagination texts={texts} {...props} />
      <AboutUsSlider/>
    </div>
  )
}