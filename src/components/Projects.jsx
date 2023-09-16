import Card from "./Card"
import OrinocoIron from './../assets/orinoco_iron.png'
import Yione from './../assets/logoo.png'
import Clinic from './../assets/clinicaFigma.png'

const Projects = () => {
  return (
    <section className="pb-10">
        <h1 className="text-xl overline decoration-green-500 font-Oswald mb-4">PROYECTOS Y EXPERIENCIAS ADQUIRIDAS</h1>
        <div className="flex flex-wrap">
          <Card 
            name="Desarrollador Web"
            img={OrinocoIron}
            startDate="Diciembre 2022"
            endDate="Abril 2023"
            description="Proyecto de pasantía presentado como recurso para optar al título de ingeniería informática"
          />
          <Card 
            name="Desarrollador Full Stack"
            img={Yione}
            startDate="Enero 2023"
            endDate="Febrero 2023"
            description="Proyecto realizado como freelance como parte de una evaluación de conocimientos de tecnologías de alto rendimiento"
          />
          <Card
            name="Desarrollador Backend"
            img={Clinic}
            startDate='Abril 2023'
            endDate='Septiembre 2023'
            description='Proyecto universitario que tiene como objetivo de demostrar conocimiento sobre desarrollo de software y aplicaciones web'
          />
        </div>
    </section>
  )
}

export default Projects