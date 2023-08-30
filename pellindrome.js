let str = "aman"
let bag = ""
for(let i = str.length-1 ; i >= 0 ; i--){
    bag+=str[i]
}
(str == bag)?console.log("Pellindrome"):console.log("Not Pellindrome");