let output = document.getElementById("css_code");
let sliders = document.querySelectorAll("input[type='range']");
let inputs = document.querySelectorAll("input[type = 'number']");

sliders.forEach((slider)=>{
    slider.addEventListener("input", creatrBlob);
});


inputs.forEach((inp)=>{
    inp.addEventListener("change", creatrBlob);
});

function creatrBlob(){
    let radiusOne = sliders[0].value;
    let radiusTwo = sliders[1].value;
    let radiusThree = sliders[2].value;
    let radiusFour = sliders[3].value;

    let bloHeight = inputs[0].value;
    let bloWidth = inputs[1].value; 

    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`;

    document.getElementById("blob").style.cssText = `border-radius: ${borderRadius}; height: ${bloHeight}px; width: ${bloWidth}px;`;
    
    output.value = `border-radius: ${borderRadius};`;
}

document.getElementById("copy").addEventListener("click", ()=>{
    output.select();
    document.execCommand("copy")
    alert("Code Copied!")
})

creatrBlob()
