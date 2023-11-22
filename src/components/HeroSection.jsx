import illustration from '../assets/images/illustration-hero.svg'
import Button from './Button'

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse justify-center items-center text-sm md:text-lg gap-10 mt-10 py-5 pl-5 md:py-10 sm:pl-10 lg:pl-28">
      <div className="bg relative self-center w-full md:w-1/2">
        <img src={illustration} alt="" className="w-full" />
      </div>
      <div className="flex flex-col gap-5 md:w-1/2 text-center md:text-start text-grayishBlue pr-5 sm:pr-10 md:pr-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-[500] text-center md:text-start text-veryDarkBlue">
          A Simple Bookmark Manager
        </h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex justify-center md:justify-start gap-3 sm:gap-5">
          <Button className="border-2 bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue transition-all whitespace-nowrap font-[500] px-3 py-2 text-[0.7rem] min-[380px]:text-sm min-[380px]:py-3">
            Get It on Chrome
          </Button>
          <Button className="border-2 border-gray-100 bg-gray-100 hover:bg-white hover:border-slate-500 transition-all whitespace-nowrap text-slate-500 font-[500] shadow-lg px-3 py-2 text-[0.7rem] min-[380px]:text-sm min-[380px]:py-3">
            Get It on Firefox
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
