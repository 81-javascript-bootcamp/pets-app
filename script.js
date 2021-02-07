const pets = [
    {
        name: "Sam",
        type: "Golden Retriever/St. Bernard Mix",
        sound: "bark",
        soundText: "Bark - type b"
    },
    {
        name: "Mellie",
        type: "Domestic Shorthair",
        sound: "meow",
        soundText: "Meow - type m"
    }
]


function createPetElement(pet){
    return "<tr class='name-"+pet.name+"'><td>"+pet.name+"</td><td>"+pet.type+"</td><td><button data-sound='"+pet.sound+"'>"+pet.soundText+"</button></td></tr>"
}

function addToTable(content){
    document.querySelector("tbody").innerHTML += content;
}

for(let i=0; i< pets.length; i++){
    addToTable(createPetElement(pets[i]));
}

const buttons = document.querySelectorAll("button")

for(let i= 0; i< buttons.length; i++){
    buttons[i].addEventListener("click", function(event){
        const soundId = this.dataset.sound;
        const soundElement = document.getElementById(soundId);
        if(soundElement){
            soundElement.play();
        }
    });
}