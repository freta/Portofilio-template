let app = document.getElementById('typewriter');


// const typewriter= function typeWriter(){
//     loop: true
//     typewriter.typeString('Web Developer')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString('Web Designer')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString('<strong>FrontEnd Developer</strong>')
//     .pauseFor(2500)
//     .start();
// }

// var typewriter = new typewriter(app, {
//     loop: true
// });

// typewriter.typeString('Web Developer')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString('Web Designer')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString('<strong>FrontEnd Developer</strong>')
//     .pauseFor(2500)
//     .start();

let text = " I am a Front-End Developer"

let textTypeEffect = (element, text, i=0)=>{
    if(i === 0){
        element.textContent = ""
    }
    element.textContent += text[i]
    //check if we have reached the end
    if(i === text.length - 1){
        return
    }
    setTimeout(()=>textTypeEffect(element, text, i+1), 50)
}


textTypeEffect(app, text) 