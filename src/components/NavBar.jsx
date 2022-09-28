import logo from '../assets/images/logo.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="p-2 border-b shadow-sm flex justify-between items-center bg-orange-100">
        <div className='container mx-auto ml-8 flex items-center gap-4'>
            <Link to='/'><img className='rounded-full' width={100} src={logo} alt="Logo de Pichonos"/></Link>
            <h2 className='text-orange-900'><strong>PICHONO'S</strong></h2>
        </div>
        <nav className='flex'>
            <ul className='flex gap-4' >
                <Link to="/"><li><strong>Home</strong></li></Link> 
                <Link to="/category/clothing"><li><strong>Clothing</strong></li></Link>
                <Link to="category/accesories"><li><strong>Accesories</strong></li></Link>
            </ul>
            <CartWidget />
        </nav>
        
    </div>
  )
}

export default NavBar