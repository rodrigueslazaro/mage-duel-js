const d1 = {
    hearts: 5,
    button: document.getElementById('bp1'),
    display: document.getElementById('p1')
}
const heartsSelect = document.getElementById('hearts-select');
heartsSelect.addEventListener('change', function () {
    heartsStart = parseInt(this.value);
    d1.display.textContent = "";
    for(let i=0; i<heartsStart; i++) {
       d1.display.textContent += "🤍";
    }
    //reset();
})
