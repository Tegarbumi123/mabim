function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "Tegar" && password =="Tegar"){
            if(confirm("Apakah anda ingin login?") == true){
                window.location.href = "https://github.com/Tegarbumi123/mabim-fasilkom"
            } else {
                alert("Login dibatalkan karena salah password!");
            }
            
    } else{
            if (done == 0) {
                alert("Username/Pasword Salah");
            }
    }
} 