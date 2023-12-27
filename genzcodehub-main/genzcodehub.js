
function addUser() {
    var checkBox = document.querySelector(".check");
    if (checkBox.checked == true) {
      user_name = document.getElementById("user_name").value;
      password = document.getElementById("password").value;
      localStorage.setItem("user_name", user_name);
                localStorage.setItem("password", password);
                  window.location = "guidlines.html";
    }
    else{
      alert("Invalid captcha.Kindly fill the captcha again.Copyright DPSTimes Team(operated by 7B)")
    }
    
     
  
  
     
    }
    
    
