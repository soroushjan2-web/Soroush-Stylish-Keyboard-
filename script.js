// دریافت عناصر
const inputText = document.getElementById("inputText");
const output = document.getElementById("output");

const fontSelect = document.getElementById("fontSelect");

const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

const englishBtn = document.getElementById("englishBtn");
const persianBtn = document.getElementById("persianBtn");
const styleBtn = document.getElementById("styleBtn");

// نمایش متن
inputText.addEventListener("input", () => {
    output.innerText = inputText.value;
});

// تغییر فونت
fontSelect.addEventListener("change", () => {

    switch(fontSelect.value){

        case "vazir":
            output.style.fontFamily="Vazir";
            break;

        case "iransans":
            output.style.fontFamily="IranSans";
            break;

        case "poppins":
            output.style.fontFamily="Poppins";
            break;

        case "roboto":
            output.style.fontFamily="Roboto";
            break;

        default:
            output.style.fontFamily="sans-serif";

    }

});

// کپی متن
copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(output.innerText);

alert("✅ متن کپی شد.");

});

// پاک کردن
clearBtn.addEventListener("click",()=>{

inputText.value="";

output.innerHTML="";

});

// فارسی
persianBtn.addEventListener("click",()=>{

inputText.dir="rtl";

inputText.placeholder="متن فارسی بنویسید...";

});

// انگلیسی
englishBtn.addEventListener("click",()=>{

inputText.dir="ltr";

inputText.placeholder="Write English...";

});

// فونت فانتزی انگلیسی
const normal="abcdefghijklmnopqrstuvwxyz";

const fancy="𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇";

// استایل متن
styleBtn.addEventListener("click",()=>{

let text=inputText.value.toLowerCase();

let result="";

for(let i=0;i<text.length;i++){

let index=normal.indexOf(text[i]);

if(index==-1){

result+=text[i];

}else{

result+=fancy[index];

}

}

output.innerText=result;

});

// میانبر Ctrl+C
document.addEventListener("keydown",(e)=>{

if(e.ctrlKey && e.key==="c"){

navigator.clipboard.writeText(output.innerText);

}

});

// ذخیره متن
function saveText(){

localStorage.setItem("keyboardText",inputText.value);

}

inputText.addEventListener("keyup",saveText);

// بازیابی متن
window.onload=()=>{

let saved=localStorage.getItem("keyboardText");

if(saved){

inputText.value=saved;

output.innerText=saved;

}

};

// شمارنده حروف
const counter=document.createElement("div");

counter.style.color="white";

counter.style.marginTop="10px";

counter.style.textAlign="center";

document.querySelector(".container").appendChild(counter);

inputText.addEventListener("input",()=>{

counter.innerHTML="تعداد کاراکتر: "+inputText.value.length;

});
