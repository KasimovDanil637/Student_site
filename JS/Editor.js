const textarea = document.getElementById("text");
editor()
function editor(){
    fontSize()
    colorText()
    boldText()
    italicText()
    setFormat()
    underlineText()
    clearText()
    textPosition()
    saveFile();
    bgColor()
    countWord()
    saveSession()
}
function saveFile(){
    const downloadBtn = document.getElementById('download-bnt');
    const fileFormat = document.getElementById('file-format')
    fileFormat.value = ".txt"
    downloadBtn.addEventListener('click', () => {
        const text = textarea.value;
        switch (fileFormat.value) {
            case ".txt":
                const blob = new Blob([text], {type: 'text/plain'});
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'file.txt';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                break
            case ".pdf":
                const pdf = new jsPDF();
                pdf.text(text, 10, 10);
                pdf.save("file.pdf");
                break
        }
    })
}
function fontSize(){
    const fontsSelect = document.getElementById('font-select')
    for (let i = 1; i < 73; i++){
        const option = document.createElement('option')
        if (i === 16){
            option.selected = "selected"
        }
        option.value = i
        option.textContent = i
        fontsSelect.append(option)
    }
    fontsSelect.addEventListener('change', () => {
        textarea.style.fontSize = fontsSelect.value + "px"
    })
}
function colorText(){
    const colorSelect = document.getElementById('select-color')
    //features__block-input-color
    const inputColor = document.querySelector('.features__block-fonts-setting-color-input')
    colorSelect.addEventListener('change', () => {
        inputColor.value = colorSelect.value
        textarea.style.color = inputColor.value
    })
    inputColor.addEventListener('change', ()=>{
        textarea.style.color = inputColor.value
        colorSelect.value = null
    })
}
function boldText(){
    let count = 0;
    const boldBtn = document.getElementById('boldText')
    boldBtn.addEventListener('click', () => {
        if (count % 2 === 0) {
            textarea.style.fontWeight = 900
            boldBtn.classList.add('active')
        } else {
            textarea.style.fontWeight = 100
            boldBtn.classList.remove('active')
        }
        count++
    })
}
function italicText(){
    let count = 0;
    const italicBtn = document.getElementById('italicText')
    italicBtn.addEventListener('click', () => {
        if (count % 2 === 0) {
            textarea.style.fontStyle = 'italic'
            italicBtn.classList.add('active')
        } else {
            textarea.style.fontStyle = 'normal'
            italicBtn.classList.remove('active')
        }
        count++
    })
}
function underlineText(){
    let count = 0;
    const underlineBtn = document.getElementById('underlineText')
    underlineBtn.addEventListener('click', () => {
        if (count % 2 === 0) {
            textarea.style.textDecoration = 'underline'
            underlineBtn.classList.add('active')
        } else {
            textarea.style.textDecoration = 'none'
            underlineBtn.classList.remove('active')
        }
        count++
    })
}
function bgColor(){
    const color = document.getElementById('bd-color')
    color.addEventListener('change', ()=>{
        textarea.style.backgroundColor = color.value
    })
}
function setFormat(){
    const formatSelectHor = document.getElementById('flexRadioDefault1')
    const formatSelectVer = document.getElementById('flexRadioDefault2')
    formatSelectHor.addEventListener('click', () => {
        textarea.style.width = 1200 + "px"
        textarea.style.height = 600 + "px"
    })
    formatSelectVer.addEventListener('click', () => {
        textarea.style.width = 800 + "px"
        textarea.style.height = 1200 + "px"
    })
}
function clearText(){
    const clearBtn = document.getElementById('basket-btn')
    clearBtn.addEventListener('click', () => {
        textarea.value = null
        textarea.style= null
    })
}
function textPosition(){
    const centerTxtBtn = document.getElementById('text-center')
    const leftTxtBtn = document.getElementById('text-left')
    const rightTxtBtn = document.getElementById('text-right')
    leftTxtBtn.classList.add('active')
    centerTxtBtn.addEventListener('click', () =>{
        centerTxtBtn.classList.add("active")
        leftTxtBtn.classList.remove("active")
        rightTxtBtn.classList.remove("active")
        textarea.style.textAlign = "center"
    })
    leftTxtBtn.addEventListener('click', () =>{
        centerTxtBtn.classList.remove("active")
        rightTxtBtn.classList.remove("active")
        leftTxtBtn.classList.add("active")
        textarea.style.textAlign = "left"
    })
    rightTxtBtn.addEventListener('click', () =>{
        centerTxtBtn.classList.remove("active")
        leftTxtBtn.classList.remove("active")
        rightTxtBtn.classList.add("active")
        textarea.style.textAlign = "right"
    })
}
function countWord(){
    const counter = document.querySelector('.footer_block-count')
    counter.textContent = "Количество слов: " + 0
    textarea.addEventListener('input', () => {
        let text = textarea.value.trim();
        let wordCount = text === "" ? 0 : text.split(/\s+/).length;
        counter.textContent =  "Количество слов: " + wordCount
    })
}
function saveSession(){
    const buttonSave = document.getElementById('save-btn')
    buttonSave.addEventListener('click', ()=>{
        sendRequest(textarea.value)
        localStorage.setItem('text', textarea.value);
        localStorage.setItem('fontStyle', textarea.style.fontStyle);
        localStorage.setItem('fontWeight', textarea.style.fontWeight);
        localStorage.setItem('fontUnderline', textarea.style.textDecoration);
        localStorage.setItem('fontSize', textarea.style.fontSize)
        localStorage.setItem('bgColor', textarea.style.backgroundColor)
        localStorage.setItem('textColor', textarea.style.color)
        localStorage.setItem('textPosition', textarea.style.textAlign)
        localStorage.setItem('textWight', textarea.style.width)
        localStorage.setItem('textHeight', textarea.style.height)
    })
    textarea.value = localStorage.getItem('text')
    textarea.style.backgroundColor = localStorage.getItem('bgColor')
    textarea.style.fontSize = localStorage.getItem('fontSize')
    textarea.style.fontStyle = localStorage.getItem('fontStyle')
    textarea.style.fontWeight = localStorage.getItem('fontWeight')
    textarea.style.textDecoration = localStorage.getItem('fontUnderline')
    textarea.style.color = localStorage.getItem('textColor')
    textarea.style.textAlign = localStorage.getItem('textPosition')
    textarea.style.width = localStorage.getItem('textWight')
    textarea.style.height = localStorage.getItem('textHeight')
}
function sendRequest(text) {
    const getText = fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
        title: "text",
        body: text,
        userId: 1,
    }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
    },
    })
    getText
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
        .finally(() => {
            alert("Сохранено")
        })
}