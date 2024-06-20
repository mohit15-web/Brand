const items = [
    "Brands",
    "Agency",
    "Creator",
    "Free Tools",
    "About",
    "Log in",
    "Request demo"
  ];
  
function Navbar() {
  return (
    <nav className='flex justify-between items-center px-16 pt-6'>
        <div>
            {/* <img src={logo} alt="" /> */}
            <h1 className='text-3xl tracking-wider font-extrabold pl-4'>Brand</h1>
        </div>
        <div>
            <ul className='text-white flex justify-center items-center gap-8 font-bold text-lg cursor-pointer'>
                {items.map((item) => (
                    <li key={item}>{item === 'Request demo' ? <button className='bg-black text-white  font-bold py-4 rounded-lg px-12'>{item} </button> : item }</li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar