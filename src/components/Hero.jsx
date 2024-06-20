import Button from "./Button"

function Hero() {
  return (
    <div className=' text-white mt-10'>
        <h1 className='text-[79px] pl-20 font-bold leading-normal -tracking-wider'>UNLIMITED INFLUENCER MARKETING</h1>
        <p className='text-[18px] tracking-wider font-bold pl-20 w-[640px] leading-normal'>
        The influencer marketing platform that connects your agency or brand with local creators worldwide. Collabs enables seamless collaboration and deliver of exceptional, cost-effective influencer campaigns, wherever you are.</p>
        <div className="flex gap-4 pl-20 mt-20">
            <Button   text='I am an agency' />
            <Button text='I am a brand' />
            <button className="bordr border-white border-4 text-white  font-bold py-6 rounded-lg px-14">I am a creator</button>
        </div>
        <p className="text-lg tracking-wider  font-bold pl-20 w-[640px] leading-normal mt-6">Have an accout? <a href="#" className="underline">Login here</a></p>
    </div>
  )
}

export default Hero