import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoPostgresql } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { DiMsqlServer } from "react-icons/di";
import Rp from './../assets/piezas-de-rompecabezas.png'
import Ce from './../assets/comunicacion-efectiva.png'
import Ac from './../assets/aprendiendo.png'

const Main = () => {

  const tecnologis = [
    { icon: AiFillHtml5, name: 'HTML' },
    { icon: BiLogoCss3, name: 'CSS' },
    { icon: BiLogoJavascript, name: 'JavaScrip' },
    { icon: BiLogoReact, name: 'React' },
    { icon: FaNode, name: 'Node.js' },
    { icon: DiMsqlServer, name: 'SQL' },
    { icon: BiLogoPostgresql, name: 'Postgress' },
    { icon: AiFillGithub, name: 'GitHub' },
  ]

  return (
    <section className="md:flex md:gap-14 mb-4 md:mb-9">
      <div className="mb-8 md:w-1/2">
        <section className="mb-4">
          <h1 className="text-xl overline decoration-green-500 font-Oswald mb-4">PRESENTACION</h1>
          <p>
            Como ingeniero informático, he invertido tiempo y esfuerzo en dominar tecnologías clave para el desarrollo Frontend y Backend. Mi experiencia abarca el uso de React para crear interfaces dinámicas y atractivas, así como Node.js y Express para construir aplicaciones robustas y escalables.<br /><br />

            Además, he trabajado con bases de datos PostgreSQL, lo que me ha permitido desarrollar aplicaciones con un enfoque en la eficiencia y la gestión de datos.<br /><br />

            Estoy emocionado por la posibilidad de aplicar estos conocimientos y habilidades en un entorno laboral y estoy completamente dispuesto a aprender nuevas tecnologías según las necesidades del proyecto y del equipo.
          </p>
        </section>

        <section className="mb-7">
          <h1 className="text-xl overline decoration-green-500 font-Oswald mb-3">IDIOMAS</h1>
          <p className="font-bold text-base">Español / Inglés Básico</p>
        </section>

        <section>
         <h1 className="text-xl overline decoration-green-500 font-Oswald mb-4">DATOS INTERESANTES SOBRE MI</h1>
         <h2 className="text-slate-400 font-medium text-xs mb-1">Running</h2>
         <p className="text-sm mb-4">Soy apasionado de correr, suelo participar en carreras de 7-10-12-15-21km tanto de trial como asfalto</p>

         <h2 className="text-slate-400 font-medium text-xs mb-1">Viajes</h2>
         <p className="text-sm mb-4">Tengo el sueño de viajar y conocer distintos países  y ciudades para llenarme de nuevos conocimientos y culturas</p>
        </section>

      </div>
      <div className="md:w-1/2">
        <section className="mb-7">
          <h1 className="text-xl overline decoration-green-500 font-Oswald mb-4">TECNOLOGIAS Y HERRAMIENTAS</h1>
          <p className="font-mono ">Control de</p>
          <p className="w-[100%] h-0.5 bg-gray-200 mb-2"></p>
          <div className="flex flex-wrap gap-5 mb-5">
            {tecnologis.map((Element) => {
              return (
                <div>
                  <Element.icon className="text-3xl ml-3 text-slate-600" />
                  <p className="ml-3 text-xs font-mono">{Element.name}</p>
                </div>
              )
            })}
          </div>
          <p className="font-mono">Intereses</p>
          <p className="w-[100%] h-0.5 bg-gray-200 mb-2"></p>
          <div className="flex">
            <FaComputer className="text-3xl mr-3 text-slate-600"/>
            <p className="text-sm mt-1">Disposición de aprender cualquier tecnología</p>
          </div>
        </section>

        <section>
          <h1 className="text-xl overline decoration-green-500 font-Oswald mb-4">MIS HABILIDADES</h1>
          <div>
            <div className="flex">
              <img src={Rp} alt="Resolucion de problemas" className="w-14 mr-7 mb-4" />
              <p className="mt-5">Resolución de Problemas</p>
            </div>
            <div className="flex">
              <img src={Ce} alt="Resolucion de problemas" className="w-14 mr-7 mb-4" />
              <p className="mt-5">Comunicación Efectiva</p>
            </div>
            <div className="flex">
              <img src={Ac} alt="Resolucion de problemas" className="w-14 mr-7 mb-4" />
              <p className="mt-5">Aprendizaje Continuo</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Main
