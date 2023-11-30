import { useForm } from 'react-hook-form'
import Button from './Button'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Error from '../assets/images/icon-error.svg'

const createUserFormSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email("Whoops, make sure it's an email"),
})

const FormSection = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  })

  const createUser = () => {
    // console.log(data, formState.errors)
  }

  return (
    <section className="mt-20 bg-softBlue text-white text-center text-sm md:text-lg py-5 px-5 md:py-10 sm:px-10 lg:px-28">
      <p className="uppercase tracking-[0.2em]">35,000+ already joined</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-[500] text-center mt-3 mb-10">
        Stay up-to-date with that we&apos;re doing
      </h2>
      <form
        onSubmit={handleSubmit(createUser)}
        className="flex flex-col md:flex-row gap-3"
      >
        <div
          className={`w-full ${
            formState.errors.email && 'bg-softRed'
          } rounded-md`}
        >
          <div className="relative">
            <input
              type="text"
              {...register('email')}
              className={`px-3 py-3 border-2 h-12 ${
                formState.errors.email && 'border-softRed'
              } rounded-md w-full outline-none text-black placeholder:text-grayishBlue`}
              placeholder="Enter your email address"
            />
            {formState.errors.email && (
              <img src={Error} alt="" className="absolute right-3 top-[16px]" />
            )}
          </div>
          {formState.errors.email && (
            <span className=" block text-start text-[12px] px-5 md:px-3 py-1 md:py-0">
              {formState.errors.email.message}
            </span>
          )}
        </div>
        <Button
          type="submit"
          className="bg-softRed font-[500] border-2 border-softRed hover:border-softRed hover:text-softRed hover:bg-white md:h-12 md:whitespace-nowrap transition-all"
        >
          Contact Us
        </Button>
      </form>
    </section>
  )
}

export default FormSection
