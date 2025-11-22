import spriteUrl from '../assets/sprites.svg?url'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contacto</h2>
        <p className="text-neutral-400 mb-6">
          Podés contactarme por mis redes o escribirme un email 👇
        </p>

        <div className="flex flex-col items-center gap-6">
          {/* Email */}
          <a
            href="mailto:luis.gut.11jm@gmail.com"
            className="
                text-lg font-medium text-indigo-400 hover:text-indigo-300 
                hover:scale-105 transition
            ">
            luis.gut.11jm@gmail.com 📩
          </a>

          {/* Redes */}
          <div className="flex gap-6 text-neutral-400">
            <a
              href="https://github.com/luisgutierrez11"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <svg className='size-12'>
                <use href={`${spriteUrl}#github`} />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-guti%C3%A9rrez-90b4a52b7/"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <svg className='size-12'>
                <use href={`${spriteUrl}#linkedin`} />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
