function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "preshitsinha18@gmail.com",
        Password : "Preshit@18",
        To : 'preshitsinha@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact form Enquiry",
        Body : "Name: "+document.getElementById("name").value
            +"<br>Email: "+document.getElementById("email").value
            +"<br>Phone No.: "+document.getElementById("number").value
            +"<br>Message: "+document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}
const[toggle,setToggle]=usestate(false);
{
  toggle ?
  <AiOutlineClose onClick={()=>setToggle(!toggle)} class="text-5xl pt-4 md:hidden block"/>
  :
  <AiOutlineMenu onClick={()=>setToggle(!toggle)} class="text-5xl pt-4 md:hidden block"/>
}