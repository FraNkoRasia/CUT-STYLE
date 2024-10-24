import React from 'react';
import Image from '/FraNko-3.webp';
import Image2 from '/josafat.webp';
import Image3 from '/amin.webp';
import '../About/About.css';
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
    return (
        <div className="about-container">
            <div className='card-container'>
                <h1>CUT & <span>STYLE</span></h1>
                <h2>
                    En esta <span>simulación laboral</span>  de No-Country, desarrollamos una página
                    web enfocada en ofrecer servicios de barbería. Utilizando <span>Node.js </span>
                    para el backend y <span>React</span> con Vite para el frontend, creamos una
                    plataforma eficiente y moderna. El objetivo es facilitar la conexión
                    entre clientes y barberías, permitiendo gestionar citas, servicios
                    y perfiles de manera rápida e intuitiva.</h2>
                {/* Card 1 */}
                <div className="card">
                    <div className="cover">
                        <img src={Image3} alt="" />
                        <div className="img__back"></div>
                    </div>
                    <div className="description">
                        <h2>Amin Mirabelli</h2>
                        <p className='roldev'>QA TESTER</p>
                        <p className='desc'>
                            Experto en asegurar la calidad del software mediante pruebas
                            exhaustivas y sistemáticas. Se dedica a identificar errores y
                            optimizar el rendimiento de aplicaciones, garantizando una
                            experiencia de usuario impecable.
                        </p>
                        <div>
                            <a className='iconogithub' href="https://github.com/AminMirabelli"><ImGithub size={40} /></a>
                            <a className='iconolinkedin' href="linkedin.com/in/amin-mirabelli-83bb53213"><FaLinkedin size={40} /></a>
                        </div>

                    </div>
                </div>
                {/* Card 2 */}
                <div className="card">
                    <div className="cover">
                        <img src={Image2} alt="" />
                        <div className="img__back"></div>
                    </div>
                    <div className="description">
                        <h2>Josafat Jimenez</h2>
                        <p className='roldev'>FULLSTACK DEVELOPER</p>
                        <p className='desc'>
                            Desarrollador versátil con habilidades en frontend y backend.
                            Crea aplicaciones completas, desde interfaces interactivas
                            hasta la gestión de bases de datos, asegurando soluciones
                            integrales y eficientes.</p>
                        <div>
                            <a className='iconogithub' href="https://github.com/JosafatJimenezB"><ImGithub size={40} /></a>
                            <a className='iconolinkedin' href="linkedin.com/in/josafat-jimenez"><FaLinkedin size={40} /></a>
                        </div>

                    </div>
                </div>
                {/* Card 3 */}
                <div className="card">
                    <div className="cover">
                        <img src={Image} alt="" />
                        <div className="img__back"></div>
                    </div>
                    <div className="description">
                        <h2>Emanuel Rodriguez</h2>
                        <p className='roldev'>FRONTEND DEVELOPER</p>
                        <p className='desc'>
                            Desarrollador especializado en la creación de interfaces
                            atractivas y funcionales. Experto en tecnologías modernas
                            como React y CSS, enfocado en ofrecer experiencias de usuario
                            intuitivas y eficientes.</p>
                        <div>
                            <a className='iconogithub' href=""><ImGithub size={40} /></a>
                            <a className='iconolinkedin' href=""><FaLinkedin size={40} /></a>
                        </div>

                    </div>
                </div>
                 {/* Card 3 */}
                 <div className="card">
                    <div className="cover">
                        <img src={Image} alt="" />
                        <div className="img__back"></div>
                    </div>
                    <div className="description">
                        <h2>Franco Rasia</h2>
                        <p className='roldev'>FRONTEND DEVELOPER</p>
                        <p className='desc'>
                            Desarrollador especializado en la creación de interfaces
                            atractivas y funcionales. Experto en tecnologías modernas
                            como React y CSS, enfocado en ofrecer experiencias de usuario
                            intuitivas y eficientes.</p>
                        <div>
                            <a className='iconogithub' href="https://github.com/FraNkoRasia?tab=repositories"><ImGithub size={40} /></a>
                            <a className='iconolinkedin' href="https://www.linkedin.com/in/francorasia/"><FaLinkedin size={40} /></a>
                        </div>

                    </div>
                </div>
            </div>
        </div >


    )
}
