import { useState } from 'react'
import { questions } from '../constants/questions'
import FAQ from './FAQ'
import Button from './Button'

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState('')
  return (
    <section className="py-5 px-5 mt-20 md:py-10 sm:px-10 lg:px-28">
      <div className="md:px-32">
        <h2 className="text-veryDarkBlue text-2xl sm:text-3xl md:text-4xl font-[500] text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-grayishBlue text-center my-5">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div>
        {questions.map((question, index) => (
          <FAQ
            key={index}
            question={question.question}
            answer={question.answer}
            id={`question${index + 1}`}
            openQuestion={openQuestion}
            setOpenQuestion={setOpenQuestion}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button className="bg-softBlue text-white px-5 mx-auto">
          More Info
        </Button>
      </div>
    </section>
  )
}

export default FAQSection
