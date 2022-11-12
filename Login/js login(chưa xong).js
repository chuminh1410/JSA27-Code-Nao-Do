function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;

    if(u== "") {
        alert("vui lòng nhập tài khoản")}
    else if(u=="dangnhapspotify"){
     
    }
  
    
    if(p1 == "") {
    alert("vui lòng nhập mật khẩu");
    return false;
    }
    else if(p1=="123456789"){
        window.location="https://github.com/nam2006/bu-i-1"
    }
    
  
    alert("thông tin chính xác!")
     
    return true;
}
