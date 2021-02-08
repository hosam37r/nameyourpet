<!DOCTYPE html>
<html>
<head>


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">



<style>
.w3-sidebar a {font-family: "Roboto", sans-serif}
body,h1,h2,h3,h4,h5,h6,.w3-wide {font-family: "Montserrat", sans-serif;}

.hidden{
    display:none;
}

</style>


</head>
<body>

<!--




    $.ajax({
    url: "http://localhost:8080/ ... a php file ... ?whatever variable you need=
    type: "GET",
    success: function (result) {
        }
            






    if(!isset($_SESSION)){
        session_start();
    }
-->
<?php

    include_once 'header.php';
    include_once 'footer.php';
    //session_destroy();
?>



<div id = "leftBar">
    <h3 style = "position:absolute;left:5%;top:20%;font-size:2.0em;" >Email Us</h3>
    <form>
        <input type="text" id="fname" name="fname" value="full name" style = "position:absolute;top:25%;width:25%;"><br>
        <input type="text" id="email" name="email" value="email" style = "position:absolute;top:30%;width:25%;">
        <input type="text" id="phone" name="phone" value="phone number" style = "position:absolute;top:35%;width:25%;">
        <input type="text" id="texts" name="texts" value="send us a message" style = "position:absolute;top:40%;width:25%;height:20%;">
    </form>

    <h3 style = "position:absolute;left:7%;top:63%;">Rate Us</h3>
    <img onclick = "submitOne()" src = "images/star.jpg" style = "position:absolute;left:4%;top:66%;height:3%;width:2%;" id = "starOne" onmouseover="oneStar();" onmouseout="clearStars();">
    <img onclick = "submitTwo();" src = "images/star.jpg" style = "position:absolute;left:6%;top:66%;height:3%;width:2%;" id = "starTwo" onmouseover="twoStar();" onmouseout="clearStars();">
    <img  onclick = "submitThree();" src = "images/star.jpg" style = "position:absolute;left:8%;top:66%;height:3%;width:2%;" id = "starThree" onmouseover="threeStar();" onmouseout="clearStars();">
    <img onclick = "submitFour();" src = "images/star.jpg" style = "position:absolute;left:10%;top:66%;height:3%;width:2%;" id = "starFour" onmouseover="fourStar();" onmouseout="clearStars();">
    <img  onclick = "submitFive();" src = "images/star.jpg" style = "position:absolute;left:12%;top:66%;height:3%;width:2%;" id = "starFive" onmouseover="fiveStar();" onmouseout="clearStars();">

    <img src = "images/bluestar.jpg" style = "position:absolute;left:4%;top:66%;height:3%;width:2%;" id = "hiddenStarOne" class = "hidden">
    <img src = "images/bluestar.jpg" style = "position:absolute;left:6%;top:66%;height:3%;width:2%;" id = "hiddenStarTwo" class = "hidden">
    <img src = "images/bluestar.jpg" style = "position:absolute;left:8%;top:66%;height:3%;width:2%;" id = "hiddenStarThree" class = "hidden">
    <img src = "images/bluestar.jpg" style = "position:absolute;left:10%;top:66%;height:3%;width:2%;" id = "hiddenStarFour" class = "hidden">
    <img src = "images/bluestar.jpg" style = "position:absolute;left:12%;top:66%;height:3%;width:2%;" id = "hiddenStarFive" class = "hidden">


    <button style = "position:absolute;left:18%;top:64%;background-color:blue;width:5%;"> Submit </button>
</div>

<div id = "center" style = "position:absolute;left:25%;top:20%;width:70%;height:100%;">
    <img src = "images/dogBackground.jpg" style = "position:absolute;height:60%;width:100%;">
</div>
    <h3 style = "color:white;position:absolute;left:30%;top:25%;font-size:2.5em"> Contact Us </h3>

 


<script>

document.getElementById('starOne').onmouseover=function(){oneStar();};
document.getElementById('starTwo').onmouseover=function(){twoStar();};
document.getElementById('starThree').onmouseover=function(){threeStar();};
document.getElementById('starFour').onmouseover=function(){fourStar();};
document.getElementById('starFive').onmouseover=function(){fiveStar();};

function fiveStar(){
    fourStar();
    document.getElementById('starFive').src = "images/bluestar.jpg";
}

function fourStar(){
    threeStar();
    document.getElementById('starFour').src = "images/bluestar.jpg";
}

function threeStar(){
    twoStar();
    document.getElementById('starThree').src = "images/bluestar.jpg";
}

function twoStar(){
    oneStar();
    document.getElementById('starTwo').src = "images/bluestar.jpg";
}

function oneStar(){
    document.getElementById('starOne').src = "images/bluestar.jpg";
}

function clearStars(){
    document.getElementById('starOne').src = "images/star.jpg";
    document.getElementById('starTwo').src = "images/star.jpg";
    document.getElementById('starThree').src = "images/star.jpg";
    document.getElementById('starFour').src = "images/star.jpg";
    document.getElementById('starFive').src = "images/star.jpg";
}
function eraseStars(){
    document.getElementById("starOne").classList.add("hidden");
    document.getElementById("starTwo").classList.add("hidden");
    document.getElementById("starThree").classList.add("hidden");
    document.getElementById("starFour").classList.add("hidden");
    document.getElementById("starFive").classList.add("hidden");
}

function submitOne(){
    eraseStars();
    document.getElementById("hiddenStarOne").classList.remove("hidden");
}
function submitTwo(){
    submitOne();
    document.getElementById("hiddenStarTwo").classList.remove("hidden");
}
function submitThree(){
    submitTwo();
    document.getElementById("hiddenStarThree").classList.remove("hidden");
}
function submitFour(){
    submitThree();
    document.getElementById("hiddenStarFour").classList.remove("hidden");
}
function submitFive(){
    submitFour();
    document.getElementById("hiddenStarFive").classList.remove("hidden");
}

</script>
</body>
</html>
