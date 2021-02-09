<!DOCTYPE html>
<html>
<head>


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="universalStyle.css">


<style>



</style>


</head>
<body>


<?php
    include_once 'header.php';
?>



<div id = "center">
    <h3 id = "centerPageHeader">Contact Us</h3>  <!-- Page Heading Here -->

 
</div>

<div id = "leftBar">
    <h3 style = "position:absolute;left:5%;top:5%;font-size:1.5em;" >Email Us</h3>
    <form>
        <input type="text" id="fname" name="fname" value="full name" style = "position:absolute;top:12%;width:100%;"><br>
        <input type="text" id="email" name="email" value="email" style = "position:absolute;top:22%;width:100%;">
        <input type="text" id="phone" name="phone" value="phone number" style = "position:absolute;top:32%;width:100%;">
        <input type="text" id="texts" name="texts" value="send us a message" style = "position:absolute;top:42%;width:100%;height:20%;">
    </form>

    <h3 style = "position:absolute;left:35%;top:65%;">Rate Us</h3>
    <img onclick = "submitOne()" src = "images/star.jpg" style = "position:absolute;left:16%;top:70%;height:7%;width:10%;" id = "starOne" onmouseover="oneStar();" onmouseout="clearStars();">
    <img onclick = "submitTwo();" src = "images/star.jpg" style = "position:absolute;left:28%;top:70%;height:7%;width:10%;" id = "starTwo" onmouseover="twoStar();" onmouseout="clearStars();">
    <img  onclick = "submitThree();" src = "images/star.jpg" style = "position:absolute;left:40%;top:70%;height:7%;width:10%;" id = "starThree" onmouseover="threeStar();" onmouseout="clearStars();">
    <img onclick = "submitFour();" src = "images/star.jpg" style = "position:absolute;left:52%;top:70%;height:7%;width:10%;" id = "starFour" onmouseover="fourStar();" onmouseout="clearStars();">
    <img  onclick = "submitFive();" src = "images/star.jpg" style = "position:absolute;left:64%;top:70%;height:7%;width:10%;" id = "starFive" onmouseover="fiveStar();" onmouseout="clearStars();">

    <img src = "images/bluestar.jpg" style = "position:absolute;left:16%;top:70%;height:7%;width:10%;" id = "hiddenStarOne" class = "hidden">
    <img src = "images/bluestar.jpg" style = "position:absolute;left:28%;top:70%;height:7%;width:10%;" id = "hiddenStarTwo" class = "hidden">
    <img src = "images/bluestar.jpg" style = "position:absolute;left:40%;top:70%;height:7%;width:10%;" id = "hiddenStarThree" class = "hidden">
    <img src = "images/bluestar.jpg" style = "position:absolute;left:52%;top:70%;height:7%;width:10%;" id = "hiddenStarFour" class = "hidden">
    <img src = "images/bluestar.jpg" style = "position:absolute;left:64%;top:70%;height:7%;width:10%;" id = "hiddenStarFive" class = "hidden">


    <button class = "button" style = "position:absolute;left:68%;top:84%;width:29%;"> Submit </button>
</div>



<?php
    include_once 'footer.php';
?>

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
