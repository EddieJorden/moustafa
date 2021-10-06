
const forgiveness = () => {
    let forgivenessMessage = "forgiveness message here"
    let name = "defaul name here"
    var moose = {
        name: "Moustafa Mohamed Moustafa",
        hair: "red"
    }
    name = moose.name
    forgivenessMessage = `its ok he's a ${moose.hair} head`
    return document.getElementById('name').innerHTML = `${name} its ok he's a ${moose.hair} head`
}