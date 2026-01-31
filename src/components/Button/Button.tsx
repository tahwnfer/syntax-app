interface ButtonProps{
    children: React.ReactNode;
    variante?: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
}
export const Button = ({children, variante = 'primary', size = 'md'} : ButtonProps) => {
    
    const buttonStyles = {
        base: 'flex justify-center items-center gap-2 text-nowrap leading-none hover:cursor-poiter transition-colors duration-300 font-medium rounded-full py-2.5 transition',
        variante:{
            primary:'bg-white text-[#6329a2] hover:bg-gray-200',
            secondary:'bg-transpartent border border-white text-white hover:bg-white  hover:text-black',
        },
        size:{
            sm:'px-4 ',
            md:'px-8',
            lg:'px-10',
        }
    };

    const className = `${buttonStyles.base} ${buttonStyles.variante[variante]} ${buttonStyles.size[size]}`;

    return (
        <button className={className}>
            {children}
        </button>
    )
}