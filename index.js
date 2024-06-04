let base=document.querySelectorAll('input')[0]
let height=document.querySelectorAll('input')[1]
let answer=document.querySelectorAll('input')[2]
let btn=document.querySelector('button')


// let s,m 
// function calc(s,m){
// return (1/2) *s*m
// }
// console.log(calc(10,2))

function calc(){
    return answer.value =(1/2)*base.value *height.value
}
calc()
btn.addEventListener('click',calc)
