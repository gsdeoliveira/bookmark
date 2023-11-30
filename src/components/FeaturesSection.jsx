import { useState } from 'react'
import { features } from '../constants/features'
import Features from './Features'

const FeaturesSection = () => {
  const [featureVisible, setfeatureVisible] = useState('Simple Bookmarking')
  return (
    <section className="py-5 px-5 md:py-10 sm:px-10 lg:px-28 text-sm md:text-lg">
      <div className="md:px-32">
        <h2 className="text-veryDarkBlue text-2xl sm:text-3xl md:text-4xl font-[500] text-center mb-3">
          Features
        </h2>
        <p className="text-grayishBlue text-center">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="my-10 md:mx-20 flex flex-col md:justify-center md:items-center md:flex-row md:gap-10 xl:gap-20 md:border-b md:border-gray-200">
        {features.map((feature) => (
          <p
            key={feature.category}
            onClick={() => setfeatureVisible(feature.category)}
            className={`transition-all text-center cursor-pointer hover:text-softRed text-grayishBlue max-md:border-t max-md:last:border-b py-2 border-gray-200 relative ${
              featureVisible === feature.category
                ? 'text-veryDarkBlue after:w-1/2 md:after:w-[120%] after:border-b-4 after:rounded-sm after:border-softRed after:absolute after:left-1/4 md:after:-left-[10%] after:bottom-0'
                : ''
            }`}
          >
            {feature.category}
          </p>
        ))}
      </div>
      <div className="">
        <Features default={featureVisible} />
      </div>
    </section>
  )
}

export default FeaturesSection
