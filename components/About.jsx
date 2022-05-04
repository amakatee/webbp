import React from 'react'

const About = () => {
  return (
    <div className='about-items-section '>
      <div className='about-item'>
        <div className='about-item-img'>
           <img width='100px' src='./../next.png'></img>
        </div>
        <div className='about-item-desc'>
          <h2 className='about-title'>Приемущества сайтов на Next js</h2>
           <ul className='about-list'>
             <li>Сокращение расходов на техническое обслуживание</li>
             <li>Приемущество SEO Оптимизации</li>
             <li>Лучшая производительность</li>
             <li> Сравнительно короткие Сроки исполнения </li>
           </ul>
        </div>
      </div>
      <div className='about-item'>
        <div className='about-item-img'>
           <img width='200px' src='./../sanity.png'></img>
        </div>
        <div className='about-item-desc'>
          <h2 className='about-title'>Использование Headless CMS - Sanity</h2>
           <ul className='about-list'>
             <li>Простая масштабируемость</li>
             <li>Удобство работы в системе</li>
             <li>Повышенная безопасность</li>
             <li>Снижение затрат на разработку</li>
           </ul>
        </div>
      </div>
      <div className='about-item'>
        <div className='about-item-img'>
           <img width='200px' src='./../netlify.png'></img>
        </div>
        <div className='about-item-desc'>
          <h2 className='about-title'>Прозрачность исполнения</h2>
           <ul className='about-list'>
             <li>Наблюдение за развитием проекта</li>
             <li>Внесение правок </li>
             
           </ul>
        </div>
      </div>
    </div>
  )
}

export default About