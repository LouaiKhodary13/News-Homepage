import './App.css';
import { Article } from './components/Article';
import Navbar from './components/Navbar';
import retro from './assets/images/image-retro-pcs.jpg';
import lap from './assets/images/image-top-laptops.jpg';
import games from './assets/images/image-gaming-growth.jpg';
function App() {
  return (
    <>
      <Navbar />
      <Article />
      <section className='article-types'>
        <div className='type-1'>
          <img src={retro} alt={retro} className='types-imgs' />
          <div className='types-wrapper'>
            <h2>01</h2>
            <h4> Reviving Retro PCs</h4>
            <p>
              {' '}
              What happens when old PCs <br /> are given modern upgrades?
            </p>
          </div>
        </div>
        <div className='type-2'>
          <img src={lap} alt={lap} className='types-imgs' />
          <div className='types-wrapper'>
            <h2>02</h2>
            <h4> Top 10 Laptops of 2022</h4>
            <p> Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className='type-3'>
          <img src={games} alt={games} className='types-imgs' />
          <div className='types-wrapper'>
            <h2>03</h2>
            <h4> The Growth of Gaming</h4>
            <p> How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
