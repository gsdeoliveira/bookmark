import google from '../assets/images/logo-chrome.svg'
import firefox from '../assets/images/logo-firefox.svg'
import opera from '../assets/images/logo-opera.svg'

import Card from './Card'

const CardSection = () => {
  return (
    <section className="flex flex-col items-center py-5 px-5 md:py-10 sm:px-10 lg:px-28 mt-20 text-sm md:text-lg">
      <h2 className="text-veryDarkBlue text-2xl sm:text-3xl md:text-4xl font-[500] text-center md:px-32 mb-3">
        Download the Extension
      </h2>
      <p className="text-grayishBlue text-center md:px-32">
        We&apos;ve got more browsers in the pipeline. Please do let us know if
        you&apos;ve got a favourite you&apos;d like us to prioritize.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10 w-full">
        <Card
          image={google}
          title="Add to Chrome"
          description="Minimum version 62"
        />
        <Card
          image={firefox}
          title="Add to Firefox"
          description="Minimum version 55"
          className="md:mt-20"
        />
        <Card
          image={opera}
          title="Add to Opera"
          description="Minimum version 46"
          className="md:mt-40"
        />
      </div>
    </section>
  )
}

export default CardSection
