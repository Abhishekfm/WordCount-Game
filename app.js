let text = document.querySelector(".insideInput");
let btn = document.querySelector(".btn");
let out = document.querySelector(".out");

btn.addEventListener("click", ()=>{
    let val = text.value;
    console.log(val);
    val = val.split(" ");
    let ans = 0;
    val.forEach(element => {
        if(element.length < 1){
            ans += 1;
        }
    });
    let uttar = val.length - ans;
    out.innerText = uttar + " Words";
})