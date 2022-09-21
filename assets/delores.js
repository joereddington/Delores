
function setup() {
bullets=getCookie("bullets");
bullets=bullets.replace(/x*$/,"") //removing extra 'x's at the end. 
console.log(bullets);
index=0;
updatestyles(index); 
index=bullets.length
console.log("The index is:"+index);
updatescore();
console.log("Score updated");
updatestyles(index); 
}


function today(){
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

return today
}

//Should be in a seperate cookie file 

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  console.log("Get Cookie called")
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//end of cookie file 
var index=0;
var bullets="xxxx";

function updatescore(){

y=(bullets.match(/y/g) || []).length

console.log("Hello");
console.log(y);
document.getElementById("score").innerHTML  = "Completed: "+(bullets.match(/y/g) || []).length
document.getElementById("score").innerHTML += "<BR>Failed   : "+(bullets.match(/n/g) || []).length
document.getElementById("score").innerHTML += "<BR>NA       : "+(bullets.match(/i/g) || []).length

} 

function updatestyles(index){
    console.log("Update styles called with: "+index);
    const allVisibleElements = document.querySelectorAll('li');
    allVisibleElements[index].scrollIntoView({block: "center",behavior:"smooth"});
    allVisibleElements[index].setAttribute("style", "background-color:yellow;color:black");
    //style based on bullets
    for (let i=0;i<allVisibleElements.length;i++){
        allVisibleElements[i].setAttribute("style", "background-color:white");
        if ("y+".includes(bullets[i])){
          allVisibleElements[i].setAttribute("style", "background-color:green");
        }
        if (bullets[i]=='n'){
          allVisibleElements[i].setAttribute("style", "background-color:red");
        }
        if (bullets[i]=='i'){
          allVisibleElements[i].setAttribute("style", "background-color:cyan");
        }
        if (index==i){
          allVisibleElements[index].setAttribute("style", "background-color:yellow;color:black");
        } 
    //Focus on a link in a highlighted line 
    for (const child of allVisibleElements[index].childNodes){
      if (child.tagName == 'A'){
        child.focus()
      }
    } 


    }

}

// From https://stackoverflow.com/a/1431110/170243
//Altered to extend strings if necessary 
function setCharAt(str,index,chr) {
    console.log(str);
    str=str.padEnd(index,'x');
    console.log(str);
    return str.substring(0,index) + chr + str.substring(index+1);
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowUp') {
      event.preventDefault();
      if (index>0)
      {
        index--;
      }
    }
    if (event.key == 'ArrowDown') {
        event.preventDefault();
        index++;
    }
    if ("ynix".includes(event.key)) {
        event.preventDefault();
        bullets=setCharAt(bullets,index,event.key)
        index++;
    }
    
    updatestyles(index); 
    updatescore();
    console.log("pre set Cookie called")
    setCookie("bullets",bullets,90);
    console.log("set Cookie called")
}
    );


