import arrow from '../assets/images/icon-arrow.svg'
import arrowActive from '../assets/images/icon-arrow-active.svg'

const Faq = ({ question, answer, id, openQuestion, setOpenQuestion }) => {
  const toggleQuestion = (question) => {
    if (question === openQuestion) {
      setOpenQuestion('')
    } else {
      setOpenQuestion(question)
    }
  }

  return (
    <div id={id}>
      <div
        className="flex justify-between items-center cursor-pointer gap-5 py-3 border-y first:border-t-0"
        onClick={() => toggleQuestion(`question${id}`)}
      >
        <h3 className="text-veryDarkBlue font-[500] hover:text-softRed">
          {question}
        </h3>
        {openQuestion === `question${id}` ? (
          <img src={arrowActive} alt="" className="rotate-180 transition-all" />
        ) : (
          <img src={arrow} alt="" />
        )}
      </div>
      <p
        className={
          openQuestion === `question${id}`
            ? 'block my-5 text-grayishBlue'
            : 'hidden'
        }
      >
        {answer}
      </p>
    </div>
  )
}

export default Faq
