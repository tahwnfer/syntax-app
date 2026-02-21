import Homem from '../../assets/images/galeria-homem.jpg';
import TenisRoxo from '../../assets/images/galeria-tenis-roxo.jpg';
import Modelo from '../../assets/images/galeria-modelo.jpg';
import TenisColorido from '../../assets/images/galeria-tenis-colorido.jpg';
import TenisBrancoPreto from '../../assets/images/galeria-tenis-branco-e-preto.jpg';
import TenisCinza from '../../assets/images/galeria-tenis-cinza.jpg';
import styles from './gallery.module.css';
import { Overlay } from '../Overlay/index';
import { Button } from '../Button/Button';

export const Gallery = () => {
    return (
        <div className="container">

            <div className={styles.galleryGrid}>
                <div
                    className={`${styles.highlight} relative rounded-[20px] overflow-hidden`}
                >
                    <img
                        className="w-full h-full object-cover"
                        src={Homem}
                        alt="Krypton One - Estilo urbano com atitude"
                    />

                    <Overlay
                        title="Kripton One"
                        subtitle="Estilo urbano com atitude"
                        className="inset-0 justify-center"
                    >
                        <Button variante="secondary" size="md">Feminino</Button>
                        <Button variante="secondary" size="md">Masculino</Button>
                    </Overlay>
                </div>
                <div
                    className={`${styles.sneakerPurple} relative rounded-[20px] overflow-hidden`}
                >
                    <img
                        className="w-full h-full object-cover"
                        src={TenisRoxo}
                        alt="Tênis Roxo"
                    />
                </div>

                <div
                    className={`${styles.model} relative rounded-[20px] overflow-hidden`}
                >
                    <img
                        className="w-full h-full object-cover"
                        src={Modelo}
                        alt="Modelo Feminina"
                    />
                </div>

                <div
                    className={`${styles.sneakerColor} relative rounded-[20px] overflow-hidden`}
                >
                    <img
                        className="w-full h-full object-cover"
                        src={TenisColorido}
                        alt="Tênis Colorido"
                    />
                </div>

                <div
                    className={`${styles.sneakerWhite} relative rounded-[20px] overflow-hidden`}
                >
                    <img
                        className="w-full h-full object-cover"
                        src={TenisBrancoPreto}
                        alt="Tênis Branco e Preto"
                    />
                </div>

                <div
                    className={`${styles.sneakerSilver} relative rounded-[20px] overflow-hidden`}
                >
                    <img
                        className="w-full h-full object-cover"
                        src={TenisCinza}
                        alt="Tênis Cinza"
                    />
                </div>
            </div>
        </div>
    );
};

