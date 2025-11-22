const TechCard = ({label, size, classCard, icon}) => {

/* Tarjetas individuales, contenedor con estilos generales de las TechCards */
 return (
    <div className={`
            relative rounded-3xl overflow-hidden flex flex-col items-start
            hover:scale-105 hover:contrast-125 group p-7 min-h-[180px]
            transition   
            ${size} ${classCard}
        `}>

        {/* Label */}
        <span className="
                absolute bottom-3 left-4 font-bold text-2xl group-hover:translate-x-1 
                group-hover:-translate-y-1 transition
        ">
            {label}
        </span>

        {/* Icon */}
        <svg className="
            absolute right-2 bottom-2 opacity-90 -rotate-6 size-24 group-hover:rotate-0
            group-hover:scale-125 group-hover:opacity-100 transition-all duration-300 ease-out
        "
            width="100" height="100"
            >
            <use href={icon} />
        </svg>
    </div>
 )
}

export default TechCard
