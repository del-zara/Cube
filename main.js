const cube = document.getElementById('cube')
const step = document.getElementById('step')
const stope = document.getElementById('stop')
const spin = document.getElementById('spin')

let left = 0
let mtop =0
let rotate = 0
let move1, move2;

stope.addEventListener('click',()=>{
    clearInterval(move1)
    clearInterval(move2)
})
spin.addEventListener('click', ()=>{
    move2 = setInterval(()=>{
cube.style.transform = `rotate(${rotate}deg)`
rotate -=5
    }, 10)
})

step.addEventListener('click', ()=>{
    move1= setInterval(()=>{
        if(left == 0 && mtop <=500 && mtop >0){
            mtop = mtop -5
            cube.style.top = mtop + 'px'
        }else if(left <=500 && mtop ==500 ){
            left = left-5
            cube.style.left = left +'px'
        }else if(mtop >=0 && mtop <=500 && left >=500){
            mtop = mtop+5
            cube.style.top = mtop+'px'
        }else if(left >=0 && mtop == 0 && left <=500){
            left = left+5
            cube.style.left=left+'px'
        }
    }, 10)
})