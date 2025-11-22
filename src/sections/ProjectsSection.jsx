import ProjectCard from "../components/ProjectCard"
import expImg from "../assets/projects/expense-tracker-dash.png"
import notesImg from "../assets/projects/notes-app-dashboard.png"
import agendaImg from "../assets/projects/agenda-contacts-dash.png"

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-20">
      <h3 className="text-3xl font-bold mb-4">Proyectos Destacados</h3>
      <p className="text-neutral-400 mb-10">
        Una selección de los proyectos que desarrollé con tecnologías modernas.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <ProjectCard
        title="Notes App"
        desc="Notas personales con autenticación, pruebas y API REST."
        img={notesImg}
        tech={["React", "Express","Node.js","MongoDB", "CSS Modules"]}
        demo="https://notes-app-luis11.vercel.app/"
        repo="https://github.com/luisgutierrez11/notes-app"
        />

        <ProjectCard
          title="Expense Tracker"
          desc="Aplicación fullstack para gestionar gastos personales."
          img={expImg}
          tech={["React", "Node.js", "MongoDB", "TailwindCSS"]}
          demo="https://expense-tracker-app-luis11.vercel.app/"
          repo="https://github.com/luisgutierrez11/expense-tracker"
        />

        <ProjectCard
          title="Agenda Contacts"
          desc="Agenda de contactos con CRUD completo y diseño simple."
          img={agendaImg}
          tech={["React", "Material UI", "Node.js", "MongoDB"]}
          demo="https://agenda-contacts-app-luis11.vercel.app/"
          repo="https://github.com/luisgutierrez11/agenda-contacts-app"
        />

      </div>
    </section>
  );
};

export default ProjectsSection;
