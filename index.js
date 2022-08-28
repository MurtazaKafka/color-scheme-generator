let colorArray = []
const mode = document.getElementById("theme")
let seed = document.getElementById("col").value
const colorValue = seed.replace("#", "");

document.getElementById("btn-gen").addEventListener("click", function(e){
    
    e.preventDefault()
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${mode.value}`)
    .then(res => res.json())
    .then(data => { 
         for (let i = 0; i < 5; i++){
            colorArray.push(data.colors[i].hex.value)
            
        }
        document.getElementById("red").style.backgroundColor = colorArray[0]
        document.getElementById("black").style.backgroundColor = colorArray[1]
        document.getElementById("beige").style.backgroundColor = colorArray[2]
        document.getElementById("green").style.backgroundColor = colorArray[3]
        document.getElementById("purple").style.backgroundColor = colorArray[4]
        
        document.getElementById("val-red").textContent = colorArray[0]
        document.getElementById("val-black").textContent = colorArray[1]
        document.getElementById("val-beige").textContent = colorArray[2]
        document.getElementById("val-green").textContent = colorArray[3]
        document.getElementById("val-purple").textContent = colorArray[4]
        
        colorArray = []
    })
})