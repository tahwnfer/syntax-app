
import Logo from '../../assets/images/logo.png';
import IconUser from '../../assets/images/iconUser.png';
import IconAbout from '../../assets/images/iconAbout.png';
import IconCart from '../../assets/images/iconCart.png';

export const Header = () => {
    return (
        <div className="relative">
            <header className="fixed top-0 left-0  right-0 z-10 mx-10  bg-amber-400 ">
                <div className="bg-white
                max-w-[1320px] mx-auto flex justify-between items-center py-5 px-7 rounded-r-2xl mt-5">

                    <img src={Logo} alt="logos Syntax" className='w-32 md:w-36' />

                    <nav className='hidden md:block'>
                        <ul className='flex gap-10'>
                            <li><a href="#">Maculino</a></li>
                            <li><a href="#">Feiminino</a></li>
                            <li><a href="#">Outlet</a></li>
                        </ul>
                    </nav>

                    <nav >
                        <ul className='flex gap-10'>
                            <li className='hidden md:block' ><a href="#"> Nossas lojas </a></li>

                            <li className='hidden md:block' ><a href="">Sobre</a></li>

                            <li><a href="#"><img src={IconAbout} alt='Ícone de sobre' /></a></li>

                            <li><a href="#"><img src={IconUser} alt='Ícone de usuário' /></a></li>

                            <li><a href="#"><img src={IconCart} alt='Ícone de carrinho' /></a></li>

                        </ul>
                    </nav>

                </div>
            </header>
        </div>
    );
}