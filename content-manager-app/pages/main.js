import Image from 'next/image';
import imac from '../img/imac.png'

function Home() {
  return (
    <section className="section">
      <div className="text-center">
        <div className="relative">
          <Image src={imac} alt="main image" className="w-full" />
        <div className="absolute inset-1/4">        
          <h2 className="xl:text-8xl lg:text-6xl md:text-2xl font-bold text-lg">
          One Page Website
        </h2>
        <p className="mt-s1 text-xs xl:text-xl lg:text-lg md:text-md">
          심플하고 깔끔하게!
        </p>
        </div>
        </div>
      </div>
    </section>
  ) 
}

export default Home;