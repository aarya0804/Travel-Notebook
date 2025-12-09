// We can worry about the JS towards the end
const compiledData = [];

export const addingData = () =>
{
    const inputs = document.querySelectorAll(".data-input");
    console.log("adding");
    const newItem = {
        title: "",
        location:"",
        dates:"",
        notes:"",
        itinerary:"",
        photo:[],
        itinerary:""
        };

    document.querySelectorAll('input').forEach((item) => {
        newItem[item.id] = item.value;
        console.log("hi");
    })
    savingData(newItem);    
}

//actually writing data to memory
export const savingData = (data) => { 
    const db = retrievingData();
    db.push(data);
    localStorage.setItem("database", JSON.stringify(db));
};

export const retrievingData = () => {
   const dataBase = localStorage.getItem("database") || [];
    return JSON.parse(database);
};

if (document.querySelector(".save-entry")){
        console.log("save");
    document.querySelector(".save-entry").addEventListener("click", addingData);
}