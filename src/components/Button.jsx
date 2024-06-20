import PropTypes from 'prop-types'
function Button({  text}) {
  return (
    <button className="bg-black text-white  font-bold py-6 rounded-lg px-16">
        {text}
    </button>
  )
}

Button.propTypes ={
    text: PropTypes.string
}

export default Button