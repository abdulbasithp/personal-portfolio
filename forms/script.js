function sendMail(params){
    let msg={
        from_name:document.getElementById("name").value,
        from_email:document.getElementById('email').value,
        subject:document.getElementById('subject').value,
        message:document.getElementById('message').value
    };
    emailjs.send("service_3dcmg7i","template_lzj3tid",msg).then((res)=>{
    alert("message send success.");
    document.getElementById('name')="",
    document.getElementById('email')="",
    document.getElementById('subject')="",
    document.getElementById('message')=""
    });
    
}