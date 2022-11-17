var tasks = []

function inserir_tarefa() {

    var txt_tarefa = document.getElementById("txt_tarefa").value
    if (txt_tarefa.length > 0) {
        tasks.push(txt_tarefa)

        var no_texto_tarefa = document.createTextNode(txt_tarefa)
        var h5 = document.createElement("h5")
        h5.setAttribute("id", `h5_${tasks.length}`)
        h5.append(no_texto_tarefa)
        // h5.style.backgroundColor = "rgb(165, 165, 164)"
        h5.style.backgroundColor = "rgba(248, 242, 242, 0.781)"
        h5.style.borderRadius = "10px"
        h5.style.width = "350px"
        h5.style.height = "45px"
        h5.style.paddingTop = "10px"
        h5.style.paddingLeft = "10px"
        h5.style.paddingRight = "10px"
        h5.style.color = "#000"
        h5.style.textAlign = "start"
        h5.style.margin = "auto"
        h5.style.maxWidth = "400px"
        h5.style.fontSize = "20px"
        h5.style.fontFamily = "'Poppins', sans-serif"
        var li = document.createElement("li")
        li.setAttribute("id", `li_${tasks.length}`)
        li.append(h5)
        var ul = document.getElementById("tasks")
        ul.appendChild(li)
        ul.style.padding = "0px"
        ul.style.paddingTop = "10px"
        ul.style.listStyle = "none"
        li.style.marginRight = "-50px"
        li.style.marginLeft = "-50px"
    }

    // funcao botao de remover

    var btn_remover = document.createElement("button");
    btn_remover.setAttribute("id", `button_${tasks.length}`)
    btn_remover.style.backgroundColor = "rgba(31, 31, 31, 1)"
    btn_remover.style.float = "left"
    btn_remover.style.borderRadius = "50%"
    btn_remover.style.padding = "3px"
    btn_remover.style.position = "relative"
    btn_remover.style.top = "-43px"
    btn_remover.style.left = "325px"
    btn_remover.style.border = "2px solid #750a00"
    h5.append(btn_remover)
    var texto_btn_remover = document.createTextNode("❌");
    var h5 = document.createElement("h5")
    h5.setAttribute("id", `h5_${tasks.length}`)
    h5.append(texto_btn_remover)
    h5.style.color = "#fff"
    h5.style.fontSize = "13px"
    h5.style.paddingTop = "7px"
    h5.style.paddingLeft = "5px"
    h5.style.paddingRight = "5px"
    h5.style.fontFamily = "'Poppins', sans-serif"
    btn_remover.appendChild(h5);
    li.appendChild(btn_remover)
    var txt_tarefa = document.getElementById("txt_tarefa").value = ""
    btn_remover.onclick = function () {
        var id_item = btn_remover.parentNode
        id_item.remove();
        tabela_removidos(id_item)
    }

    //funcao botao de concluir

    var btn_concluir = document.createElement("button")
    btn_concluir.setAttribute("id", `button_${tasks.length}`)
    btn_concluir.style.backgroundColor = "#409842"
    btn_concluir.style.borderRadius = "20px"
    btn_concluir.style.padding = "3px"
    btn_concluir.style.position = "relative"
    btn_concluir.style.top = "-43px"
    btn_concluir.style.left = "330px"
    btn_concluir.style.border = "2px solid #000"
    var texto_btn_concluir = document.createTextNode("✓")
    var h5 = document.createElement("h5")
    h5.setAttribute("id", `h5_${tasks.length}`)
    h5.append(texto_btn_concluir)
    h5.style.color = "#fff"
    h5.style.textAlign = "center"
    h5.style.maxWidth = "400px"
    h5.style.fontSize = "13px"
    h5.style.paddingTop = "7px"
    h5.style.paddingLeft = "10px"
    h5.style.paddingRight = "10px"
    h5.style.fontFamily = "'Poppins', sans-serif"
    btn_concluir.appendChild(h5)
    li.appendChild(btn_concluir)

    btn_concluir.onclick = function () {
        var id_item_remove = btn_concluir.parentNode
        id_item_remove.remove()
        tabela_concluidos(id_item_remove)
        notifyy()
    }
}

function tabela_removidos(content) {
    var date = formatDate(new Date())
    var hour = pegar_hora()

    tbody = document.getElementById("tbd2")
    row = document.createElement("tr");
    tdname = document.createElement("td")
    tddate = document.createElement("td")
    tdhour = document.createElement("td")
    display = document.createElement("div")
    display.setAttribute("class", `d-flex align-items-center`)
    margin = document.createElement("div")
    margin.setAttribute("class", `ms-3`)
    paragname = document.createElement("p")
    paragname.setAttribute("class", `fw-bold mb-1`)
    paragdate = document.createElement("p")
    paragdate.setAttribute("class", `fw-bold mb-1`)
    paraghour = document.createElement("p")
    paraghour.setAttribute("class", `fw-bold mb-1`)
    var conteudo = content.textContent;
    conteudo = conteudo.substring(0, (conteudo.length - 2))
    paragname.append(conteudo)
    margin.appendChild(paragname)
    display.appendChild(margin)
    tdname.appendChild(display)
    row.appendChild(tdname);
    paragdate.append(date)
    tddate.appendChild(paragdate)
    row.appendChild(tddate)
    paraghour.append(hour)
    tdhour.appendChild(paraghour)
    row.appendChild(tdhour)
    tbody.appendChild(row)
    document.getElementById("tb2").appendChild(tbody)
}

function tabela_concluidos(content_concluido) {

    var date = formatDate(new Date())
    var hour = pegar_hora()

    tbody = document.getElementById("tbd1")
    row = document.createElement("tr");
    tdname = document.createElement("td")
    tddate = document.createElement("td")
    tdhour = document.createElement("td")
    display = document.createElement("div")
    display.setAttribute("class", `d-flex align-items-center`)
    margin = document.createElement("div")
    margin.setAttribute("class", `ms-3`)
    paragname = document.createElement("p")
    paragname.setAttribute("class", `fw-bold mb-1`)
    paragdate = document.createElement("p")
    paragdate.setAttribute("class", `fw-bold mb-1`)
    paraghour = document.createElement("p")
    paraghour.setAttribute("class", `fw-bold mb-1`)
    var conteudo = content_concluido.textContent;
    conteudo = conteudo.substring(0, (conteudo.length - 2))
    paragname.append(conteudo)
    margin.appendChild(paragname)
    display.appendChild(margin)
    tdname.appendChild(display)
    row.appendChild(tdname);
    paragdate.append(date)
    tddate.appendChild(paragdate)
    row.appendChild(tddate)
    paraghour.append(hour)
    tdhour.appendChild(paraghour)
    row.appendChild(tdhour)
    tbody.appendChild(row)
    document.getElementById("tb1").appendChild(tbody)
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('/');
}

function pegar_hora() {
    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let time = h + ":" + m;

    return time
}

function notifyy() {
    $('#notify').toast({delay:5000});
    $('#notify').toast("show");
    playAudio()
}

function playAudio() {
    document.getElementById("audio").play();
}

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

var input = document.getElementById("txt_tarefa");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn_insert").click();
  }
});
