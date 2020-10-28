import React, { Component } from 'react'
import './css/cv.css'
import './trad'
import uk from './img/uk.svg'
import fr from './img/france.svg'

class JeuCv extends Component {
  sayHello = () => {
    alert('hello')
  }
  render() {
    const text = 'say Hello',
      metier = 'IBM NODEJS DEVELOPER'
    return (
      <section id="CV">
        <button onClick={this.sayHello}>{text}</button>
        <div id="metier" onClick={this.varsStart}>
          <h2>{metier}</h2>
        </div>
        <p className="flags">
          <img id="english" src={uk} alt="English" height="30" />
          <img id="french" src={fr} alt="Français" height="30" />
        </p>
        <div className="competen" id="competen">
          <h2 className="french">Competences</h2>
          <h2 className="english">Skills</h2>
          <h2 className="spanish">Competencias</h2>
          <div className="informatiquesCont french english spanish">
            <h3>Front End</h3>
            <div className="informatiques" id="informatique">
              <div className="infoJeu">SQL</div>
              <div className="infoJeu">RPGLE</div>
              <div className="infoJeu">CLP</div>
              <div className="infoJeu">ES6</div>
              <div className="infoJeu">HTML5</div>
              <div className="infoJeu">jade/PUG</div>
              <div className="infoJeu">JQUERY</div>
              <div className="infoJeu">SCSS</div>
              <div className="infoJeu">DOM</div>
              <div className="infoJeu">REACTJS</div>
            </div>
            <h3>Back End</h3>
            <div className="informatiques" id="informatique">
              <div className="infoJeu">IBM i</div>
              <div className="infoJeu">IBM db2</div>
              <div className="infoJeu">NodeJS</div>
              <div className="infoJeu">ExpressJS</div>
              <div className="infoJeu">Ajax</div>
            </div>
            <h3>Tools</h3>
            <div className="informatiquesLast" id="informatique">
              <div className="infoJeu">Git</div>
              <div className="infoJeu">IBM RDi</div>
              <div className="infoJeu">ARCAD for IBM i</div>
              <div className="infoJeu">bsh/zsh</div>
              <div className="infoJeu">LINUX</div>
              <div className="infoJeu">osX</div>
              <div className="infoJeu">Photoshop</div>
              <div className="infoJeu">Windows</div>
            </div>
          </div>
          <div className="btp french english spanish" id="btp">
            <h3 className="french">Techniques Design</h3>
            <h3 className="english">Technics Design</h3>
            <h3 className="spanish">Técnicas diseño</h3>
            <div className="info french">
              Réaliser l'étude technique d'un projet
              de construction et en estimer le co&ucirc;t
          </div>
            <div className="info english">
              Conduct the technical study of a construction project and estimate
              the cost
          </div>
            <div className="info spanish">
              Estudio técnico de un proyecto de construcción y estimación del
              costo
          </div>
            <div className="info french">
              Réaliser la représentation graphique d'une
              construction ou de design intérieur (Autocad, ArchiCAD,
              VectorWorks, Artlantis)
          </div>
            <div className="info english">
              Realize the graphic representation of a construction or interior
              design (Autocad, ArchiCAD, VectorWorks, Artlantis)
          </div>
            <div className="info spanish">
              Realización de representaciónes gráficas de construcción y de
              diseño interiores (Autocad, ArchiCAD, VectorWorks, Artlantis)
          </div>
            <div className="infolast french">
              Réaliser un dossier de détails
              d'exécutions de projet (Autocad, VectorWorks)
          </div>
            <div className="infolast english">
              Make a project execution details folder (Autocad, VectorWorks)
          </div>
            <div className="infolast spanish">
              Creación de carpetas de detalles de ejecución de proyectos
              (Autocad, VectorWorks)
          </div>
          </div>
          <div className="commerciales french english spanish" id="commerciales">
            <h3>H to H</h3>
            <div className="info french">
              Assistant régie au Palais des Festivals de Cannes en
              productions télévisuelles
          </div>
            <div className="info english">
              Show management at Palais des Festivals in Cannes and in
              television productions company
          </div>
            <div className="info spanish">
              Asistente de dirección en el Palais des Festivals de Cannes y en
              oficina de producciones televisivas
          </div>
            <div className="info french">
              Mener un entretien de négociations de produits ou de
              services
          </div>
            <div className="info english">
              Commercial negotiation of products or services
          </div>
            <div className="info spanish">Negociación de productos o servicios</div>
            <div className="infolast french">
              Accueil, service et conseil commercial
          </div>
            <div className="infolast english">
              Front-desk and commercial advicement
          </div>
            <div className="infolast spanish">
              Recepción, servicio y asesoramiento comercial
          </div>
          </div>
        </div>
        <div className="competen" id="experiences">
          <h2 className="french">Experiences</h2>
          <h2 className="english">Experiences</h2>
          <h2 className="spanish">Experiencia profesional</h2>
          <div className="jobs">
            <h3 className="french">Developpeur logiciel IBM i</h3>
            <h3 className="english">IBM i developer</h3>
            <div className="infojob french">
              Développement sur IBM i (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad,
              Rdi)
          </div>
            <div className="infojob english">
              IBM i Developer (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad, Rdi)
          </div>
            <div className="infojob spanish">
              IBM i Developer (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad, Rdi)
          </div>
            <div className="lieu">
              04/08/2019 => 17/07/2020: Pro A Pro, Montauban
          </div>
          </div>
          <div className="jobs">
            <h3 className="french">Ingenieur etude et developpement IBM i</h3>
            <h3 className="english">IBM i software engineer</h3>
            <div className="infojob french">
              Développement sur IBM i (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad,
              Rdi)
          </div>
            <div className="infojob english">
              IBM i Developer (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad, Rdi)
          </div>
            <div className="infojob spanish">
              IBM i Developer (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad, Rdi)
          </div>
            <div className="lieu">04/02/2019 => 04/08/2019: OCSI, Paris I</div>
          </div>
          <div className="jobs">
            <h3>Webmaster</h3>
            <div className="infojob french">
              Mise &agrave; jour de la base de données site Ecommerce
              (magento)
          </div>
            <div className="infojob english">
              Update of the Ecommerce website database (magento)
          </div>
            <div className="infojob spanish">
              Actualización de la base de datos del sitio snow-concept.com
              (magento)
          </div>
            <div className="lieu">
              06/12/2016 => 16/01/2017: www.snow-concept.com, l'Alpe d'Huez
          </div>
          </div>
          <div className="jobs">
            <h3 className="french">Technicien audio-visuel</h3>
            <div className="infojob french">
              JLA productions, Auteurs Associés, EuropaCorp
          </div>
            <h3 className="english">Audio-visual technician</h3>
            <div className="infojob english">
              JLA productions, Auteurs Associés, EuropaCorp
          </div>
            <h3 className="spanish">Técnico audiovisual</h3>
            <div className="infojob spanish">
              gerente de apoyos: JLA productions, Martigues
          </div>
            <div className="infojob spanish">
              Subgerente: Auteurs Associés, Grasse
          </div>
            <div className="infojob spanish">
              Refuerzo de decoración y figuración: Gazelle Cie, DEMD,
              Europacorp, Marseille
          </div>
            <div className="lieu">2013 => 2015</div>
          </div>
          <div className="jobs">
            <h3 className="french">Dessinateur Projeteur HVAC</h3>
            <div className="infojob french">
              Etude des projets de construction ERP &quot;Castorama&quot;
              Toulouse Union et Antibes
          </div>
            <h3 className="english">HVAC designer</h3>
            <div className="infojob english">
              Castorama Toulouse and Antibes building materials store
              construction
          </div>
            <h3 className="spanish">Diseñador de HVAC</h3>
            <div className="infojob spanish">
              Estudio de proyectos de construcción de tiendas "Castorama"
              Toulouse Union y Antibes, ingeniería AUXITEC, Hyères
          </div>
            <div className="lieu english">
              09/2012 => 12/2012: AUXITEC engineering, Hyères
          </div>
            <div className="lieu french">
              09/2012 => 12/2012: AUXITEC ingénierie, Hy&egrave;res
          </div>
          </div>
          <div className="jobs">
            <h3 className="french">Developpeur web</h3>
            <div className="infojob french">
              Introduction &agrave; JavaScript (JQuery)
          </div>
            <h3 className="english">web Developer</h3>
            <div className="infojob english">
              Introduction to JavaScript (JQuery)
          </div>
            <h3 className="spanish">Desarrollador web</h3>
            <div className="infojob spanish">
              introducción a JavaScript (JQuery)
          </div>
            <div className="lieu">
              03/2012 => 06/2012: Alphabet Stand Service, La Garde
          </div>
          </div>
          <div className="jobs">
            <h3 className="french">Technicien etudes en Design et Decoration</h3>
            <div className="infojob french">
              Alphabet Stand Service (MIPCOM/MIPTV, MIDEM, FIF, MIPIM &mldr;)
          </div>
            <h3 className="english">Design and Decoration Technician</h3>
            <div className="infojob english">
              Alphabet Stand Service (MIPCOM/MIPTV, MIDEM, FIF, MIPIM &mldr;)
          </div>
            <h3 className="spanish">Técnico de Diseño y Decoración</h3>
            <div className="infojob spanish">
              Alphabet Stand Service (MIPCOM/MIPTV, MIDEM, FIF, MIPIM &mldr;)
          </div>
            <div className="lieu">09/2010 => 06/2012: La Garde</div>
          </div>
          <div className="jobs">
            <h3 className="french">Vendeur et Technicien Ski</h3>
            <div className="infojob french">Nevada Sports</div>
            <h3 className="english">Ski Technician</h3>
            <div className="infojob english">Nevada Sports</div>
            <h3 className="spanish">Vendedor de esquí y de material deportivo</h3>
            <div className="infojob spanish">Nevada Sports</div>
            <div className="lieu">
              12/2008 => 04/2009: l'Alpe d'Huez
          </div>
          </div>
          <div className="jobs">
            <h3 className="french">Technicien ADSL</h3>
            <div className="infojob french">British Telecom Critical Systems</div>
            <h3 className="english">ADSL Technician</h3>
            <div className="infojob english">British Telecom Critical Systems</div>
            <h3 className="spanish">Técnico de ADSL</h3>
            <div className="infojob spanish">British Telecom Critical Systems</div>
            <div className="lieu">07/2008 => 12/2008: Le Plessis-Robinson</div>
          </div>
          <div className="jobs">
            <h3 className="french">Technicien Ski et Snowboard</h3>
            <div className="infojob french">Intersport</div>
            <h3 className="english">Ski and Snowboard Technician</h3>
            <div className="infojob english">Intersport</div>
            <h3 className="spanish">Técnico de esquí y snowboard</h3>
            <div className="infojob spanish">Intersport</div>
            <div className="lieu">
              12/2007 => 04/2008: l'Alpe d'Huez
          </div>
          </div>
          <div className="jobs">
            <h3 className="french">Administrateur systemes et reseaux</h3>
            <h3 className="english">Systems and Network Administrator</h3>
            <h3 className="spanish">Administrador de Sistemas y Redes</h3>
            <div className="infojob french">
              Administration serveurs Windows, clients LINUX, developpement html
              php
          </div>
            <div className="infojob english">
              Windows server administration, LINUX clients, html php development
          </div>
            <div className="infojob spanish">
              Administración de servidores y clientes LINUX Mantenimiento e
              instalación de sistemas infojobrmáticos, desarollamiento html php
              (script de copia de seguridad)
          </div>
            <div className="lieu">
              09/2005 => 06/2007: SECOB, St Jean-de-la-Ruelle
          </div>
          </div>
          <div className="jobs">
            <h3 className="french">Technicien Systemes et Reseaux</h3>
            <h3 className="english">Systems and Network Technician</h3>
            <h3 className="spanish">Técnico de Sistemas y Redes</h3>
            <div className="infojob french">
              Maintenance et installation systemes informatique Developpement
              html php d&apos;un site de devis securisé
          </div>
            <div className="infojob english">
              System and network Deployment and php dev
          </div>
            <div className="infojob spanish">
              Mantenimiento e instalación de sistemas infojobrmáticos PHP html
              desarrollo de un sitio de cotizaciones seguras
          </div>
            <div className="lieu">03/2005 => 06/2005: Emergence, Orléans</div>
          </div>
          <div className="jobs">
            <h3 className="french">Adjoint au responsable de magasin</h3>
            <h3 className="english">Assistant to the store manager</h3>
            <h3 className="spanish">Asistente del gerente de la tienda</h3>
            <div className="infojob french">Micromania</div>
            <div className="infojob english">Micromania</div>
            <div className="infojob spanish">Micromania</div>
            <div className="lieu">06/2003 => 02/2004: St Jean de la Ruelle</div>
          </div>
          <div className="jobs">
            <h3 className="french">Emplois etudiant</h3>
            <div className="infojob french">
              Conseiller de vente en espace culturel Leclerc, serveur/barman,
              Ouvrier boulanger, Employé polyvalent chez
              Intermarché
          </div>
            <h3 className="english">Student jobs</h3>
            <div className="infojob english">
              Seller in espace culturel Leclerc, waiter / bartender, Bakery
              worker, multi-purpose employee at grocery store
          </div>
            <h3 className="spanish">Trabajos de estudiante</h3>
            <div className="infojob spanish">
              Asesor de ventas culturales Leclerc, camarero / camarero,
              trabajador de panadería, empleado multipropósito en Intermarché
          </div>
          </div>
        </div>
        <div className="competen" id="formation">
          <h2 className="french">Formation</h2>
          <h2 className="english">Training</h2>
          <h2 className="spanish">Formación</h2>
          <div className="jobs">
            <h3>Pepiniere IBM</h3>
            <div className="infojob french">
              IBM RPG II, RPGLE, SQL, CLP
          </div>
            <div className="infojob english">
              IBM RPG II, RPGLE, SQL, CLP
          </div>
            <div className="infojob spanish">RPG II, RPGLE, SQL, CLP</div>
            <div className="infojob french">RDi, SQL for IBM db2, DDS/DDL</div>
            <div className="infojob english">RDi, SQL for IBM db2, DDS/DDL</div>
            <div className="infojob spanish">RDi, SQL for IBM db2, DDS/DDL</div>
            <div className="infojob french">
              Webservices and PHP for IBM i series
          </div>
            <div className="infojob english">
              Webservices and PHP for IBM i series
          </div>
            <div className="infojob spanish">
              Webservices and PHP for IBM i series
          </div>
            <div className="lieu">2018 OCSI Paris I</div>
          </div>
          <div className="jobs">
            <h3 className="french">Developpeur JavaScript FullStack</h3>
            <h3 className="english">FullStack Javascript Developer</h3>
            <h3 className="spanish">Desarollador Javascript de pila completa</h3>
            <div className="infojob french">
              Développement et management d&apos;un projet web
          </div>
            <div className="infojob english">
              Development and management of a web project
          </div>
            <div className="infojob spanish">
              Desarolla y gestión de un proyecto web
          </div>
            <div className="infojob french">
              Création de sites web statiques riche front-end JS
          </div>
            <div className="infojob english">
              Creating Static Rich Front-end JS Websites
          </div>
            <div className="infojob spanish">
              Creación de sitios web estáticos de front-end JS estáticos
          </div>
            <div className="infojob french">
              Création d&apos;applications web et mobiles riche backend
              JS
          </div>
            <div className="infojob english">
              Creating rich web and mobile applications backend JS
          </div>
            <div className="infojob spanish">
              Creación de aplicaciones web y móviles ricas en el back-end de JS
          </div>
            <div className="lieu">2017 IFOCOP Paris XI</div>
          </div>
          <div className="jobs">
            <h3 className="french">TP de technicien etude en batiment option dessin</h3>
            <h3 className="english">Construction Engineer Assistant</h3>
            <h3 className="spanish">Técnico de Ingeniería de Construcción</h3>
            <div className="infojob">Photoshop, Autocad, Archicad, Artlantis</div>
            <div className="infojob french">
              Design, techniques et normes de construction
          </div>
            <div className="infojob english">
              Design, techniques and construction standards
          </div>
            <div className="infojob spanish">
              Diseño, técnicas y estándares de construcción
          </div>
            <div className="infojob french">
              Notions d&apos;urbanisme et de voirie
          </div>
            <div className="infojob english">
              Notions of town planning and roads
          </div>
            <div className="infojob spanish">
              Nociones de urbanismo y carreteras
          </div>
            <div className="lieu">2009 AFPA La Valette-du-var</div>
          </div>
          <div className="jobs">
            <h3>DUT informatique genie logiciel</h3>
            <div className="infojob french">
              Administration et
              déploiementent réseau en
              environnement Linux, cli, regexp
            <br />
            Base de Données: Analyse (merise), conception (MCD, MCT),
            maintenance
            <br />
            Programmation C, C++, SQL, shell script
          </div>
            <div className="infojob english">
              Systems and Networks: Linux
              environment, CLI, regexp
            <br />
            Database: Analysis, design, SQL
            <br />
            Programming: C, C++, shell script
          </div>
            <div className="infojob spanish">
              Sistemas y Redes: Red de administración e implementación de
              sistemas en entorno Linux, nociones de ensamblador regexp
              Base de Datos: Análisis (merise), diseño (MCD, MCT), mantenimiento
              Programación: Langage C, C++, SQL, bsh, assembly language
          </div>
            <div className="lieu">2003 IUT d'Orléans</div>
          </div>
          <div className="jobs">
            <h3 className="french">Baccalaureat Scientifique</h3>
            <h3 className="english">Scientific Baccalaureate Diploma</h3>
            <h3 className="spanish">Bachillerato Científico</h3>
            <div className="infojob french">
              Spécialité physique-chimie
          </div>
            <div className="infojob english">Specialty physics-chemistry</div>
            <div className="infojob spanish">Especialidad física-química</div>
            <div className="lieu">2001 Orléans</div>
          </div>
        </div>
        <div className="competen" id="complementaire">
          <div className="infojob french">Permis : auto, moto, monoroue electrique.
          <br />
          Sports: gym, sports de glisse, jonglage.
          <br />
          Hobbies: electronique, décoration, design, rénovation.
        </div>
          <div className="infojob english">
            Driving licences: car, motorcycle, electric unicycle.
          <br />
          Sports: gym, boardsports, juggling.
          <br />
          Hobbies: electronics, decoration, design, renovation.
        </div>
          <div className="infojob spanish">
            Permiso: auto, motocicleta.
            Deporte: gimnasio, deportes de tabla, ciclismo de montaña.
            Hobbies: electrónica, decoración, diseño, renovación.
        </div>
        </div>
      </section>
    )
  }
}
export default JeuCv