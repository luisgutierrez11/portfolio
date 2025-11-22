import TechCard from "./TechCard"
import spriteUrl from '../assets/sprites.svg?url'

const TechBentoGrid = () => {
   
    return (
    <section id="tech" className="max-w-5xl mx-auto px-4 py-10">
        <h3 className="text-3xl font-bold mb-8">Tech Stack</h3>        

        <div className="grid grid-cols-4 grid-rows-3 gap-2 w-full">
            <TechCard
                label="React"
                size="col-span-2"
                classCard={
                    `bg-gradient-to-br from-cyan-800 via-cyan-600 to-cyan-400 
                    border border-cyan-800`
                }
                icon={`${spriteUrl}#react`}
            />
            <TechCard
                label="Redux"
                size="col-span-1"
                classCard={`
                    bg-gradient-to-br from-[#764abc] via-[#8f78c9] to-[#bfaee0] 
                    border border-[#764abc]`}
                icon={`${spriteUrl}#redux`}
            />
            <TechCard
                label="Express"
                size="col-span-1"
                classCard={`
                    bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 border 
                    border-gray-900`}
                icon={`${spriteUrl}#ex`}
            />
            <TechCard
                label="JavaScript"
                size="col-span-1"
                classCard={`
                    bg-gradient-to-br from-white via-yellow-200 to-yellow-600 
                    border border-yellow-600`}
                icon={`${spriteUrl}#js`}
            />
            <TechCard
                label="Node.js"
                size="col-span-2"
                classCard={`
                    bg-gradient-to-br from-[#3C873A] via-[#2f6e2f] to-[#1f4f1f] 
                    border border-[#3C873A]`}
                icon={`${spriteUrl}#node`}
            />
            <TechCard
                label="TailwindCSS"
                size="col-span-1"
                classCard={`
                    bg-gradient-to-br from-sky-500 via-sky-300 to-sky-100 
                    border border-sky-600`}
                icon={`${spriteUrl}#tailwind`}
            />
            <TechCard
                label="HTML5"
                size="col-span-1"
                classCard={`
                    bg-gradient-to-br from-orange-600 via-orange-400 to-orange-200 
                    border border-orange-600`}
                icon={`${spriteUrl}#html`}
            />
            <TechCard
                label="MongoDB"
                size="col-span-1"
                classCard={`
                    bg-gradient-to-br from-[#47A248] via-[#3f8a3f] to-[#2f6f2f] 
                    border border-[#2f6f2f]`}
                icon={`${spriteUrl}#mongodb`}
            />
            <TechCard
                label="CSS"
                size="col-span-1"
                classCard={`
                    bg-gradient-to-br from-[#663399] via-[#8e44ad] to-white
                    border border-[#663399]`}
                icon={`${spriteUrl}#css`}
            />
            <TechCard
                label="Playwright"
                size="col-span-1"
                classCard={`
                    bg-gradient-to-br from-pink-600 via-pink-500 to-pink-300 
                    border border-pink-600`}
                icon={`${spriteUrl}#playwright`}
            />
        </div>
    </section>
    )
}

export default TechBentoGrid