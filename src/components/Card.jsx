import PropTypes from 'prop-types'
function Card({title , subtitle , desc}) {
  return (
    <div className='px-10 py-10 flex flex-col justify-center items-center gap-2 mt-10'>
        <h1 className='text-[65px] font-bold -tracking-wider text-black'>{title}</h1>
        <h2 className='text-[25px] font-bold -tracking-wider text-black'>{subtitle}</h2>
        <p className=' text-center tracking-wider w-[360px]'>{desc}</p>
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    desc: PropTypes.string
}

export default Card