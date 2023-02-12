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
    
    
    skillTitle.innerHTML = "Skills";
    skills.innerHTML = "<strong>Technology :</strong> 5 years as a mobile/IT products seller from 2010-2015 in Syria<br><span class =\"gray\">I have IT knowledge due to my work in the IT field.</span> <br> <br> <strong>Restaurants :</strong> 3 years as a server in France and Syria, and 1 year as a dining room manager in Syria<br><span class =\"gray\">1 year of my 4 years in this sector was spent in a cafe/bar.</span> <br> <br> <strong>Developer Web :</strong>6 months of training with 3WA on HTML, CSS, JavaScript, Node.js and React.js<br><span class =\"gray\">I continue to self-teach another languages and libraries.</span>";
    
    educTitle.innerHTML = "Education";
    education.innerHTML = "<strong>3W Academy :</strong> web and mobile web development - fullstack JavaScript option.<br><span class =\"gray\">Current training ending on May 30th 2023.</span><br><br><strong>University of Angers :</strong> DAEU Sector B from October 2021 to June 2022.<br><span class =\"gray\">Mathematics-English-French-Digital competency with \"mention bien\" (good mention)</span><br><br><strong>CIDEF :</strong>French language B2 from October 2020 to June 2021.<br><span class =\"gray\">Level B1.2 and B2.</span><br><br><strong>AL-Maimon :</strong> Business Management 2012<br><span class =\"gray\">Short-term training, equivalent to a BTS, without equivalent in France.</span>";
    
    profTitle.innerHTML = "Profile";
    profile.innerHTML = "As a student in web and mobile development with a focus on JavaScript Full-Stack, I am passionate about creating innovative solutions for businesses. I am seeking a web developer internship to expand and hone my skills. With a strong team spirit and high motivation, I am ready to put my knowledge into practice in a challenging and collaborative environment. I am confident that this internship will allow me to continue to grow professionally while bringing added value to the company.";
    
    langTitle.innerHTML = "Languages";
    langue.innerHTML = "French - English - Arabic";
    
    liensTitle.innerHTML = "Links to networks";
    liens.innerHTML = "<a href='https://www.linkedin.com/in/abdulrahman-fakhri-07334825a/'>LinkedIn</a> - <a href='https://www.youtube.com/channel/UCg2rjUSD7rFvOasuhikkAIw'>YouTube(spare-time activitie)</a> - <a href='https://www.whire.me/@Abd'>Whire(For more info about me)</a>";
    
    diverTitle.innerHTML = "Various";
    divers.innerHTML = "- As a dedicated and socially responsible individual, I am committed to supporting my loved ones and family by providing assistance with official documentation and serving as a translator when necessary. <br>- I am highly involved in community development through volunteering to teach mathematics and computer skills.<br>- I am continuously developing my skills by studying new coding languages, libraries, and frameworks. <br>- My passion for technology is demonstrated through managing a YouTube channel, where I provide instructional guides for games. I am determined to use my knowledge and skills to make a positive impact in the community. ";
    
    
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