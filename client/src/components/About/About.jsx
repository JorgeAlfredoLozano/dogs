/*************************************/
/*****       IMPORTACIONES       *****/
/*************************************/
import React, { useState } from 'react';
import styles from './About.module.css';
import fullStack from '../../assets/Full-Stack-Developer.jpg';
import perfil from '../../assets/foto.jpg';
import arg40 from '../../assets/about/arg40.png'
import codo from '../../assets/about/codo.png'
import henry from '../../assets/about/henry.png'
import teclab from '../../assets/about/teclab.png'
import utn from '../../assets/about/utn.png'
import enet from '../../assets/about/enet.png'

const About = () => {
  const [language, setLanguage] = useState('ENG'); // Estado para controlar el idioma seleccionado

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {/* Contenido de la columna de 20% */}
        <br />
        <button style={{ cursor: 'pointer', color:"white", background:"#f66414", borderRadius: "35%" }} onClick={() => setLanguage('ESP')}>ESP</button>
        <button style={{ cursor: 'pointer', color:"white", background: "#1479f6", borderRadius: "35%", marginRight: "1px" }} onClick={() => setLanguage('ENG')}>ENG</button>
        <br />
        <img className={styles.foto} src={perfil} alt="Foto de Perfil" />
        <h2 style={{ color: "white" }}>Jorge Lozano</h2>

        {language === 'ESP' ? (
          <>
            <a href="#home" className={styles.link} style={{ textDecoration: 'none' }}>
              <h4 style={{ color: 'white' }}>Inicio</h4>
            </a>
            <a href="#about" className={styles.link} style={{ textDecoration: 'none' }}>
              <h4 style={{ color: "white" }}>Sobre mí</h4>
            </a>
            
            <h4 style={{ color: "white" }}>Preparación</h4>
            <h4 style={{ color: "white" }}>Proyecto</h4>
            <h4 style={{ color: "white" }}>Contacto</h4>
          </>
        ) : (
          <>
              <a href="#home" className={styles.link} style={{ textDecoration: 'none' }}>
                <h4 style={{ color: 'white' }}>Home</h4>
              </a>
            <a href="#about" className={styles.link} style={{ textDecoration: 'none' }}>
            <h4 style={{ color: "white" }}>About Me</h4>
            </a>
            
            <h4 style={{ color: "white" }}>Preparation</h4>
            <h4 style={{ color: "white" }}>Project</h4>
            <h4 style={{ color: "white" }}>Contact</h4>
          </>
        )}
      </div>
      <div className={styles.main}>
        <div id="home" className={styles.content}>
          {/* Contenido de la columna de 80% */}
          {/* Aquí puedes colocar el diseño que se expandirá hacia abajo */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={fullStack} alt="" style={{ marginTop: "40px", marginLeft: "40px", width: '70%', height: 'auto' }} />
          </div>

          <h2 id="about" style={{ marginTop: "90px" }}>{language === 'ESP' ? "Sobre mí" : "About Me"}</h2>
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
    <h5>Introducción a la programación</h5>
    <p>
      <code className={styles.code}>
        &lt;<span className={styles.azul}>Gobstone</span>/&gt; &lt;<span className={styles.verde}>JavaScript</span>/&gt; &lt;<span className={styles.rojo}>Ruby</span>/&gt;
      </code>
    </p>
    <img src={arg40} alt="Argentina Programa 4.0" style={{marginLeft: '28px'}}/>
    <p className={styles.paragraph}>
      <code style={{ color: '#aa9949' }} className={styles.code}>
        {`<p style={{color: '#aa9949'}}>El curso impartido por INTI en el marco de Argentina Programa 4.0 sirve para aprender los conceptos básicos de lógica y resolución de problemas.</p>`}
      </code>
    </p>                  
  </div>
  <div className={styles.column}>
    {/* Contenido de la segunda columna */}
    <h4>Codo a Codo</h4>
    <h5>Pruebas de preguntas y respuestas (Q/A)</h5>
    <p>
      <code className={styles.code}>
        &lt;<span className={styles.azul}>SpiraPlan</span>/&gt; &lt;<span className={styles.verde}>Test</span>/&gt; &lt;<span className={styles.rojo}>Quality</span>/&gt;
      </code>
    </p>
    <img src={codo} alt="Codo a Codo" style={{ marginLeft:'20px'}} />
    <p className={styles.paragraph}>
      <code style={{ color: '#aa9949' }} className={styles.code}>
        {`<p style={{color: '#aa9949'}}>Dictado de clases intermedias del programa Codo a Codo promovido por el gobierno de la ciudad de Buenos Aires, donde aprendí los conceptos relacionados con las pruebas de software y la calidad. El curso estaba más orientado a las pruebas manuales, pero también se pudieron ver algunas herramientas para automatizar las pruebas.</p>`}
      </code>
    </p>
  </div>
  <div className={styles.column}>
    {/* Contenido de la tercera columna */}
    <h4>Soy Henry</h4>
    <h5>Desarrollador web Full Stack</h5>
    <p>
      <code className={styles.code}>
        &lt;<span className={styles.azul}>React</span>/&gt; &lt;<span className={styles.verde}>JavaScript</span>/&gt; &lt;<span className={styles.rojo}>Postgres</span>/&gt;
      </code>
    </p>
    <img src={henry} alt="Soy Henry" style={{ marginLeft:'20px'}} />
    <p className={styles.paragraph}>
      <code style={{ color: '#aa9949' }} className={styles.code}>
        {`<p style={{color: '#aa9949'}}>El secreto del éxito, un antes y un después en mi desarrollo como profesional. Un bootcamp que potencia al máximo la capacidad de uno. Intensidad total durante todo el curso para alcanzar el objetivo: Desarrollador FullStack.</p>`}
      </code>
    </p>
  </div>
</div>
<br />
<div className={styles.columnContainer}>
  <div className={styles.column}>
    {/* Contenido de la primera columna */}
    <h4>TecLab</h4>
    <h5>Técnico Superior en Seguros</h5>
    <p>
      <code className={styles.code}>
        &lt;<span className={styles.azul}>Patrimonial</span>/&gt; &lt;<span className={styles.verde}>Vida</span>/&gt; &lt;<span className={styles.rojo}>Jubilación</span>/&gt;
      </code>
    </p>
    <img src={teclab} alt="TecLab" style={{ marginLeft:'20px'}} />
    <p className={styles.paragraph}>
      <code style={{ color: '#aa9949' }} className={styles.code}>
        {`<p style={{color: '#aa9949'}}>En TecLab me gradué como técnico superior en seguros, una profesión que desarrollo en paralelo a la programación. Trabajo principalmente con seguros patrimoniales.</p>`}
      </code>
    </p>
  </div>
  <div className={styles.column}>
    {/* Contenido de la segunda columna */}
    <h4>UTN Regional La Plata</h4>
    <h5>Análisis de Sistemas</h5>
    <p>
      <code className={styles.code}>
        &lt;<span className={styles.azul}>Patrimonial</span>/&gt; &lt;<span className={styles.verde}>Vida</span>/&gt; &lt;<span className={styles.rojo}>Jubilación</span>/&gt;
      </code>
    </p>
    <img src={utn} alt="UTN Regional La Plata" style={{ marginTop: "15px", marginLeft:'20px'}} />
    <p className={styles.paragraph}>
      <code style={{ color: '#aa9949' }} className={styles.code}>
        {`<p style={{color: '#aa9949'}}>Carrera que no pude completar, quedando en un 90%, por diferentes motivos no pude continuar. Comencé el curso en 1995.</p>`}
      </code>
    </p>
  </div>
  <div className={styles.column}>
    {/* Contenido de la tercera columna */}
    <h4>ENET N°1 "V. Pereda"</h4>
    <h5>Técnico Nacional en Computación</h5>
    <p>
      <code className={styles.code}>
        &lt;<span className={styles.azul}>Patrimonial</span>/&gt; &lt;<span className={styles.verde}>Vida</span>/&gt; &lt;<span className={styles.rojo}>Jubilación</span>/&gt;
      </code>
    </p>
    <img src={enet} alt="ENET N°1 'V. Pereda'" style={{ marginLeft:'20px'}} />
    <p className={styles.paragraph}>
      <code style={{ color: '#aa9949' }} className={styles.code}>
        {`<p style={{color: '#aa9949'}}>La escuela secundaria donde comencé a dar los primeros pasos en programación a través de algoritmos y estructuras de datos. Basic, Pascal, Cobol, Fox, Cliper y Vb6 eran las tecnologías manejadas en ese momento con access como base de datos</p>`}
      </code>
    </p>
  </div>
</div>
{/* Habilidades técnicas */}

<div className={styles.skills}>
  <h3 style={{ marginTop: '45px'}}>Habilidades Técnicas</h3>
</div>
<div className={styles.columnContainer}>
  <div className={styles.columnTech}>
    {/* Contenido de la primera columna */}
    <h3 style={{ marginTop: '-5px'}}>Front-End</h3>
    <h4 style={{ marginTop: '-5px'}}>React</h4>
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ marginTop: '-20px', width: '80%', backgroundColor: '#198754' }}></div>
    </div>
    <h4 style={{ marginTop: '5px'}}>JavaScript</h4>
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ marginTop: '-20px', width: '80%', backgroundColor: '#198754' }}></div>
    </div>
    <h4 style={{ marginTop: '5px'}}>HTML</h4>
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ marginTop: '-20px', width: '50%', backgroundColor: '#198754' }}></div>
    </div>
    <h4 style={{ marginTop: '5px'}}>CSS</h4>
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ marginTop: '-20px', width: '50%', backgroundColor: '#198754' }}></div>
    </div>
  </div>
  <div className={styles.columnTech}>
    {/* Contenido de la segunda columna */}
    <h3 style={{ marginTop: '-5px'}}>Back-End</h3>
    <h4 style={{ marginTop: '-5px'}}>Postgres</h4>
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ marginTop: '-20px', width: '75%', backgroundColor: '#ffc107' }}></div>
    </div>
    <h4 style={{ marginTop: '5px'}}>Node.js</h4>
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ marginTop: '-20px', width: '80%', backgroundColor: '#ffc107' }}></div>
    </div>
    <h4 style={{ marginTop: '5px'}}>Express</h4>
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ marginTop: '-20px', width: '70%', backgroundColor: '#ffc107' }}></div>
    </div>
  </div>
  <div className={styles.columnTech}>
    {/* Contenido de la primera columna */}
    <h3 style={{ marginTop: '-5px'}}>Soft-Skills</h3>
    <h4 style={{ marginTop: '-5px'}}>Comunicativo</h4>
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ marginTop: '-20px', width: '90%', backgroundColor: '#0dcaf0' }}></div>
    </div>
    <h4 style={{ marginTop: '5px'}}>Colaborativo</h4>
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ marginTop: '-20px', width: '90%', backgroundColor: '#0dcaf0' }}></div>
    </div>
    <h4 style={{ marginTop: '5px'}}>Resolutivo</h4>
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ marginTop: '-20px', width: '80%', backgroundColor: '#0dcaf0' }}></div>
    </div>
  </div>
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
                    <h4>Argentina Programa 4.0</h4>
                    <h5>Introduction to programming</h5>
                      <p>
                        <code className={styles.code}>
                          &lt;<span className={styles.azul}>Gobstone</span>/&gt; &lt;<span className={styles.verde}>JavaScript</span>/&gt; &lt;<span className={styles.rojo}>Ruby</span>/&gt;
                        </code>
                      </p>
                      <img src={arg40} alt="Argentina Programa 4.0" style={{marginLeft: '28px'}}/>
                      <p className={styles.paragraph}>
                        <code style={{ color: '#aa9949' }} className={styles.code}>
                          {`<p style={{color: '#aa9949'}}>The course taught by INTI within the framework 
                          of Argentina Program 4.0, serves to learn the basic concepts of logic and problem 
                          solving.</p>`}
                        </code>
                      </p>                  
                  </div>
                  <div className={styles.column}>
                    {/* Contenido de la segunda columna */}
                    <h4>Codo a Codo</h4>
                    <h5>Q/A Testing</h5>
                    <p>
                        <code className={styles.code}>
                          &lt;<span className={styles.azul}>SpiraPlan</span>/&gt; &lt;<span className={styles.verde}>Test</span>/&gt; &lt;<span className={styles.rojo}>Quality</span>/&gt;
                        </code>
                      </p>
                    <img src={codo} alt="Codo a Codo" style={{ marginLeft:'20px'}} />
                      <p className={styles.paragraph}>
                        <code style={{ color: '#aa9949' }} className={styles.code}>
                          {`<p style={{color: '#aa9949'}}>Dictation of middle classes of the side by
                          side program promoted by the government of the city of Buenos Aires, where I
                          learned the concepts related to software testing and quality. The course was
                          more oriented to manual testing, but it was possible to see some tools to
                          automate tests.</p>`}
                        </code>
                      </p>
                  </div>
                  <div className={styles.column}>
                    {/* Contenido de la tercera columna */}
                    <h4>soy Henry</h4>
                    <h5>Full Stack Web Developer</h5>
                    <p>
                        <code className={styles.code}>
                          &lt;<span className={styles.azul}>React</span>/&gt; &lt;<span className={styles.verde}>JavaScript</span>/&gt; &lt;<span className={styles.rojo}>Postgres</span>/&gt;
                        </code>
                      </p>
                    <img src={henry} alt="soy Henry" style={{ marginLeft:'20px'}} />
                    <p className={styles.paragraph}>
                        <code style={{ color: '#aa9949' }} className={styles.code}>
                          {`<p style={{color: '#aa9949'}}>The secret of success, a before and after in my 
                          development as a professional. A bootcamp that enhances one's capacity to its 
                          maximum expression. Full intensity throughout the course to reach the goal, 
                          FullStack Developer</p>`}
                        </code>
                      </p>
                  </div>
                </div>
                <br />
                <div className={styles.columnContainer}>
                  <div className={styles.column}>
                    {/* Contenido de la primera columna */}
                    <h4>TecLab</h4>
                    <h5>Higher Technician in Insurance</h5>
                    <p>
                        <code className={styles.code}>
                          &lt;<span className={styles.azul}>Patrimonial</span>/&gt; &lt;<span className={styles.verde}>Life</span>/&gt; &lt;<span className={styles.rojo}>Retirement</span>/&gt;
                        </code>
                      </p>
                    <img src={teclab} alt="soy Henry" style={{ marginLeft:'20px'}} />
                    <p className={styles.paragraph}>
                        <code style={{ color: '#aa9949' }} className={styles.code}>
                          {`<p style={{color: '#aa9949'}}>At TecLab I graduated as a senior insurance
                           technician, a profession that I develop in parallel to programming. I work 
                           with property insurance to a greater extent.</p>`}
                        </code>
                      </p>
                  </div>
                  <div className={styles.column}>
                    {/* Contenido de la segunda columna */}
                    <h4>UTN Regional La Plata</h4>
                    <h5>Systems Analyst</h5>
                    <p>
                        <code className={styles.code}>
                          &lt;<span className={styles.azul}>Patrimonial</span>/&gt; &lt;<span className={styles.verde}>Life</span>/&gt; &lt;<span className={styles.rojo}>Retirement</span>/&gt;
                        </code>
                      </p>
                    <img src={utn} alt="UTN Regional La Plata" style={{ marginTop: "15px", marginLeft:'20px'}} />
                    <p className={styles.paragraph}>
                        <code style={{ color: '#aa9949' }} className={styles.code}>
                          {`<p style={{color: '#aa9949'}}>Race that I could not complete, 
                          remaining at 90%, for different reasons I could not continue. I 
                          started the course in 1995.</p>`}
                        </code>
                      </p>
                  </div>
                  <div className={styles.column}>
                    {/* Contenido de la tercera columna */}
                    <h4>ENET N°1 "V. Pereda"</h4>
                    <h5>National Computer Technician</h5>
                    <p>
                        <code className={styles.code}>
                          &lt;<span className={styles.azul}>Patrimonial</span>/&gt; &lt;<span className={styles.verde}>Life</span>/&gt; &lt;<span className={styles.rojo}>Retirement</span>/&gt;
                        </code>
                      </p>
                    <img src={enet} alt="soy Henry" style={{ marginLeft:'20px'}} />
                    <p className={styles.paragraph}>
                        <code style={{ color: '#aa9949' }} className={styles.code}>
                          {`<p style={{color: '#aa9949'}}>The secondary school where I began to go
                           through the first steps of programming through algorithms and data 
                           structures. Basic, Pascal, Cobol, Fox, Cliper and Vb6 the technologies 
                           managed at that time with access as a database</p>`}
                        </code>
                      </p>
                  </div>
                </div>

                {/* Habilidades técnicas */}
                <div className={styles.skills}>
                  <h3 style={{ marginTop: '45px'}}>Technical Skills</h3>
                  
                </div>
             
                <div className={styles.columnContainer}>
                  <div className={styles.columnTech}>
                    {/* Contenido de la primera columna */}
                    <h3 style={{ marginTop: '-5px'}}>Front-End</h3>
                      <h4 style={{ marginTop: '-5px'}}>React</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-20px', width: '80%', backgroundColor: '#198754' }}></div>
                      <h4 style={{ marginTop: '5px'}}>JavaScript</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-20px', width: '80%', backgroundColor: '#198754' }}></div>
                      </div>
                      <h4 style={{ marginTop: '5px'}}>HTML</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-20px', width: '50%', backgroundColor: '#198754' }}></div>
                      </div>
                      <h4 style={{ marginTop: '5px'}}>CSS</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-20px', width: '50%', backgroundColor: '#198754' }}></div>
                      </div>
                  </div>
                  
                  </div>

                  <div className={styles.columnTech}>
                    {/* Contenido de la segunda columna */}
                    <h3 style={{ marginTop: '-5px'}}>Back-End</h3>
                      <h4 style={{ marginTop: '-5px'}}>Postgres</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-20px', width: '75%', backgroundColor: '#ffc107' }}></div>
                      <h4 style={{ marginTop: '5px'}}>Node.js</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-20px', width: '80%', backgroundColor: '#ffc107' }}></div>
                      </div>
                      <h4 style={{ marginTop: '5px'}}>Express</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-20px', width: '70%', backgroundColor: '#ffc107' }}></div>
                      </div>

                  </div>
                  
                  </div>

                  <div className={styles.columnTech}>
                    {/* Contenido de la primera columna */}
                    <h3 style={{ marginTop: '-5px'}}>Soft-Skills</h3>
                      <h4 style={{ marginTop: '-5px'}}>Communicative</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-20px', width: '90%', backgroundColor: '#0dcaf0' }}></div>
                      <h4 style={{ marginTop: '5px'}}>Collaborative</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-20px', width: '90%', backgroundColor: '#0dcaf0' }}></div>
                      </div>
                      <h4 style={{ marginTop: '5px'}}>Empathic</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-20px', width: '90%', backgroundColor: '#0dcaf0' }}></div>
                      </div>
                      <h4 style={{ marginTop: '5px'}}>Autodidact</h4>
                        <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ marginTop: '-20px', width: '90%', backgroundColor: '#0dcaf0' }}></div>
                      </div>
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

