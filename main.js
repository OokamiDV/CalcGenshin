let input = document.getElementById("input")
let output = document.getElementById("output")
let output2 = document.getElementById("output2")
let checkbox = document.getElementById("checkbox")
let wrapper = document.getElementById("wrapper")
let gems = null
let tray = null

wrapper.style.backgroundImage = "url(./media/pai.png)"


function testInput(input) {
    if (input.value > 0 && input.value < 1000000000) {
        input = input.value
        return input

    } else {
        input.value = input.value.substring(0, input.value.length - 1);
        console.log("Спасибо за проверку прочности кункулятора UwU")
        return input
    }
}

checkbox.onclick = function() {
    input.value = ""
    document.getElementById("output").innerHTML = ""

    if (checkbox.checked) {
        wrapper.style.backgroundImage = "url(./media/gem.png)"
    } else {
        wrapper.style.backgroundImage = "url(./media/crut.png)"
    }
}

function needGems(gems, tray) {
    gems = tray * 160
    return gems
}

function needTray(tray, gems) {
    wrapper.style.backgroundImage = "url(./media/crut.png)"
    tray = gems / 160
    return tray
}

input.oninput = function() {
    testInput(input)
    if (checkbox.checked) {
        tray = input.value
        gems = needGems(gems, tray)
        document.getElementById("output2").innerHTML = "Количесвто камней "
        document.getElementById("output").innerHTML = gems
    } else {
        gems = input.value
        tray = needTray(tray, gems)
        document.getElementById("output2").innerHTML = "Количесвто молитв ";
        document.getElementById("output").innerHTML = tray.toFixed(1);
    }
}