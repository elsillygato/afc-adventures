const charinfo ={
    taterazay: {
        name: "Taterazay",
        description: "Basic Sword Hero"
    },
    yarida: {
        name: "Yarida",
        description: "Basic Spear Hero"
    },
    yumiyacha: {
        name: "Yumiyacha",
        description: "Basic Bow Hero"
    },
    kibadda: {
        name: "Kibadda",
        description: "Basic Lance Hero"
    },
    destrobo: {
        name: "Destrobo",
        description: "Basic Arm Hero"
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