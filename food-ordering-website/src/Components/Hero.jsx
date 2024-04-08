import background from '../../src/assets/background.jpg'

const Hero = () => {
  return (
    <div  className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-yellow-400'>BEST</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Food <span className='text-yellow-400'>Delivered</span></h1>
            </div>
            <img src={background} alt=""  className='w-full max-h-[500px]'/>

        </div>
      
    </div>
  )
}

export default Hero
