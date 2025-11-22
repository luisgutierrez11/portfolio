const HeroSection = ({fotoPerfil}) => {
    return (
    <section id='hero' className="max-w-5xl mx-auto px-4 pt-32 pb-28 min-w-[280px]">
        <div className="flex flex-col gap-6">
            <div className='flex flex-col sm:flex-row items-center sm:items-center gap-4'>
                {/* Foto pequeña */}
                <img 
                    src={fotoPerfil} 
                    className='w-28 h-28 rounded-full object-cover shadow-md'
                    alt="profile" 
                />
                {/* Botón de disponibilidad */}
                <a 
                    href='mailto:luisgutierrezdev@mail.com'
                    className='
                        flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 border border-green-600 rounded-full text-sm hover:bg-green-600 hover:text-white transition hover:scale-105 group
                    '>
                    <span className="
                    text-green-600 text-lg group-hover:text-white transition">
                        ●
                    </span>
                    Disponible para trabajar
                </a>
            </div>

            {/* Texto principal */}
            <h2 className="text-2xl md:text-7xl font-bold leading-tight">
             Desarrollador <span className="text-cyan-400">Fullstack</span>
            </h2>

            <p className="text-neutral-400 text-lg max-w-2xl">
                Soy Luis Gutierrez, desarrollo <span className="text-neutral-200">frontend</span> con React, Redux y Tailwind,
                y <span className="text-neutral-200">backend</span> con Node.js, Express y MongoDB. Me especializo en
                construir aplicaciones modernas, rápidas y con buen diseño.
            </p>

            <div className="flex gap-4 mt-4">
                <a
                    href="#projects"
                    className="
                        bg-cyan-500 hover:bg-cyan-400 text-neutral-900 px-6 py-3 
                        rounded-xl font-semibold transition hover:scale-95
                    ">
                    Ver Proyectos
                </a>
                <a
                    href="#contact"
                    className="border border-neutral-700 hover:border-cyan-400 px-6 
                    py-3 rounded-xl font-semibold transition hover:scale-105
                ">
                    Contacto
                </a>
            </div>
        </div>
    </section>
    )
}

export default HeroSection