
import Navbar from '../components/navbar'
import Main from './main'
import Feature from './feature'
import Plan from './plan'
import Category from './category'
import About from './about'

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Feature />
      <Category />
      <Plan />
    </>
  );
};

export default Home;
