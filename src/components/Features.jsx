import { features } from '../constants/features'
import Button from './Button'

const Features = ({ default: featureVisible }) => {
  console.log(featureVisible)
  return (
    <>
      {features.map((feature) => (
        <div
          key={feature.category}
          className={`w-full flex flex-col justify-center md:items-center md:flex-row gap-20 ${
            featureVisible === feature.category ? '' : 'hidden'
          }`}
        >
          <div className="bg-2 md:w-1/2 relative flex justify-center items-center">
            <img src={feature.image} alt="" className="w-full" />
          </div>
          <div className="text-center md:text-start md:w-1/2">
            <h3 className="text-veryDarkBlue text-2xl sm:text-3xl md:text-4xl font-[500]">
              {feature.title}
            </h3>
            <p className="text-grayishBlue my-5">{feature.description}</p>
            <Button className="bg-softBlue text-white px-5 hidden md:block">
              More Info
            </Button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Features
