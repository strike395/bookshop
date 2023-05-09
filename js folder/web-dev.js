function toggleNav()
 {

  var sidebar = document.getElementById("mySidebar");
  var togglebtn = document.querySelector(".togglebtn");

  if (sidebar.style.width === "250px") 
  {
    sidebar.style.width = "0";
    togglebtn.style.display = "block";
  } else
   {
    sidebar.style.width = "250px";
    togglebtn.style.display = "none";
  }
}


function validation(){          
  var cardN = document.getElementById("cardNumber").value;     
  var m = document.getElementById("exp-month").value;     
  var y = document.getElementById("exp-year").value;  
  var c = document.getElementById("cvv").value;  

  if (!/^5[1-5][0-9]{14}$/.test(cardN)){  
      document.getElementById("message").innerHTML = "wrong Card Number"} 
  else if (m < 1 || m > 12) {document.getElementById("message").innerHTML = "Invalid month";} 
  else if (y < new Date().getFullYear() || y > new Date().getFullYear() + 10) {document.getElementById("message").innerHTML = "Invalid year";} 
 else if(!/^\d{3,4}$/.test(c)) {
      document.getElementById("message").innerHTML = "Invalid CVV";} 
      else {
      const url = 'https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard';

      const data = {
       master_card: cardN,
       exp_month: m,
       exp_year: y,
       cvv_code: c

      };

      fetch(url, {

      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-type': 'application/JSON'}
      })

     .then(response =>{
     if (response.ok){
      document.getElementById("message").innerHTML = " Thank you For your Payement"
      window.location.replace("./success.html")
      
     }
      else {
      document.getElementById("message").innerHTML = " Error"

      }
      function go(){
          window.location.replace("./success.html")}
      
     })
}}
