import React from 'react'
import About from './About'
import Portfolio from './Portfolio'


const Main = () => {
  return (

    <div className="bg">
    <div id='main' className='main-section-1'>
      <svg className='svg-main' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#7cffcb" fill-opacity="0.8" d="M0,256L20,261.3C40,267,80,277,120,245.3C160,213,200,139,240,122.7C280,107,320,149,360,176C400,203,440,213,480,218.7C520,224,560,224,600,234.7C640,245,680,267,720,272C760,277,800,267,840,234.7C880,203,920,149,960,154.7C1000,160,1040,224,1080,213.3C1120,203,1160,117,1200,80C1240,43,1280,53,1320,90.7C1360,128,1400,192,1420,224L1440,256L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path>
</svg>

    <div className='main-text-content'>
       <h1 className='main-text'>Разработка сайтов, лендингов и магазинов под ключ</h1>
    </div>
   
    </div>


    <div id="about" className="about">
     <About />

    </div>
    <div id="portfolio" className='portfolio'>
      {/* <Portfolio /> */}
    </div>
    </div>
  )
}

export default Main