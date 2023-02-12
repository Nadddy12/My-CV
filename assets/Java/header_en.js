export const buildHeader = (body) => {
    
        const header = document.createElement("header");
        const div = document.createElement("div");
        const p = document.createElement("p");
        const a = document.createElement("a");
        const img = document.createElement("img");
        const contanier = document.createElement("div");
        const button = document.createElement("button");
        
        header.setAttribute("id" , "head");
        contanier.setAttribute("class", "contanier");
        img.setAttribute("src", "assets/IMG_20200810_013430_834.jpg");
        img.setAttribute("class", "cvIcon");
        a.setAttribute("href", "index.html");
        a.setAttribute("class", "myCv");
        div.setAttribute("class", "myClass");
        p.setAttribute("class", "name");
        p.setAttribute("id" , "dcolor");
        button.setAttribute("type" , "submit");
        button.setAttribute("id" , "button");
        
        
        button.innerHTML = "Dark Mode";
        a.innerHTML = "Vérsion Français";
        div.innerHTML = "Birth date 09/01/1992";
        p.innerHTML = "Abdulrahman FAKHRI";
        
        
        
        header.prepend(p);
        header.append(contanier);
        contanier.append(a);
        contanier.append(img);
        header.append(div);
        header.append(button);
        body.prepend(header);
      
      
        button.addEventListener("click" , function(eventement){
        let darkStyle = document.getElementById("head");
            darkStyle.classList.toggle("dark");
        let darkStyle1 = document.getElementById("dcolor");
            darkStyle1.classList.toggle("dark");
        let darkStyle2 = document.getElementById("button");
            darkStyle2.classList.toggle("dark2");
        let darkStyle3 = document.querySelector("main");
            darkStyle3.classList.toggle("dark");
        let darkStyle4 = document.querySelector("footer");
            darkStyle4.classList.toggle("dark");
        let darkStyle5 = document.querySelector("body");
            darkStyle5.classList.toggle("dark3");
        });
        
};
    
    /*<header id="head">
        <p class="name" id="dcolor">Abdulrahman FAKHRI</p>
        <div class="contanier"> 
            <a href="index.html" class="myCv">Click here to see my CV</a>
            <img src="assets/CV icon.jpg" class="cvIcon">
        </div>
        <div class="myClass">Class : ANJSO1</div>
        <button type="submit" id="button">Dark Mode</button>
    </header>*/