const body = document.getElementsByTagName("body")[0];


function setColor(name){
    const red1 = Math.random()  * 255;
  
    const green2 = Math.random()  * 255;
    
    const blue3 = Math.random()  * 255;
    
    const colorFinal = `rgb(${red1}, ${green2}, ${blue3})`;
    
    body.style.backgroundColor = name;
    document.getElementById("header").style.color = name;
    document.getElementById("header").style.backgroundColor = colorFinal;
    
}
function random(){
    const red = Math.random()  * 255;
  
    const green = Math.random()  * 255;
    
    const blue = Math.random()  * 255;
    

    

    const finalColor = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = finalColor;
    document.getElementById("header").style.color = finalColor;

  

}       
function letter(){
    const red3 = Math.random()  * 255;
  
    const green1 = Math.random()  * 255;
    
    const blue2 = Math.random()  * 255;
    

    

    const finalColor3 = `rgb(${red3}, ${green1}, ${blue2})`;
    document.getElementById("header").style.backgroundColor = finalColor3;
    
}
