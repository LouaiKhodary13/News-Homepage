import React from 'react';
import mainImg from '../assets/images/image-web-3-desktop.jpg';
import '../styles/article.css';
export const Article: React.FC = () => {
  return (
    <article>
      <div className='article-heading-wrapper'>
        <img src={mainImg} alt={mainImg} className='main-img' />
        <div className='article-primary-heading'>
          <div className='article-heading'>
            <h2>
              The Bright <br /> Future of <br />
              Web 3.0?
            </h2>
          </div>
          <div className='article-info'>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className='btn'>Read MORE</button>
          </div>
        </div>
      </div>
      <aside className='article-sidebar'>
        <h2 className='article-new'>New</h2>
        <div className='article-sidebar-item'>
          <h4> Hydrogen VS Electric Cars</h4>
          <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className='border'></div>
        <div className='article-sidebar-item'>
          <h4> Hydrogen VS Electric Cars</h4>
          <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className='border'></div>
        <div className='article-sidebar-item'>
          <h4> Hydrogen VS Electric Cars</h4>
          <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
      </aside>
    </article>
  );
};
