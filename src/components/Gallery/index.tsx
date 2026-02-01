

import Homem from '../../assets/images/galeria-homem.jpg';
import TenisRoxo from '../../assets/images/galeria-tenis-roxo.jpg';
import Modelo from '../../assets/images/galeria-modelo.jpg';
import TenisColorido from '../../assets/images/galeria-tenis-colorido.jpg';
import TenisBrancoPreto from '../../assets/images/galeria-tenis-branco-e-preto.jpg';
import TenisCinza from '../../assets/images/galeria-tenis-cinza.jpg';
import './gallery.css';

export const Gallery = () => {
    return (
        <div className="container">
            <section className="gallery-grid">
                <div className="area-highlight">
                    <img src={Homem} alt="modelo masculino" className="w-full h-full object-cover rounded-[20px]" />
                </div>

                <div className="area-sneaker-purple">
                    <img src={TenisRoxo} alt="tênis roxo" className="w-full h-full object-cover rounded-[20px]" />
                </div>

                <div className="area-model">
                    <img src={Modelo} alt="modelo feminino" className="w-full h-full object-cover rounded-[20px]" />
                </div>

                <div className="area-sneaker-color">
                    <img src={TenisColorido} alt="tênis colorido" className="w-full h-full object-cover rounded-[20px]" />
                </div>

                <div className="area-sneaker-white">
                    <img src={TenisBrancoPreto} alt="tênis branco e preto" className="w-full h-full object-cover rounded-[20px]" />
                </div>

                <div className="area-sneaker-silver">
                    <img src={TenisCinza} alt="tênis cinza" className="w-full h-full object-cover rounded-[20px]" />
                </div>
            </section>
        </div>
    )
}
