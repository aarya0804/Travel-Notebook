// We can worry about the JS towards the end
import { savingData, retrievingData, addingData } from "./storage";

document.querySelector(".create-new").addEventListener("click", openPage2);
document.querySelector(".open-log").addEventListener("click", openPage3);

window.addEventListener("load", function(event) {
    console.log("Page is fully loaded or refreshed");
    createLog();
});
// everytime the page loads, read LocalStorage and rerender log displays...


// const openPage2 = () =>
// {
//     console.log("BUTTON");
//     window.location.href= "./page2.html";
// }


const openPage3 = () =>
{
    console.log("BUTTON");
    window.location.href= "./page3.html";
}

const createLog = () =>{
    //adds log
}

window.addEventListener("DOMContentLoaded", function(){
     //When dom loads, look through atabase and populatate logs
     const db = retrievingData();

     db.forEach(element => {
        console.log("jhdfjds");
     });
})
   



