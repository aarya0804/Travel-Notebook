// We can worry about the JS towards the end
import { retrievingData } from "./storage";

document.querySelector(".create-new").addEventListener("click", openPage2);
document.querySelector(".open-log").addEventListener("click", openPage3);

window.addEventListener("load", function(event) {
    console.log("Page is fully loaded or refreshed");
    createLog();
});
// everytime the page loads, read LocalStorage and rerender log displays... more efficient way to do this?


// const openPage2 = () =>
// {
//     console.log("BUTTON");
//     window.location.href= "./page2.html";
// }


// const openPage3 = () =>
// {
//     console.log("BUTTON");
//     window.location.href= "./page3.html";
// }

const createLog = () =>{
    const container = document.querySelector(".log-wrapper");
    const allData = retrievingData();

    allData.forEach(element => {
        document.querySelector(".log-wrapper").innerHTML = '<p>HellO!</p>';
    });
    console.log("created");
}

