import logo from '../assets/images/logo.png';

const NavBar = () => {
  return (
    <div className="p-2 border-b shadow-sm flex justify-between items-center bg-orange-100">
        <div className='container mx-auto ml-8 flex items-center gap-4'>
            <img className='rounded-full' width={100} src={logo} alt="Logo de Pichonos"/>
            <h2 className=''>PICHONO'S</h2>
        </div>
        <nav className='flex'>
            <ul className='flex mr-20 gap-5 cursor-pointer' >
                <li><strong>Home</strong></li>
                <li><strong>Clothing</strong></li>
                <li><strong>Accesories</strong></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar