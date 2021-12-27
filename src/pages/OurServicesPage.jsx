import AwardWinning from '../components/AwardWinning'
import Banner from '../components/Banner'
import CollectSlider from '../components/CollectSlider'
import OurServices from '../components/OurServices'
// import Participate from '../components/Participate'
import Terry from '../components/Terry'
import BlackFooter from '../components/BlackFooter'

export default () => {
  return (
    <>
      <main>
        <Banner />
        <OurServices />
        <CollectSlider />
        <Terry />
        <AwardWinning />
        {/* <Participate /> */}
      </main>
      <BlackFooter />
    </>
  )
}
