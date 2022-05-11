let input = document.getElementById("input")
let output = document.getElementById("output")
let output2 = document.getElementById("output2")
let checkbox = document.getElementById("checkbox")
let wrapper = document.getElementById("wrapper")
let gems = null
let pray = null

wrapper.style.backgroundImage = "url(./media/pai.png)"


function testInput(input) {
    if (input.value <= -1 || input.value.length >= 10) {
        input.value = input.value.substring(0, input.value.length - 1);
        console.log("Спасибо за проверку прочности кункулятора UwU")
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

function needGems(pray) {
    gems = pray * 160
    return gems
}

function needPray(gems) {
    pray = gems / 160
    return pray
}

input.oninput = function() {
    testInput(input)
    if (checkbox.checked) {
        pray = input.value
        gems = needGems(pray)
        document.getElementById("output2").innerHTML = "Количество камней "
        document.getElementById("output").innerHTML = gems
    } else {
        gems = input.value
        wrapper.style.backgroundImage = "url(./media/crut.png)"
        pray = needPray(gems)
        document.getElementById("output2").innerHTML = "Количество молитв ";
        document.getElementById("output").innerHTML = pray.toFixed(1);
    }
}
