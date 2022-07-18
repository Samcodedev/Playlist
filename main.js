// am tring to change al the alaudio to fetch 
let playnow = document.getElementById("play")
let pausenow = document.getElementById("pause")
let play = document.getElementById("player")
let img = document.getElementById("image")
let contain = document.getElementById("container")
let saveLink = document.getElementById("save-link")
let saveInput = document.getElementById("save-input")
let ranging = document.getElementById("range")
let durat = document.getElementById("dura")
let totalT = document.getElementById("total")

const fetcher = JSON.parse( localStorage.getItem("playlist"))

let m = -1;
let allaudio = ['./Falz-Soft-Work.mp3', './Fireboy_DML_-_Peru.mp3', './Burna_Boy_-_Anybody_talkglitz.tv.mp3', './Cheque_Zoom_9jaflaver.com_.mp3', './Damn-Omah-Lay.mp3', './Falz - Hypocrite.mp3', './Black_Sherif_-_Kwaku_The_Traveller (1).mp3']
localStorage.setItem("playlist", JSON.stringify(allaudio))


// console.log(fetcher[2])

function next(){
    // i am planning to work on how make an increasement when accord is called
    let n=1;
    m+=n
    //  m = m + n.
    //  m = 0 + 
    list = fetcher[m]
    play.setAttribute("src", list)
    contain.style.animationPlayState="running"

    if(m===fetcher.length -1){
        m=-1
    }

    if(list === fetcher[4]){
        img.setAttribute("src", "./Screenshot 2022-04-29 235134.png")
    }else if(list === fetcher[0]){
        img.setAttribute("src", "./Falz.jpg")
    }else if(list === fetcher[1]){
        img.setAttribute("src", "./Fireboy-DML-Peru-Art.jpeg")
    }else if(list === fetcher[2]){
        img.setAttribute("src", "./Screenshot 2022-04-30 155242.png")
    }else if(list === fetcher[3]){
        img.setAttribute("src", "./Cheque-Razor-EP-art.jpg")

    }else if(list ===  fetcher[5]){
        img.setAttribute("src", "./Falz.jpg")
    }else if(list === fetcher[6]){
        img.setAttribute("src", "./Screenshot 2022-04-29 134656.png")
    }
    else{
        img.setAttribute("src", "./Premium Photo _ Black man posing with vinyls.jpg")
    }
    play.play()
}
const q = 0.3
function currentTiming(){
    durat.textContent = play.currentTime
    totalT.textContent = play.duration
    if( play.currentTime === play.duration){
        next()
    }
}

setInterval(function(){
    currentTiming()
}, q * 1000)



playnow.addEventListener("click", function(){
    play.play()
    contain.style.animationPlayState="running"
    pausenow.style.display="block"
    playnow.style.display="none"

    durat.textContent=play.currentTime

})
pausenow.addEventListener("click", function(){
    play.pause()
    contain.style.animationPlayState="paused"
    playnow.style.display="block"
    pausenow.style.display="none"
})

saveLink.addEventListener("click", function(){
    allaudio.push(saveInput.value)
    console.log(allaudio)
    saveInput.value=""
    localStorage.setItem("playlist", JSON.stringify(allaudio))

    let y = 1;
    x +=y
})


// https://www.freeziki.com//uploads/audio/visitors/happy-birthday-simi-ft.-adekunle-gold-deja-howwe-1622915901.mp3?_=1
// https://www.freeziki.com//uploads/audio/visitors/there-for-you-feat.-ms-banks-simi-howwe-1601915833.mp3?_=1
// https://www.freeziki.com//uploads/audio/visitors/triggered-feat.-wurld-simi-howwe-1601915772.mp3?_=1
// https://www.freeziki.com//uploads/audio/visitors/undeserving-simi-howwe-1601915745.mp3?_=1
// https://www.freeziki.com//uploads/audio/visitors/no-longer-beneficial-simi-howwe-1600422037.mp3?_=1

    
function random(){
    let x = fetcher.length
    list = fetcher[Math.floor(Math.random() * x) ]
    play.setAttribute("src", list)
    contain.style.animationPlayState="running"
    play.play()

    if(list === fetcher[4]){
        img.setAttribute("src", "./Screenshot 2022-04-29 235134.png")
    }else if(list === fetcher[0]){
        img.setAttribute("src", "./Falz.jpg")
    }else if(list === fetcher[1]){
        img.setAttribute("src", "./Fireboy-DML-Peru-Art.jpeg")
    }else if(list === fetcher[2]){
        img.setAttribute("src", "./Screenshot 2022-04-30 155242.png")
    }else if(list === fetcher[3]){
        img.setAttribute("src", "./Cheque-Razor-EP-art.jpg")

    }else if(list ===  fetcher[5]){
        img.setAttribute("src", "./Falz.jpg")
    }else{
        img.setAttribute("src", "./Premium Photo _ Black man posing with vinyls.jpg")
    }
    console.log(fetcher)
}


// for( let i=0; i>allaudio.length; i++){
//     play.src = allaudio[i]
// }