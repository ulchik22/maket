let sel = document.querySelector('select')
let div = document.querySelectorAll('article')
let container = document.querySelector('.container')
sel.addEventListener('change', () => {
    for (const a of div) {
        if(sel.value == a.dataset.type || sel.value == 'Всё'){
            a.style.display = 'grid'
        }else{
            a.style.display = 'none'
        }
    }
})
let price = false
function sortPrice(event){
    price = !price
    event.preventDefault();
    container.innerHTML = ''
let selected = [...div].sort((a,b) => {
return price ? a.dataset.price - b.dataset.price : b.dataset.price - a.dataset.price
})
for (const div of selected) {
    container.appendChild(div)
}}

let country = false
function sortCoutry(event){
    country = !country
    event.preventDefault();
    container.innerHTML = ''
let selected = [...div].sort((a,b) => {
return country ? a.dataset.country.localeCompare(b.dataset.country) :b.dataset.country.localeCompare(a.dataset.country)
})
for (const div of selected) {
    container.appendChild(div)
}}

let name1 = false
function sortName(event){
    name1 = !name1
    event.preventDefault();
    container.innerHTML = ''
let selected = [...div].sort((a,b) => {
return name1 ? a.dataset.name1.localeCompare(b.dataset.name1) : b.dataset.name1.localeCompare(a.dataset.name1)
})
for (const div of selected) {
    container.appendChild(div)
}}