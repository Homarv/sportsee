import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Barchart from '../components/Barchart';
import Nutrition from '../components/Nutrition';
import Linechart from '../components/Linechart';
import Radarchart from '../components/Radarchart';
import SimpleRadialBarchart from '../components/Simpleradialbarchart';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='container'>
        <Sidebar/>
        <div className='main-container'>
          <div className='welcome-message'>
            Bonjour T
          </div>
          <div className='principal-container'>
            <div className='chart-container'>
              <div className='barchart-container'>
                 <Barchart/>
              </div>
              <div className='child-chart-container'>
                  <Linechart/>
                  <Radarchart/>
                  <SimpleRadialBarchart/>
              </div>
            </div>
            <Nutrition/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;