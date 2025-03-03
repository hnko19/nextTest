import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Navbar from './_Components/Navbar/Navbar';
import Landing from './_Components/Landing/Landing';
import AboutCompany from './_Components/AboutCompany/AboutCompany';
import News from './_Components/News/News';
import Projects from './_Components/Projects/Projects';
import AirPortsSlider from './_Components/Airports/AirPortsSlider';
import Contact from './_Components/Contact/Contact';
import SimpleSlider from './_Components/SliderSimple';
 
export default function HomePage({ params }: any ) {
  const t = useTranslations('HomePage');
  return <>
  <SimpleSlider ></SimpleSlider>
    <Landing />
    <AboutCompany />
    <News locale={params.locale}/>
    
    <Projects locale={params.locale}/>
    <AirPortsSlider locale={params.locale}/>
     <Contact /> 
  </>;
}