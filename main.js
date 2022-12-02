let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let fullname = id("fullname"),
    password = id("password"),
    email = id("email"),
    phone = id("phone"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
   
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        engine(username, 0, "Ten dang nhap khong hop le");
        engine(email, 1, "Email khong hop le");
        engine(password, 4, "mat khau khong hop le");
        engine(password, 5,"Mat khau khong khop");
        engine(phone, 2, "so dien thoai khong hop le")
    });
    let engine = (id, serial, message) => {
        if(id.value.trim()==="") {
            errorMsg[serial].innerHTML = message;
            id.style.border="2px solid red";
            failureIcon[serial].style.opacity="1";
            successIcon[serial].style.opacity="0";
        } else {
            errorMsg[serial].innerHTML="";
            id.style.border="2px solid green";
            failureIcon[serial].style.opacity="0";
            successIcon[serial].style.opacity="1";
        }
    }