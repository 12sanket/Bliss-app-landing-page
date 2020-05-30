const screens = ['screen-1.png','screen-2.png','screen-3.png','screen-4.png','screen-5.png','screen-6.png']

let index = 0

setInterval(()=>{
    if(index === screens.length){
        index = 0
    }
    document.getElementById('screens').src = `/assets/Screens/${screens[index]}`
    index++
}, 2000)
