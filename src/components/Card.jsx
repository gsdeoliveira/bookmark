import { twMerge } from 'tailwind-merge'
import dots from '../assets/images/bg-dots.svg'
import Button from './Button'

const Card = ({ image, title, description, className }) => {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center shadow-2xl w-full max-w-sm',
        className,
      )}
    >
      <img src={image} alt="" className="mt-5 p-5" />
      <h3 className="text-veryDarkBlue font-[500] mt-5 mx-5 text-center text-xl">
        {title}
      </h3>
      <p className="text-grayishBlue mb-5 mx-5 text-center">{description}</p>
      <img src={dots} alt="" className="mt-3 mb-5 w-full" />
      <Button className="bg-softBlue border-2 mx-5 mb-5 hover:bg-white hover:text-softBlue hover:border-softBlue transition-all text-[0.7rem] min-[380px]:text-sm md:px-5 xl:px-10">
        Add & Install Extension
      </Button>
    </div>
  )
}

export default Card
