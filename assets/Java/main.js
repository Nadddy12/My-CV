export const buildMain = (body) => {
    
    const main = document.createElement("main");
    const contanier1 = document.createElement("div");
    const contanier2 = document.createElement("div");
    const contanier3 = document.createElement("div");
    const skillPhoto = document.createElement("img");
    const skillTitle = document.createElement("h1");
    const skills = document.createElement("p");
    const educPhoto = document.createElement("img");
    const educTitle = document.createElement("h1");
    const education = document.createElement("p");
    const profTitle = document.createElement("h1");
    const profile = document.createElement("p");
    const langTitle = document.createElement("h1");
    const langue = document.createElement("p");
    const liensTitle = document.createElement("h1");
    const liens = document.createElement("p");
    const diverTitle = document.createElement("h1");
    const divers = document.createElement("p");
    
    
    contanier1.setAttribute("class" , "contanier1");
    skillPhoto.setAttribute("src", "assets/skills-1.jpeg");
    skillPhoto.setAttribute("class" , "skillPhoto");
    skillTitle.setAttribute("class" , "skillTitle");
    skills.setAttribute("class" , "skills");
    contanier2.setAttribute("class" , "contanier2");
    educPhoto.setAttribute("src", "assets/cértification icon.jpg");
    educPhoto.setAttribute("class" , "educPhoto");
    educTitle.setAttribute("class" , "educTitle");
    education.setAttribute("class" , "education");
    contanier3.setAttribute("class" , "contanier3");
    profTitle.setAttribute("class" , "profTitle");
    profile.setAttribute("class" , "profile");
    langTitle.setAttribute("class" , "langTitle");
    langue.setAttribute("class" , "langue");
    liensTitle.setAttribute("class" , "liensTitle");
    liens.setAttribute("class" , "liens");
    diverTitle.setAttribute("class" , "diverTitle");
    divers.setAttribute("class" , "divers");
    
    
    skillTitle.innerHTML = "Compétence";
    skills.innerHTML = "<strong>Informatique :</strong> 5 ans comme vendeur des produits mobile/informatique de 2010-2015 en Syrie<br><span class =\"gray\">J'ai de connaissances en IT grâce à mon travail dans le domain d'informatique.</span> <br> <br> <strong>Restaurants :</strong> 3 ans comme serveur en France et Syrie et 1 ans comme responsable de salle en Syrie<br><span class =\"gray\"> 1 ans de mes 4 ans dans cette secteur passer dans un bar</span> <br> <br> <strong>Developpeur :</strong> 6 mois en formation avec 3WA sur HTML, CSS, JavaScript, Node.js et React.js.<br><span class =\"gray\">Je continue à m'auto-former autre langue et bibliothèque.</span>";
    
    educTitle.innerHTML = "Education";
    education.innerHTML = "<strong>3W Academy :</strong> développement web et web mobile-option fullstack JavaScript.<br><span class =\"gray\">Formation actuel qui se termine 30 mai 2023.</span><br><br><strong>Université d’Angers :</strong> DAEU Secteur B octobre 2021 - juin 2022<br><span class =\"gray\">Math-Anglais-Français-Compétence numérique Mention bien</span><br><br><strong>CIDEF :</strong> Langue Française B2 octobre 2020 - juin 2021<br><span class =\"gray\">Niveau B1.2 et B2.</span><br><br><strong>AL-Maïmon :</strong> Management Des Affaires 2012<br><span class =\"gray\">Formation courte, de type BTS, sans équivalence en France.</span>";
    
    profTitle.innerHTML = "Profil";
    profile.innerHTML = "En tant qu'étudiant en développement web et mobile avec une option en JavaScript Full-Stack, je suis passionné par la création de solutions innovantes pour les entreprises. Je suis à la recherche d'un stage en tant que développeur web pour élargir mes compétences et les perfectionner. Doté d'un excellent esprit d'équipe et d'une forte motivation, je suis prêt à mettre mes connaissances en pratique dans un environnement stimulant et collaboratif. Je suis convaincu que cette alternance me permettra de continuer à grandir professionnellement tout en apportant une valeur ajoutée à l'entreprise.";
    
    langTitle.innerHTML = "Langues";
    langue.innerHTML = "Français - Anglais - Arabe";
    
    liensTitle.innerHTML = "Liens vers les réseau";
    liens.innerHTML = "<a href='https://www.linkedin.com/in/abdulrahman-fakhri-07334825a/'>LinkedIn</a> - <a href='https://www.youtube.com/channel/UCg2rjUSD7rFvOasuhikkAIw'>YouTube(Loisir)</a> - <a href='https://www.whire.me/@Abd'>Whire(Pour plus d'information sur moi)</a>";
    
    diverTitle.innerHTML = "Divers";
    divers.innerHTML = "- Individu dédié et responsable socialement, je suis engagé à soutenir mes proches et ma famille en fournissant une aide en matière de documentation officielle et en servant de traducteur si nécessaire. <br>- Fortement impliqué dans le développement communautaire en effectuant du bénévolat pour enseigner les mathématiques et les compétences informatiques.<br>- Je continue à développer mes compétences en étudiant en continu de nouvelles langues de codage, de bibliothèques et de cadres.<br>- Ma passion pour la technologie est démontrée par la gestion d'une chaîne YouTube, où je fournis des guides d'instruction pour les jeux. Déterminé à utiliser mes connaissances et mes compétences pour faire une différence positive dans la communauté. ";
    
    
    main.prepend(contanier1);
    contanier1.append(skillTitle);
    contanier1.append(skillPhoto);
    contanier1.append(skills);
    
    main.append(contanier2);
    contanier2.append(educTitle);
    contanier2.append(educPhoto);
    contanier2.append(education);
    
    main.append(contanier3);
    contanier3.append(profTitle);
    contanier3.append(profile);
    contanier3.append(langTitle);
    contanier3.append(langue);
    contanier3.append(liensTitle);
    contanier3.append(liens);
    contanier3.append(diverTitle);
    contanier3.append(divers);
    body.append(main);
    
    
    
    
};

 /*  <main>
        <div class="contanier1">
            <h1 class="skillTitle">Compétence</h1>
            <img src="assets/skills-1.jpeg" class="skillPhoto">
            <p class="skills"><strong>informatique :</strong> 5 ans comme vendeur des produits mobile/informatique de 2010-2015 en Syrie<br><span class="gray">Puis autoformation en plusieurs langue de programmation comme: JS, Pyton, HTML et CSS.</span><br><br><strong>Restaurants :</strong> 3 ans comme serveur en France et Syrie et 1 ans comme responsable de salle en Syrie<br><span class="gray"> 1 ans de mes 4 ans dans cette secteur passer dans un bar</span></p>
        </div>
        <div class="contanier2">
            <h1 class="educTitle">Education</h1>
            <img src="assets/cértification icon.jpg" class="educPhoto">
            <p class="education"><strong>3W Academy :</strong> développement web et web mobile-option fullstack JavaScript.<br><span class="gray">Formation actuel qui se termine 30 mai</span><br><br><strong>Université d’Angers :</strong> DAEU Secteur B octobre 2021 - juin 2022<br><span class="gray">Math-Anglais-Français-Compétence numérique Mention bien</span><br><br><strong>CIDEF :</strong> Langue Française B2 octobre 2020 - juin 2021<br><span class="gray">Niveau B1.2 et B2.</span><br><br><strong>AL-Maïmon :</strong> Management Des Affaires 2012<br><span class="gray">Formation courte, de type BTS, sans équivalence en France.</span></p>
        </div>
        <div class="contanier3">
            <h1 class="profTitle">Profil</h1>
            <p class="profile">Étudiant en développement web et web mobile  - option fullstack JavaScript. Je suis en recherche d’un stage de Développeur web.<br>En France depuis 2016, je cherche à poursuivre mes études en alternance. Enthousiaste, je fais preuve d'un bel esprit d'équipe</p>
            <h1 class="langTitle">Langues</h1>
            <p class="langue">Français : B2<br>Anglais : C1-B2<br>Arabe: Langue maternelle</p>
            <h1 class="diverTitle">Divers</h1>
            <p class="divers">activité musclasition, jeux videos et des conversation dans des questions d'existance. </p>
        </div>
    </main> 
 */