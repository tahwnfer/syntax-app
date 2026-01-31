import Banner from '../../assets/images/banner.jpg';
import { Button } from '../Button/Button';

export const Hero = () => {
    return (
        <div className='container'>
            <section className=' relative h-125 rounded-[20px]  mb-10'>
                <img src={Banner} alt="homen com tenis syntaxwear"
                    className='w-full h-full object-cover rounded-[20px]' />
                <div className='absolute  w-full bottom-0 flex justify-end items-center text-center px-6 md:px-24 pb-38'> 
                    <div className='flex flex-col items-center text-white
                   w-[388px] '>
                        <h2 className='text-xl font-medium leading-normal
                        tracking-wider mb-2.5'>Krypton one</h2>
                        <h1 className='text-2xl leading-9 tracking-widest mb-10 '>trnsforme os seus passos em presença</h1>
                        <div className='flex gap-3.5'>
                           <Button variante="secondary" size="sm">ver modelo</Button>
                           <Button variante="primary" size="md">Compre agora</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};