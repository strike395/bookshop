
<?php
$servername = "mudfoot.doc.stu.mmu.ac.uk";
$username = "username";
$password = "password";
$dbname = "db_name";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$cardname = $_POST['cardname'];
$cardnumber = $_POST['cardnumber'];
$expmonth = $_POST['expmonth'];
$expyear = $_POST['expyear'];
$cvv = $_POST['cvv'];

$sql = "INSERT INTO payments (cardname, cardnumber, expmonth, expyear, cvv) VALUES ('$cardname', '$cardnumber', '$expmonth', '$expyear', '$cvv')";
if ($conn->query($sql) === TRUE) {  
    echo "<script>alert('Payment successful!'); window.location.href='./index.html';</script>";
} else {
    echo "<script>alert('Payment failed. Please try again later.'); window.location.href='./payment.html';</script>";
}
$conn->close();

$stmt=$conn->prepare($sql)
$stmt->execute
?>
