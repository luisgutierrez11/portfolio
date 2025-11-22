const AboutSection = ({fotoPerfil}) => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-24">
      <h3 className="text-3xl font-bold mb-8">Sobre mí</h3>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* FOTO */}
        <div className="
          border border-neutral-900 p-4 rounded-3xl rotate-3 group w-fit mx-auto
          shadow-lg shadow-cyan-500/10
        ">
          <img 
            src={fotoPerfil}
            alt="Luis Gutierrez foto"
            className="
              w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl mx-auto
              shadow-lg shadow-cyan-500/10 border border-neutral-800
              rotate-group
            "
          />
        </div>

        {/* TEXTO */}
        <div className="flex flex-col gap-6">
          
          <p className="text-neutral-300 leading-relaxed text-lg">
            ¡Hola! Soy <span className="text-cyan-400 font-semibold">Luis Gutierrez</span>,
            un desarrollador <span className="text-neutral-100">fullstack</span> enfocado en construir 
            aplicaciones modernas, rápidas y con buen diseño. Me apasiona el
            desarrollo web y disfruto aprender tecnologías nuevas todos los días.
          </p>

          <p className="text-neutral-400">
            Actualmente trabajo con <span className="text-neutral-200">React, Node.js, Express y MongoDB</span>.  
            También utilizo herramientas como TailwindCSS, Redux y Playwright para crear
            experiencias completas tanto en frontend como backend.
          </p>

          <div>
            <h4 className="text-xl font-semibold mb-3">Me especializo en:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-300">
              <li>• Frontend con React + Tailwind</li>
              <li>• Backend con Node + Express</li>
              <li>• APIs REST & MongoDB</li>
              <li>• Testing e2e y unitario</li>
            </ul>
          </div>

          <div className="flex gap-4 mt-4">
            <a 
              href="/cv.pdf" 
              download
              className="
                px-5 py-3 bg-cyan-500 text-neutral-900 rounded-xl font-semibold 
                hover:bg-cyan-400 hover:scale-95 transition"
            >
              Descargar CV
            </a>

            <a 
              href="#contact"
              className="
                px-5 py-3 border border-neutral-700 hover:border-cyan-400 rounded-xl 
                font-semibold hover:scale-105 transition"
            >
              Contacto
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection
