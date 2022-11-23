import React from 'react'
import '../styles/Home.scss';
import flèche_down_header from '../assets/logos/Logo/flèche_down_header.png';
import Bathome2 from '../assets/Illustrations/Bathome2.png';
import Bathome3 from '../assets/Illustrations/Bathome3.png';
import Bathome4 from '../assets/Illustrations/Bathome4.png';
import Bathome5 from '../assets/Illustrations/Bathome5.png';
import Bathome6 from '../assets/Illustrations/Bathome6.png';
import Bathome7 from '../assets/Illustrations/Bathome7.png';
import Bathome8 from '../assets/Illustrations/Bathome8.png';
import Bathome9 from '../assets/Illustrations/Bathome9.png';
import Bathome10 from '../assets/Illustrations/Bathome10.png';
import Bathome11 from '../assets/Illustrations/Bathome11.png';
import Bathome12 from '../assets/Illustrations/Bathome12.png';
import Bathome13 from '../assets/Illustrations/Bathome13.png';
import Bathome_ba1 from '../assets/Illustrations/Bathome_ba1.png';
import Bathome_ba2 from '../assets/Illustrations/Bathome_ba2.png';
import Polygon from '../assets/logos/Logo/icon_flèche_1.png';
import Polygon1 from '../assets/logos/Logo/icon_flèche_2.png';
import guillemets1 from '../assets/logos/Logo/icon_guillemets_1.png';
import guillemets2 from '../assets/logos/Logo/icon_guillemets_2.png';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <main>
    

    {/* Header en tete  */}

    <section id="hero">
        <div class="container">
          <div class="content">
            <p>
              Au nom de ses parents assassinés, Bruce Wayne mène une guerre
              éternelle contre les criminels de Gotham City. Il est vengeur. Il
              est la nuit.
            </p>
            <h2 class="titre">Il est Batman.</h2>
            <div>
             
              <a class="btn" href="#batman-cinema">VOIR LES HEROS</a>
              <a class="btn" href="#batman-nemesis">LES ADVERSAIRES</a>
            </div>
          </div>
          <img
            class="fleche"
            src={flèche_down_header}
            alt=""
          />
        </div>
      </section>

   {/* Batman au cinéma */}

   <section id="batman-cinema">
     <div className="container">
       <div className="head-personnage">
         <h1 className="titre">Batman au cinema</h1>
         <p className="description">
         Le personnage de Batman est un super héros de l’univers de DC
              Comics. Il a été créé par le dessinateur Bob Kane et le scénariste
              Bill Finger et apparaît pour la première fois dans le comic book
              Detective Comics en 1939. Batman se différencie de Superman, alors
              héros majeur de DC, car il n’a aucun pouvoir. Il sera porté au
              cinema pour la première fois en 1943 par Lewis Wilson et bénéficiera
              de nombreux reboot, donnant l’occasion à de multiples acteurs
              d’interpréter l’homme chauve-souris. Voici les trois derniers :
         </p>
       </div>
       <div className="batman-personnage">
         <div>
           <img src={Bathome2} alt="" />
            <div className="personnage-info">
             <h3 className="nom">Robert Pattinson</h3>
             <p className="annee">2022</p>
           </div> 
         </div>
         <div>
           <img height="494" width="304" src={Bathome3} alt="" />
            <div className="personnage-info">
             <h3 className="nom">Christian Bale</h3>
             <p className="annee">2006-2008-2012</p>
           </div> 
         </div>
         <div>
           <img height="494" width="304" src={Bathome4} alt="" />
            <div className="personnage-info">
             <h3 className="nom">Ben Affleck</h3>
             <p className="annee">2016-2017/2020-2023</p>
           </div> 
         </div>
       </div>
     </div>
   </section>
   <section id="batman-nemesis">
     <div className="container">
       <div className="head-personnage">
     
           <h1 className="titre">NÉMÉSIS</h1>
          
         <p className="description">
         Au nom de ses parents assassinés, Bruce Wayne mène une guerre
              éternelle contre les criminels de Gotham City. Il est vengeur. Il
              est la nuit. Il est Batman. Voir le héros LES ADVERSAIRES BATMAN AU
              CINÉMA Le personnage de Batman est un super héros de l’univers de DC
              Comics. Il a été créé par le dessinateur Bob Kane et le scénariste
              Bill Finger et apparaît pour la première fois dans le comic book
              Detective Comics en 1939. Batman se différencie de Superman, alors
              héros majeur de DC, car il n’a aucun pouvoir. Il sera porté au
              cinema pour la première fois en 1943 par Lewis Wilson et bénéficiera
              de nombreux reboot, donnant l’occasion à de multiples acteurs
              d’interpréter l’homme chauve-souris. Voici les trois derniers :
              Robert Pattinson Christian Bale Ben Affleck (2022) (2006 - 2008 -
              2012) 20016- 2017/2020 - 2023 NÉMÉSIS
         </p>
       </div>
       <div className="batman-personnage">
         <div>
           <img src={Bathome5} alt="" />
            <div className="personnage-info">
             <h3>The Riddler - Paul Dano</h3>
             <p>2022</p>
           </div> 
         </div>
         <div>
           <img src={Bathome6} alt="" />
            <div className="personnage-info">
             <h3>Le Joker - Heath Ledger</h3>
             <p>2008</p>
           </div> 
         </div>
         <div>
           <img src={Bathome7} alt="" />
            <div className="personnage-info">
             <h3>Darkseid - Ray Porter</h3>
             <p>2022</p>
           </div> 
         </div>
       </div>
     </div>
   </section>

    {/* Section allies */}

   <section id="batman-allies">
     <div className="container">
       <div className="head-personnage">
         <h1 className="titre">ALLIÉS</h1>
         <p className="description">
         Alfred est le majordome des Wayne. A leur mort il s’occupe de
              l’éducation du jeune Bruce avant de l’assister dans son rôle du
              Batman. Ce dernier rencontrera Catwoman dès le premier numéro des
              aventures de l’homme-chauve souris en 1940. Tantôt ennemie tantôt
              alliée la jeune femme fatale fera tourner la tête de Batman à
              maintes reprises. Du côté de la police, Bruce pourra compter sur
              l’aide infaillible de James Gordon, “Jim”, qui désire lui aussi
              nettoyer sa ville de la criminalité qui y règne.
         </p>
       </div>
       <div className="batman-personnage">
         <div>
           <img src={Bathome8} alt="" />
            <div className="personnage-info">
             <h3>Alfred Pennyworth - Michael Cain</h3>
             <p>2006 - 2008 - 2012</p>
           </div> 
         </div>
         <div>
           <img src={Bathome9} alt="" />
            <div className="personnage-info">
             <h3>Catwoman - Zoé Kravitz</h3>
             <p>2008</p>
           </div> 
         </div>
         <div>
           <img src={Bathome10} alt="" />
            <div className="personnage-info">
             <h3>James Gordon</h3>
             <p>2014-2019</p>
           </div> 
         </div>
       </div>
     </div>
   </section>

   {/* Section Justice League */}

   <section id="batman-justice-league">
     <div className="container">
       <div className="head-personnage">
         <h1 className="titre">JUSTICE LEAGUE</h1>
         <p className="description">
         Lorsque la Terre est menacée les plus grands super-héros s’allient
              pour la protéger. Ils doivent cependant apprendre à se faire
              confiance mutuellement et à faire équipe ce qui ne sera pas chose
              aisée. Ensemble ils forment la Justice League, les plus grands
              super- héros de la Terre, ceux vers qui le monde entier se tourne
              lorsque les menaces extraterrestres ou surnaturelles menacent son
              existence.
           
         </p>
       </div>
     </div>
     <img width="100%" src={Bathome11} alt="" />

     
   </section>

   {/* Multimedia */}

   <section id="multimedia">
     <div className="container">
     <h1 class="titre">MULTIMEDIA</h1>
       <button className="left">
         <img src={Polygon} alt="" />
       </button>
       <button className="right">
         <img src={Polygon1} alt="" />
       </button>
       <div className="slider-multimedia">
         <div className="slider-image">
           <img src={Bathome_ba1} alt="" />
         </div>
         <div className="slider-content">
           <h4>ACTION, ADVENTURE</h4>
           <span>Batman Begins</span><br />
           <span>IMDB:<span className="yellow">8.2</span></span>
           <p>
           Le jeune Bruce Wayne assiste impuissant au meurtre de ses parents.
                Profondément traumatisé, il grandit obnubilé par un désir de
                vengeance. La Ligue des ombres, une secte de guerriers ninja
                dirigée par Ra's al Ghul, se chargera de son entraînement. De
                retour chez lui à Gotham, avec l'aide de son majordome Alfred
                Pennyworth, Bruce Wayne se lance alors dans la lutte contre le
                crime sous le nom de Batman.
           </p>
         </div>
       </div>
       <div className="video">
         <NavLink
           href="https://www.youtube.com/watch?v=yP7J0rlFkrg "
           target="_blank"
           ><img
             className="my-5"
             width="100%"
             src={Bathome_ba2}
             alt=""
         /></NavLink>
       </div>
     </div>
   </section>

   {/* formulaire */}

   <section id="contact">
     <div className="form">
       <h2>PRENONS CONTACT</h2>
       <form action="" id="myform">
         <label className="title">ADRESSE EMAIL</label>
         <input
           type="email"
           name="email"
           id="email"
           placeholder="Adresse email"
         />
         <span id="invalid"></span>
         <label className="title">NEWSLETTER</label>
         <label className="form-check-label" for="check">
           En cochant cette case vous acceptez de recevoir l’actualité
           concernant les aventures de Batman :
         </label>
         <input
           type="checkbox"
           className="form-check-input"
           name="check"
           id="check"
           value="checkedValue"
         />
         <div className="menu">
           <div className="menu-btn">
              {/* <span
               >Choisissez la fréquence à laquelle vous souhaitez recevoir
               votre newsletter</span
             >
             <span className="icon"
               ><img src="./assets/Logos/icon_flèche_2.png" alt=""
             /></span>  */}
             <select id="dropdownlist" name="dropdownlist">
               <option selected="selected">
                 Choisissez la fréquence à laquelle vous souhaitez recevoir
                 votre newsletter
               </option>
               <option className="c-bg" value="Quotidiennement">
                 Quotidienne
               </option>
               <option className="c-bg" value="hebdomadaire">Hebdomadaire</option>
               <option className="c-bg" value="Mensuel">Tous les mois</option>
               <option className="c-bg" value="annuel">Tous les an</option>
             </select>
           </div>
           <br />
         </div>
         <div className="news">Souhaitez vous recevoir des news</div>
         <div className="btn-group">
           <input type="radio" name="choix" id="film" /><label
             className="btnform"
             for="film"
             >Des films</label
           >
           <input type="radio" name="choix" id="comics" /><label
             className="btnform"
             for="comics"
             >Des comics</label
           >
           <input type="radio" name="choix" id="tout" /><label
             className="btnform"
             for="tout"
             >De tout</label
           >
         </div>
         <span className="title">MESSAGE</span>
         <textarea
           rows="1"
           name="msg"
           id="msg"
           placeholder="Laissez un commentaire pour la communauté"
         ></textarea>
         <input  className="btn" type="submit" value="CONFIRMER" />
       </form>
     </div>
   </section>

   {/* Section pour les citations */}

   <section id="citations">
     <div className="container">
       <div className="guillemet-open">
         <img
           className="guillemet"
           src={guillemets1}
           alt=""
         />
       </div>
       <div>
         <div className="citation-carte">
           <div className="carte-texte">
           La seule façon raisonnable de vivre en ce bas monde, c'est en
                dehors des règles.
           </div>
           <div className="carte-auteur">
           The Dark Knight : Le Chevalier Noir
             <div className="sep"></div>
             Le Joker à Batman (2008)
           </div>
         </div>
       </div>
       <div className="guillemet-close">
         <img
           className="guillemet"
           src={guillemets2}
           alt=""
         />
       </div>
     </div>
   </section>

</main>
  )
}

export default Home