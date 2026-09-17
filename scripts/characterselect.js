const charinfo ={
    lordgato: {
        name: "Lord Gato",
        description: "The hero of our story! A hat-wearing Yarida who's willing to fight for his friends and his worth."
    },
    cherry: {
        name: "Cherry",
        description: "Friend to Lord Gato! A talon-wielding ant Robopon who's always ready to fight for their friends."
    },
    clueless: {
        name: "Clueless",
        description: "PLACEHOLDER TEXT"
    },
    podsfi: {
        name: "Podsfi",
        description: "PLACEHOLDER TEXT"
    },
    spinny: {
        name: "Spinny",
        description: "PLACEHOLDER TEXT"
    },
    elaine: {
        name: "Elaine",
        description: "PLACEHOLDER TEXT"
    },
    camel: {
        name: "Camel",
        description: "PLACEHOLDER TEXT"
    },
    feesh: {
        name: "Feesh",
        description: "PLACEHOLDER TEXT"
    },
    helper: {
        name: "Helper",
        description: "PLACEHOLDER TEXT"
    },
    oreo: {
        name: "Oreo",
        description: "PLACEHOLDER TEXT"
    },
    nova: {
        name: "Nova",
        description: "PLACEHOLDER TEXT"
    },
    dengen: {
        name: "Dengen",
        description: "PLACEHOLDER TEXT"
    },
    mori: {
        name: "Mori",
        description: "PLACEHOLDER TEXT"
    }
};

const icons = document.getElementsByClassName('charimg')
const img = document.getElementById('characterportrait')
const charname = document.getElementById('charactername')
const chardesc = document.getElementById('characterdesc')

console.log(icons)
Array.from(icons).forEach(icon => {
    icon.addEventListener('click', (event) => {
        const selectedCharacter = event.target.id
        console.log(selectedCharacter)
        img.setAttribute("src", `characterportraits/${selectedCharacter}.png`)
        charname.innerHTML = charinfo[selectedCharacter].name
        chardesc.innerHTML = charinfo[selectedCharacter].description 
    })
});