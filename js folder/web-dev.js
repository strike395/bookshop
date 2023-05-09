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

function submitPayment(event) {
  event.preventDefault(); 
  var cardname = document.getElementById("cardname").value;
  var cardnumber = document.getElementById("cardnumber").value;
  var expmonth = document.getElementById("expmonth").value;
  var expyear = document.getElementById("expyear").value;
  var cvv = document.getElementById("cvv").value;

  if (cardname == "" || cardnumber == "" || expmonth == "" || expyear == "" || cvv == "") {
    alert("Please fill in all fields.");
  } else if (cardnumber.length != 19) {
    alert("Please enter a valid card number.");
  } else if (cvv.length != 3) {
    alert("Please enter a valid CVV.");
  } else if (!/^5[1-5]/.test(cardnumber)) { 
    alert("We only accept Mastercard for payment.");
  } else {
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "payment.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        if (this.responseText == "success") {
          alert("Payment successful!");
          window.location.href = "./index.html";
        } else {
          alert("Payment failed. Please try again later.");
        }
      }
    };
    var data = "cardname=" + encodeURIComponent(cardname) + "&cardnumber=" + encodeURIComponent(cardnumber) + "&expmonth=" + encodeURIComponent(expmonth) + "&expyear=" + encodeURIComponent(expyear) + "&cvv=" + encodeURIComponent(cvv);
    xhr.send(data);
  }
}

  


