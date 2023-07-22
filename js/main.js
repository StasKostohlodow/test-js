let state = false
let Timer
let timer1
let timer2
let timer3
let timer4

bgTimers = function(){
    timer1 = setTimeout(function(){document.getElementById('rect').classList.add('bg-red')},500)
    timer2 = setTimeout(function(){
        document.getElementById('rect').classList.remove('bg-red')
        document.getElementById('rect').classList.add('bg-green')
    },1000)
    timer3 = setTimeout(function(){
        document.getElementById('rect').classList.remove('bg-green')
        document.getElementById('rect').classList.add('bg-blue')
    },1500)
    timer4 = setTimeout(function(){
        document.getElementById('rect').classList.remove('bg-blue')
    },2000)
    
}

clearTimersAndStyle = function (){
    document.getElementById('rect').classList.remove('bg-red')
    document.getElementById('rect').classList.remove('bg-green')
    document.getElementById('rect').classList.remove('bg-blue')
    clearInterval(Timer)
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
    clearInterval(timer4)
}

document.getElementById('color').onclick = function(){
    state = !state
    if(!state) {
        document.getElementById('rect').classList.add('bg-white')
        clearTimersAndStyle()
    }
    else{
        document.getElementById('rect').classList.remove('bg-white')     
        bgTimers()
        Timer = setInterval(function(){
           bgTimers() 
        },2000)
                
    }
}
    

document.getElementById('size').onclick = function (){
    document.getElementById('rect').classList.toggle('big-rect')
}

