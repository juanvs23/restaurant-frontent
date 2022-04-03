import Layout from '../components/layout'
import AboutUs from '../components/section/home/about/aboutUs'
import AwardComponent from '../components/section/home/award/awardComponent'
import FindUs from '../components/section/home/findus/FindUs'
import HomeGallery from '../components/section/home/gallery/gallery'
import HeroHome from '../components/section/home/hero/hero'
import MenuHome from '../components/section/home/menu/menuHome'
import OurChef from '../components/section/home/ourchef/ourChef'



export default function Home():JSX.Element {
  
  return (
  <Layout title='home'>
    <HeroHome />
    <AboutUs />
    <MenuHome />
    <OurChef/>
    <HomeGallery />
    <AwardComponent />
    <FindUs />
  </Layout>
  )
}