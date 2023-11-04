
const input = document.querySelector('.input')
const btn = document.getElementById('btn')
const a = document.querySelector('in_1').value
const b = document.querySelector('in_2').value


btn.addEventListener('click',function cal(a,b){
    console.log(a + b)
})

function colcul(a, b){
    return a + b
}
console.log(colcul(3,5))