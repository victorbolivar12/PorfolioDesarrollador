import Card from "./Card"
import OrinocoIron from './../assets/orinoco_iron.png'
import Yione from './../assets/logoo.png'
import Clinic from './../assets/clinicaFigma.png'
import Un from './../assets/LOGO_UNEG.jpg'
import Dw from './../assets/Dw.png'
import Modal from "./Modal"
import { useState } from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoPhp, BiLogoReact, BiLogoPostgresql } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";


const Projects = () => {

  const Project1Tecnologis = [
    { icon: AiFillHtml5, name: 'HTML' },
    { icon: BiLogoPhp, name: 'PHP' },
    { icon: BiLogoJavascript, name: 'JavaScrip' },
    { icon: FaComputer, name: 'framework-E' },
  ]

  const Project2Tecnologis = [
    { icon: BiLogoReact, name: 'React' },
    { icon: FaNode, name: 'Node' },
    { icon: BiLogoJavascript, name: 'Express' },
    { icon: BiLogoPostgresql, name: 'Postgres' },
  ]

  const Project4Tecnologis = [
    { icon: AiFillHtml5, name: 'HTML' },
    { icon: BiLogoCss3, name: 'CSS' },
    { icon: BiLogoJavascript, name: 'JavaScrip' },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);


  return (
    <section className="pb-10">
      <h1 className="text-xl overline decoration-green-500 font-Oswald mb-4">PROYECTOS Y EXPERIENCIAS ADQUIRIDAS</h1>
      <div className="flex flex-wrap gap-5">
        <Card
          name="Desarrollador Web"
          img={OrinocoIron}
          startDate="Diciembre 2022"
          endDate="Abril 2023"
          description="Este proyecto de pasantía representa una contribución significativa hacia la obtención del título de ingeniería informática. Constituye una demostración tangible y aplicada del conocimiento adquirido a lo largo de mi formación"
          link="https://drive.google.com/file/d/13yT9Py-uQmkuDrIJC1VCoB7LRPKHffaz/view?usp=sharing"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          ComponentModal={
            <Modal
              isOpen={isOpen}
              setOpen={setIsOpen}
              title='Proyecto de pasantia orinoco-iron'
              Paragraph1="El presente proyecto tuvo como objetivo presentar el trabajo de pasantía desarrollado en la empresa Orinoco Iron, durante un período de 3 meses. La pasantía se enfocó en el desarrollo de los módulos de control de impresoras y registro de consumibles de la empresa, con el propósito de mejorar la eficiencia y eficacia en la gestión de consumibles y el control de impresiones."
              Paragraph2="La empresa Orinoco Iron, como compañía productora de mineral de hierro, cuenta con una importante cantidad de equipos de impresión y consumibles en sus diferentes áreas. Sin embargo, la gestión de los consumibles y el control de impresiones no estaban optimizados, lo que llevó a la empresa a plantear la necesidad de desarrollar módulos que permitieran automatizar estos procesos y mejorar su eficiencia."
              Paragraph3="Los resultados obtenidos en este proyecto fueron significativos, permitiendo a la empresa mejorar la eficiencia y eficacia en la gestión de consumibles y el control de impresiones, reduciendo los tiempos y costos asociados a estos procesos"
              tecnologis={Project1Tecnologis}
              link="https://drive.google.com/file/d/13yT9Py-uQmkuDrIJC1VCoB7LRPKHffaz/view?usp=sharing"
            />}
        />
        <Card
          name="Desarrollador Full Stack"
          img={Yione}
          startDate="Enero 2023"
          endDate="Febrero 2023"
          description="Este proyecto, desarrollado de manera independiente como freelance, se concibió como parte integral de una evaluación de competencias en tecnologías de alto rendimiento"
          link="https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE"
          isOpen={isOpen1}
          setIsOpen={setIsOpen1}
          ComponentModal={
            <Modal
              isOpen={isOpen1}
              setOpen={setIsOpen1}
              title='Proyecto Empresa IOYNE'
              Paragraph1="El principal objetivo de este proyecto fue desarrollar una plataforma que permitiera a IOYNE gestionar eficazmente su relación con los clientes. Esta fue diseñada a medida para satisfacer las necesidades específicas de la empresa y se centro en la gestión de usuarios, clientes y cotizaciones."
              Paragraph2="La plataforma se desarrollo utilizando tecnologías de última generación para garantizar escalabilidad y accesibilidad. Cuenta con una interfaz de usuario intuitiva y fácil de usar que permite a los empleados de IOYNE acceder y gestionar fácilmente los datos, cotizaciones y clientes potenciales de la empresa."
              tecnologis={Project2Tecnologis}
              link = "https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE"
            />}
        />
        <Card
          name="Desarrollador Backend"
          img={Clinic}
          startDate='Abril 2023'
          endDate='Septiembre 2023'
          description='Este proyecto universitario tiene como finalidad demostrar un profundo conocimiento en el desarrollo de software y aplicaciones web'
          link="https://github.com/victorbolivar12/ProyectoDesarrolloWeb2023"
          isOpen={isOpen2}
          setIsOpen={setIsOpen2}
          ComponentModal={
            <Modal
              isOpen={isOpen2}
              setOpen={setIsOpen2}
              title='Clinica Psicologica'
              Paragraph1="Este es un proyecto colaborativo en el cual hemos desarrollado una aplicación web para facilitar la reserva de citas en la clínica psicológica. Nuestro enfoque se baso en aprovechar la tecnología digital para mejorar la accesibilidad y la eficiencia en la gestión de citas"
              Paragraph2="La aplicación proporciona a los pacientes una forma conveniente de programar citas en línea, consultando la disponibilidad de horarios en tiempo real y brindando la posibilidad de elegir al profesional que deseen"
              tecnologis={Project2Tecnologis}
              link='https://github.com/victorbolivar12/ProyectoDesarrolloWeb2023'
            />}
        />
        <Card
          name="Desarrollador Paginas Web"
          img={Dw}
          startDate='Enero 2020'
          endDate='Febrero 2020'
          description='Se trata de un sitio web diseñado y desarrollado como profesional independiente para  mis habilidades en el desarrollo de páginas web utilizando HTML, CSS y JavaScript'
          link="https://github.com/victorbolivar12/PresentationPage"
          isOpen={isOpen4}
          setIsOpen={setIsOpen4}
          ComponentModal={
            <Modal
              isOpen={isOpen4}
              setOpen={setIsOpen4}
              title='DDS-WEB: Diseño y Desarrollo Web'
              Paragraph1="El proyecto DDS-WEB es una iniciativa llevada a cabo como un profesional independiente con el objetivo de demostrar mis habilidades en el diseño y desarrollo de páginas web. Utilizando tecnologías fundamentales como HTML, CSS y JavaScript, se ha creado un sitio web que refleja un alto nivel de competencia y destreza en el campo del desarrollo web."
              Paragraph2="El objetivo de DDS-WEB es proporcionar a las empresas una plataforma digital sólida y confiable. Una página web bien diseñada y desarrollada no solo mejora la presencia en línea, sino que también genera confianza en los visitantes, lo que puede conducir a una mayor tasa de conversión y éxito comercial."
              tecnologis={Project4Tecnologis}
              link="https://victorbolivar12.github.io/PresentacionCongreso/"
            />}
        />
        <Card
          name="Desarrollador Paginas Web"
          img={Un}
          startDate='Abril 2019'
          endDate='Agosto 2019'
          description='Página realizada en colaboración con la Universidad Nacional Experimental de Guayana (Venezuela - Puerto Ordaz) cuyo objetivo era presentar las distintas actividades y materiales al personal administrativo y decente de la universidad'
          link="https://github.com/victorbolivar12/PresentacionCongreso"
          isOpen={isOpen3}
          setIsOpen={setIsOpen3}
          ComponentModal={
            <Modal
              isOpen={isOpen3}
              setOpen={setIsOpen3}
              title='Página Web de Presentación del Congreso de la UNEG'
              Paragraph1="La Página Web de Presentación del Congreso de la Universidad Nacional Experimental de Guayana (UNEG) representa una colaboración notable entre el equipo de desarrollo y la prestigiosa institución académica. El propósito primordial de esta iniciativa es proporcionar a los miembros del personal administrativo y docente de la universidad un acceso intuitivo y completo a información relevante sobre las distintas actividades y materiales "
              Paragraph2="La Página representa un recurso valioso y efectivo para la comunidad académica de la universidad. Gracias a su diseño intuitivo y contenido bien organizado, esta plataforma ha facilitado la participación y contribución de los miembros del personal en el congreso"
              tecnologis={Project4Tecnologis}
              link="https://victorbolivar12.github.io/PresentacionCongreso/"
            />}
        />

      </div>

    </section>
  )
}

export default Projects