import {buildHeader} from  "./header_en.js"
import {buildMain} from "./main_en.js"
import {buildFooter} from "./footer_en.js"

document.addEventListener("DOMContentLoaded" , () => {
    
   const body = document.querySelector("body");
   
   buildHeader(body)
   buildMain(body)
   buildFooter(body)
    
    
    
});