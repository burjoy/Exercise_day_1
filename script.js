let passwords = document.getElementById("passwords");
let emails = document.getElementById("emails");
let warning = document.getElementsByClassName("warning");

function checkEmpty(val){
    if(val == ""){
        alert("Box tidak boleh ada yang kosong");
    }
}

emails.addEventListener("input", (e) => {
    let forms = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let value = e.target.value;
    checkEmpty(value);
    //console.log(forms.test("luqman.hadi85@gmail.com"));
    if(!forms.test(value)){
        console.log("salah");
        warning[0].classList.remove("hidden");
    }
    else{
        warning[0].classList.add("hidden");
    }
});

passwords.addEventListener("input", (e) => {
    let value = e.target.value;
    console.log(value);
    checkEmpty(value);
    if(value.length < 6){
        //console.log("Kurang hayo");
        warning[1].classList.remove("hidden");
    }
    else{
        warning[1].classList.add("hidden");
    }
})