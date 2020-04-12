function Validation()
    {
      if (document.getElementById("t1").value=="")
      {
        alert("Please proveide your First name!");
        document.getElementById('t1').focus();
        return false;
      }
      if (document.getElementById("t2").value=="")
      {
        alert("Please proveide your Last Name!");
        document.getElementById('t2').focus();
        return false;
      }
      if (document.getElementById("t3").value=="")
      {
        alert("Please proveide your mobile number!");
        document.getElementById('t3').focus();
        return false;
      }
      if (isNAN(document.getElementById("t3").value))
      {
        alert("It is not a valid number");
        document.getElementById('t3').focus();
        return false;
      }
      if (document.getElementById("t3").value.lenght<10)
      {
        alert("Please proveide your mobile number!");
        document.getElementById('t3').focus();
        return false;
      }
      if (document.getElementById("t4").value=="")
      {
        alert("Please proveide your E-Mail!");
        document.getElementById('t4').focus();
        return false;
      }
      if (document.getElementById("t5").value.lenght<8)
      {
        alert("Password must contain atleast 8 digits!");
        document.getElementById('t5').focus();
        return false;
      }
      if (document.getElementById("t5").value=="")
      {
        alert("Please enter confirm password!");
        document.getElementById('t5').focus();
        return false;
      }
      if (document.getElementById("t5").value.lenght<8)
      {
        alert("Password must contain atleast 8 digits!");
        document.getElementById('t5').focus();
        return false;
      }
      return(true);
    }
  
function myFunction() 
{
  alert("TICKET BOOKED!");
}