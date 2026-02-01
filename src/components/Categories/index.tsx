import tenisBranco from '../../assets/images/tenis-branco.jpg'
import tenisFuturista from '../../assets/images/tenis-futurista.jpg'
import tenisCinza from '../../assets/images/tenis-cinza.jpg'
import tenisColorido from '../../assets/images/tenis-colorido.jpg'
import  {Button}  from '../Button/Button';

const categories = [
    { name: 'casual', image: tenisBranco },
    { name: 'esporte', image: tenisCinza },
    { name: 'moderno', image: tenisColorido },
    { name: 'futurista', image: tenisFuturista },
]

export const Categories = () => {
    return (
        <section className='container flex gap-2.5 lg:grid lg:grid-cols-4 lg:gap-4 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory '>
            {categories.map((category, index) => (
                <div key={index} style={{ backgroundImage: `url(${category.image})` }} className="h-125 bg-cover bg-center rounded-[20px] relative flex items-center justify-center text-white text-2xl shrink-0 w-[95%] md:w-1/2 lg:w-full">
                    <div className='absolute inset-0 bg-black/30 rounded-[20px] snap-center'></div>
                    <div className='relative'>
                    <Button variante='secondary' size='md'>{category.name}</Button>
                    </div>
                </div>
            ))}
        </section>
    )
}