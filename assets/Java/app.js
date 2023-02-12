import {buildHeader} from  "./header.js"
import {buildMain} from "./main.js"
import {buildFooter} from "./footer.js"

document.addEventListener("DOMContentLoaded" , () => {
    
   const body = document.querySelector("body");
   
   buildHeader(body)
   buildMain(body)
   buildFooter(body)
    
    
    
});