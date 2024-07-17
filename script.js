let slider = document.querySelector("#slider")
let nextBtn = document.querySelector("#nextBtn")
let prevBtn = document.querySelector("#prevBtn")
let reverse = document.querySelector("#ereverse")
let end = document.querySelector("#end")

let images = [
"https://img.freepik.com/free-photo/joyful-camel-having-fun_23-2151058766.jpg?t=st=1721128846~exp=1721132446~hmac=e89c6ce6dc7b8b6922b21ff66162f28a9a5ad8dd0ffd9f645005494012e61f44&w=740",
"https://img.freepik.com/free-photo/closeup-yellow-american-goldfinch-perched-tree-branch_181624-6528.jpg?t=st=1721128916~exp=1721132516~hmac=7ed32dfb36c677653d7ebd2963c808ef4d18be821a15143e5d77ef9125bce17d&w=740",
"https://img.freepik.com/premium-photo/close-up-head-yellow-snake-reticulated-python_1110519-964.jpg?w=740",
"https://img.freepik.com/free-photo/black-backed-gull-with-blurred-background_181624-30991.jpg?t=st=1721128984~exp=1721132584~hmac=88bc87b693c03926571e2b2a16e9213f606c270b00294a4790bc6addf0e194a7&w=740",
"https://img.freepik.com/free-photo/tiger-looking-with-open-mouth_1150-18083.jpg?t=st=1721128879~exp=1721132479~hmac=810fb54b28dca5e8eefbc5099d4338066c20fdee6cc7abeafff1c518ef4f6279&w=360",
"https://img.freepik.com/free-photo/funny-old-woman-having-fun_23-2151058775.jpg?t=st=1721131372~exp=1721134972~hmac=9b84b7e25ae09978204f5529b6d50a3b56a6d155d753ad92af6b7a5f1d75625c&w=740",
]
let indexNumber = 0

slider.src = images[indexNumber]



nextBtn.addEventListener("click", function(){
    if(indexNumber< images.length - 1){
        indexNumber++
        slider.src = images[indexNumber]
        
    }
    // indexNumber++
    // slider.src = images[indexNumber]
if(indexNumber == images.length  - 1) {
    end.innerHTML = "You reach the end"
    end.style.backroundColor = "white"
    end.style.color= "black"
}
})
prevBtn.addEventListener("click" , function(){
    if(indexNumber >0){
        indexNumber--
        slider.src = images[indexNumber]
        
        
    }
    // indexNumber--
    // slider.src = images[indexNumber]
 
    
})
