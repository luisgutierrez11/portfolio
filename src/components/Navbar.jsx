import spriteUrl from '../assets/sprites.svg?url';

const Navbar = () => {
    return (
    <header className="
        fixed top-0 w-full backdrop-blur-md bg-neutral-900/70 z-50 border-b
        border-neutral-800
        ">
        <nav className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-xl font-bold tracking-wide flex justify-between items-center whitespace-nowrap mb-4 md:mb-0">
                <a href="#hero">Luis Gutiérrez</a>
                <svg className="w-6 h-6 fill-cyan-400 ml-2">
                    <use href={`${spriteUrl}#verified`} />
                </svg>  
            </h1>
            <ul className="
                flex gap-6 text-sm flex-nowrap overflow-x-auto whitespace-nowrap
            ">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                    <a href='#tech'>Tech Stack</a>
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                    <a href="#about">Sobre mí</a>
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                    <a href="#projects">Proyectos</a>
                </li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                    <a href="#contact">Contacto</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Navbar;