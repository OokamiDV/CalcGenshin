let input = document.getElementById("input")
let output = document.getElementById("output")
let output2 = document.getElementById("output2")
let checkbox = document.getElementById("checkbox")
let wrapper = document.getElementById("wrapper")
let gems = null
let tray = null

wrapper.style.backgroundImage = "url(./media/pai.png)"

checkbox.onclick = function() {
    input.value = ""
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