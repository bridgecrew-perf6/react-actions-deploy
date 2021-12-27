/* eslint-disable  */
import { useEffect, useRef, useState } from 'react'
// Components
import Allows from '../components/Allows'

import GeneralCard from '../components/GeneralCard'
import Goals from '../components/Goals'
import Hero from '../components/Hero'
// Images
import bgImg1 from '../assets/images/tapeImg.png'
import bgImg2 from '../assets/images/camImg.png'
import whiteRowDown from '../assets/icons/rowDown.svg'
// Styles
import { BtnContainer, Section } from '../styles/FilmcoinPageStyles'
import BuyFC from '../components/BuyFC'
import PaymentStepper1 from '../components/PaymentStepper1'
import TimeLine from '../components/TimeLine'
import MiniCard from '../components/MiniCard'
import { ReactComponent as GreenRow } from '../assets/icons/GreenRowRigth.svg'
import TimeLineMobile from '../components/TimeLineMobile'

export default (props) => {
  const [current, setCurrent] = useState(0)
  const [showRow, setShowRow] = useState(true)
  const [ListComponents, setListComponents] =useState(
    [
      <Hero />,
      <Goals />,
      <GeneralCard
        bgImg={bgImg1}
        question='Do you want to join in the exciting  and commercial world of motion  picture and television ...?'
        text='Well, no need to wait any longer, FILMCOIN is poised to launch  in February 2022 ...'
      />,
      <TimeLine >
        <MiniCard 
          text='Angel Investment Round' 
          date='DEC 2021' />
        <GreenRow className='GreenRow' />
        <MiniCard 
          text='Initiate the Flag-Ship Movie Development'
          date='JAN 2022' />
        <GreenRow className='GreenRow' />
        <MiniCard 
        text='Token & Smart Contract
        Development' 
        date='JAN 2022' />
        <GreenRow className='GreenRow' />
        <MiniCard 
        text='Token Generation' 
        date='FEB 2022' />
        <GreenRow className='GreenRow' />
        <MiniCard 
        text='Wallet Module & API Development' 
        date='FEB 2022' />
      </TimeLine>,
  
       <TimeLine >
        <div style={{position:'relative'}}>
        <GreenRow style={{transform:'rotate(90deg)', position:'absolute',top:'-50px', left:`${(146-39)/2}px`}}/>
        <MiniCard 
         text='Payment and Token Allocation Development' 
         date='FEB 2022' />
        </div>
       
       <GreenRow className='GreenRow' />
       <MiniCard 
         text='Project Beta Launching'
         date=' FEB 2022' />
       <GreenRow className='GreenRow' />
       <MiniCard 
       text='Token Project Official Launching FEB 2022' 
       date='FEB 2022' />
       <GreenRow className='GreenRow' />
       <MiniCard 
       text='Mobile App Development ' 
       date='MARCH 2022' />
       <GreenRow className='GreenRow' />
       <MiniCard 
       text='Gamiﬁcation NFTs ' 
       date='APR 2022' />
     </TimeLine>,
  
      
     <Allows />,
      <BuyFC />,
      <PaymentStepper1 />
    ]
  )
  
  function verifyIsMobile(){
    
    if(window.innerWidth<760){
      setListComponents([
        <Hero />,
        <Goals />,
        <GeneralCard
        bgImg={bgImg1}
        question='Do you want to join in the exciting  and commercial world of motion  picture and television ...?'
        text='Well, no need to wait any longer, FILMCOIN is poised to launch  in February 2022 ...'
        />,
        <TimeLineMobile/> ,
        <Allows />,
        <BuyFC />,
        <PaymentStepper1 />] )
      
    } 
  }
  useEffect(verifyIsMobile,[current])
  

  

  // const useScroll = () => {
  //   let elRefs =[]
  //   ListComponents.map(()=>{
  //     const elRef = useRef(null)
  //     elRefs.push(elRef)
  //   })

  //    // array with num elements of listcomponents
  //   const executeScroll = (index) => elRefs[index].current.scrollIntoView()

  //   return [executeScroll, elRefs]
  // }

  // const [executeScroll, elRefs] = useScroll()

     const length = ListComponents.length
     const nextSlide = () => {
       setCurrent(current === length - 1 ? 0 : current + 1)
     
      
     }
     const prevSlide = () => {
       setCurrent(current === 0 ? length - 1 : current - 1)
    
   
     }
     useEffect(()=>{
      
       if(current>0){
         props.changeLogo(true)
         //console.log(`seteando a: true`)
       }
       else{
         props.changeLogo(false)
         //console.log('seteando a false')
       }
       if(current===length-1){
        setShowRow(false)
        }else{
          setShowRow(true) 
        }
      
     },[current])
    
  return (

    // <Container>
    //     {
    //        ListComponents.map((component, index)=> <Section key={index} ref={elRefs[index]}>
    //        {component}
    //        {!(index===(ListComponents.length -1))&& <BtnContainer>
    //          <WhiteRowDown onClick={()=>executeScroll( parseInt(index)+1)}/>
    //         </BtnContainer>}
    //        </Section>)
    //     }
       
    // </Container>
    <main style={{background:'black'}}>
      {
      ListComponents.map((component, index) => 
        index === current &&
          <Section key={index}>
            {component}
          </Section>
        )
      }

      <BtnContainer>
        {showRow&& <img src={whiteRowDown} alt='Row Down Icon' onClick={nextSlide} />}
        
      </BtnContainer>
    </main>
  )
  
}
