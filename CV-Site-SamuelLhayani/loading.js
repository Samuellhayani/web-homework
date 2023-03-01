function toggle_background() {
    let body = document.body
    let color1 = "#ff0000"
    let color2 = "#00ff00"
    if (body.style.backgroundColor == color1) {
        body.style.backgroundColor = color2
        console.log(body.style.backgroundColor)
    }
    else 
        body.style.backgroundColor = color1

} 


window.addEventListener('load',
() => {
    console.log('initializing')
    window.setInterval(
        () => {
            console.log('tick')
            toggle_background() 
            1000}, 
            
        

    )
}

)