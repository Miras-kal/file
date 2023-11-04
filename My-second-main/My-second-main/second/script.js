let position = 0;
const sliderLine = document.querySelector('.slider_line')

const right = document.querySelector('.slider_right')

let oposite = 1

right.addEventListener('click', function style(){
    position = position + 1200;
    if(position ===3600)position = 0
    sliderLine.style.right = position + 'px'    
    oposite = oposite + 1
    if(oposite === 4 || oposite <= 0)oposite = 1
    console.log(oposite)
    return oposite
})
const left = document.querySelector('.slider_left')

left.addEventListener('click', function style(){
        position = position - 1200
        if(position < 0)position = 2400
        sliderLine.style.right = position + 'px'
        oposite = oposite - 1
        if(oposite <= 0)oposite = 3
        console.log(oposite)
        return oposite
})


const SliderUnder = document.querySelector('.slider_under_div')

if(oposite ===2){
    SliderUnder.style.backgroundColor = '№ссс'
        console.log('вы коньченные ублютки')
}

// function sliderUnderfunc(oposite){
//     if(oposite > 1){
//         SliderUnder.style.backgroundColor = 'black'
//         console.log(oposite)
//     }
// }1