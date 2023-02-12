export const buildFooter = (body) => {
    
    
    const footer = document.createElement("footer")
    const footertext = document.createElement("p")
    
    footertext.setAttribute("class" , "footertext")
    
    footertext.innerHTML = "This work done by Abdulrahman FAKHRI"
    
    
    footer.append(footertext)
    body.append(footer)
    
    
    
    
}