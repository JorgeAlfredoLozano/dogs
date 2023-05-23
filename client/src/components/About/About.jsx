import React, { useState } from 'react';
import styles from './About.module.css';
import fullStack from '../../assets/Full-Stack-Developer.jpg';
import perfil from '../../assets/foto.jpg';

const About = () => {
  const [language, setLanguage] = useState('ENG'); // Estado para controlar el idioma seleccionado

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {/* Contenido de la columna de 20% */}
        <br />
        <button style={{ borderRadius: "35%" }} onClick={() => setLanguage('ESP')}>ESP</button>
        <button style={{ borderRadius: "35%", marginRight: "1px" }} onClick={() => setLanguage('ENG')}>ENG</button>
        <br />
        <img className={styles.foto} src={perfil} alt="Foto de Perfil" />
        <h2 style={{ color: "white" }}>Jorge Lozano</h2>

        {language === 'ESP' ? (
          <>
            <h4 style={{ color: "white" }}>Inicio</h4>
            <h4 style={{ color: "white" }}>Sobre mí</h4>
            <h4 style={{ color: "white" }}>Tecnologías</h4>
            <h4 style={{ color: "white" }}>Proyecto</h4>
            <h4 style={{ color: "white" }}>Contacto</h4>
          </>
        ) : (
          <>
            <h4 style={{ color: "white" }}>Home</h4>
            <h4 style={{ color: "white" }}>About Me</h4>
            <h4 style={{ color: "white" }}>Technologies</h4>
            <h4 style={{ color: "white" }}>Project</h4>
            <h4 style={{ color: "white" }}>Contact</h4>
          </>
        )}
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          {/* Contenido de la columna de 80% */}
          {/* Aquí puedes colocar el diseño que se expandirá hacia abajo */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={fullStack} alt="" style={{ marginTop: "40px", marginLeft: "40px", width: '70%', height: 'auto' }} />
          </div>

          <h2 style={{ marginTop: "90px" }}>{language === 'ESP' ? "Sobre mí" : "About Me"}</h2>
          <p className={styles.paragraph}>
            {language === 'ESP' ? (
              <>
                <p className={styles.paragraph}>
                  Hola, soy Jorge. Soy un entusiasta de la tecnología apasionado y en constante aprendizaje. Como Desarrollador Full Stack, me desafío con los desafíos y disfruto expandiendo mis conocimientos en el campo. Me considero una persona empática y curiosa, siempre en busca de aprender más.

                  Estoy ansioso por ser parte de proyectos colaborativos y crecer aún más en mi profesión. Con una fuerte dedicación a mi trabajo, me esfuerzo por ofrecer soluciones de alta calidad y contribuir eficazmente al éxito del equipo.

                  El crecimiento continuo y mantenerme actualizado con las últimas tendencias de la industria son de suma importancia para mí. Acepto oportunidades para mejorar mis habilidades y explorar tecnologías innovadoras.

                  Estoy emocionado por las posibilidades que se presentan y espero hacer contribuciones valiosas en un entorno dinámico y profesional.

                  No dudes en contactarme si tienes alguna pregunta adicional o si te gustaría explorar posibles colaboraciones.

                  Gracias por tu tiempo y consideración.

                  Atentamente,
                  Jorge
                </p>
                <div className={styles.columnContainer}>
                  <div className={styles.column}>
                    {/* Contenido de la primera columna */}
                    <h4>Argentina Programa 4.0</h4>
                    <h5>Introducción a la Programación</h5>
                    <p>Contenido de la primera columna.</p>
                  </div>
                  <div className={styles.column}>
                    {/* Contenido de la segunda columna */}
                    <h4>Codo a Codo</h4>
                    <h5>Q/A Testing</h5>
                    <p>Contenido de la segunda columna.</p>
                  </div>
                  <div className={styles.column}>
                    {/* Contenido de la tercera columna */}
                    <h4>soy Henry</h4>
                    <h5>Full Stack Web Developer</h5>
                    <p>Contenido de la tercera columna.</p>
                  </div>

                </div>
                <br />
                <div className={styles.columnContainer}>
                  <div className={styles.column}>
                    {/* Contenido de la primera columna */}
                    <h4>TecLab</h4>
                    <h5>Técnico Superior en Seguros</h5>
                    <p>Contenido de la primera columna.</p>
                  </div>
                  <div className={styles.column}>
                    {/* Contenido de la segunda columna */}
                    <h4>UTN Regional La Plata</h4>
                    <h5>Analista en Sistemas</h5>
                    <p>Contenido de la segunda columna.</p>
                  </div>
                  <div className={styles.column}>
                    {/* Contenido de la tercera columna */}
                    <h4>ENET N°1 "Vicente Pereda"</h4>
                    <h5>Técnico Nacional en Computación</h5>
                    <p>Contenido de la tercera columna.</p>
                  </div>
                </div>
                
                {/* Habilidades técnicas */}
                <div className={styles.skills}>
                  <h3>Habilidades Técnicas</h3>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '80%', backgroundColor: 'green' }}></div>
                  </div>
                  <p>React - 80%</p>
                </div>
              </>
            ) : (
              <>
                <p className={styles.paragraph}>
                  Hello, I'm Jorge. I'm a passionate and constantly learning technology enthusiast. As a Full Stack Developer, I thrive on challenges and enjoy expanding my knowledge in the field. I consider myself an empathetic and inquisitive individual, always seeking to learn more.

                  I am eager to be part of collaborative projects and to further grow in my profession. With a strong dedication to my work, I strive to deliver high-quality solutions and contribute effectively to team success.

                  Continual growth and staying up-to-date with the latest industry trends are of utmost importance to me. I embrace opportunities to enhance my skills and explore innovative technologies.

                  I am excited about the possibilities that lie ahead and look forward to making valuable contributions in a dynamic and professional environment.

                  Please feel free to reach out to me if you have any further questions or if you would like to explore potential collaborations.

                  Thank you for your time and consideration.

                  Sincerely,
                  Jorge
                </p>
                <div className={styles.columnContainer}>
                  <div className={styles.column}>
                    {/* Contenido de la primera columna */}
                    <h3>Argentina Programa 4.0</h3>
                    <h4>Introduction to programming</h4>
                    <p>Contenido de la primera columna.</p>
                  </div>
                  <div className={styles.column}>
                    {/* Contenido de la segunda columna */}
                    <h3>Codo a Codo</h3>
                    <h4>Q/A Testing</h4>
                    <p>Contenido de la segunda columna.</p>
                  </div>
                  <div className={styles.column}>
                    {/* Contenido de la tercera columna */}
                    <h3>soy Henry</h3>
                    <h4>Full Stack Web Developer</h4>
                    <p>Contenido de la tercera columna.</p>
                  </div>
                </div>
                <br />
                <div className={styles.columnContainer}>
                  <div className={styles.column}>
                    {/* Contenido de la primera columna */}
                    <h3>TecLab</h3>
                    <h4>Higher Technician in Insurance</h4>
                    <p>Contenido de la primera columna.</p>
                  </div>
                  <div className={styles.column}>
                    {/* Contenido de la segunda columna */}
                    <h3>UTN Regional La Plata</h3>
                    <h4>Systems Analyst</h4>
                    <p>Contenido de la segunda columna.</p>
                  </div>
                  <div className={styles.column}>
                    {/* Contenido de la tercera columna */}
                    <h3>ENET N°1 "Vicente Pereda"</h3>
                    <h4>National Computer Technician</h4>
                    <p>Contenido de la tercera columna.</p>
                  </div>
                </div>

                {/* Habilidades técnicas */}
                <div className={styles.skills}>
                  <h3>Technical Skills</h3>
                  
                </div>
                <br />
                <div className={styles.columnContainer}>
                  <div className={styles.columnTech}>
                    {/* Contenido de la primera columna */}
                    <h3>Front-End</h3>
                      <h4>React</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-15px', width: '80%', backgroundColor: 'green' }}></div>
                      <h4>JavaScript</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-15px', width: '80%', backgroundColor: 'green' }}></div>
                      </div>
                      <h4>HTML</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-15px', width: '50%', backgroundColor: 'green' }}></div>
                      </div>
                      <h4>CSS</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-15px', width: '50%', backgroundColor: 'green' }}></div>
                      </div>
                  </div>
                  
                  </div>
                  <div className={styles.columnTech}>
                    {/* Contenido de la segunda columna */}
                    <h3>Back-End</h3>
                    <h4>Postgres</h4>
                    <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ marginTop: '-15px', width: '80%', backgroundColor: 'yellow' }}></div>
                  </div>
                  
                  </div>
                  <div className={styles.columnTech}>
                    {/* Contenido de la tercera columna */}
                    <h3>Soft-Skills</h3>
                    <h4>Communicative</h4>
                    <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ marginTop: '-15px', width: '90%', backgroundColor: 'blue' }}></div>
                  </div>
                  
                  </div>
                </div>
                
              </>
            )}
          </p>
          {/* Resto del contenido */}
        </div>
      </div>
    </div>
  );
};

export default About;

