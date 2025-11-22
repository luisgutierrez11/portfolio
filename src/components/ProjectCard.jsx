const ProjectCard = ({ title, desc, img, tech, demo, repo }) => {
  return (
    <div className="
      bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden 
      hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 
      hover:scale-105 transition
    ">
      
      {/* Imagen */}
      <img
        src={img}
        alt={title}
        className="w-full h-44 object-cover"
      />

      <div className="p-5 flex flex-col gap-3">
        
        {/* Título */}
        <h4 className="text-xl font-semibold">{title}</h4>

        {/* Descripción */}
        <p className="text-neutral-400 text-sm">{desc}</p>

        {/* Tech badge list */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((t) => (
            <span
              key={t}
              className="
                text-xs px-2 py-1 bg-neutral-800 rounded-lg border 
                border-neutral-700 text-neutral-300
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex gap-3 mt-4">
          <a
            href={demo}
            target="_blank"
            className="
                px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-neutral-900 rounded-lg 
                font-semibold transition"
          >
            Demo
          </a>
          <a
            href={repo}
            target="_blank"
            className="
                px-4 py-2 border border-neutral-700 hover:border-cyan-400 rounded-lg 
                font-semibold transition"
          >
            Código
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
