import Banner from '../../assets/images/banner.jpg';
import { Overlay } from '../Overlay/index';
import { Button } from '../Button/Button';

export const Hero = () => {
    return (
        <div className='container'>
            <section className=' relative h-125 rounded-[20px]  mb-10'>
                <img src={Banner} alt="homen com tenis syntaxwear"
                    className='w-full h-full object-cover rounded-[20px]' />


                <Overlay title="Krypton one" subtitle="transforme os seus passos em presença"
                    className='bottom-0 px-6 mb:px-24 pb-24 justify-end mb:items-end'>

                    <Button variante='secondary' size='md'>
                        Ver modelos
                    </Button>
                    <Button variante='primary' size='md'>
                        Comprar agora
                    </Button>
                    
                </Overlay>
            </section>
        </div>
    )
};