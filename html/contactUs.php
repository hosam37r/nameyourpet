<!DOCTYPE html>
<html>
<head>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">

<!-- cssPage -->
<link rel="stylesheet" href="universalStyle.css">



<!--
    All the images should be put into a seperate folder labelled "images"
-->

<style>



</style>
</head>
<body>

<div style = "position:fixed;top:0%;height:6%;left:0%;width:99.8%;background-color:rgb(214, 214, 214);border:solid 1px blue;"><!-- Header  -->

    <img src = "images/doggoWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">

    <a href = " "><button class = "headerBut">Home</button></a> <!-- fill in your url to the page -->

    <img src = "images/kittyWEBKIT.jpg" style = "position:relative;float:left;width:5%;height:100%;">

    <a href = ""><button class = "headerBut">Contact Us</button></a> <!-- fill in your url to the page -->

    <img src = "images/iguanaWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">

    <a href = ""><button class = "headerBut">Index</button></a> <!-- fill in your url to the page -->

    <img src = "images/doggoWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">

    <a href = ""><button class = "headerBut">Trending</button></a> <!-- fill in your url to the page -->

    <img src = "images/fishWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">



</div>
<span style="font-size:30px;cursor:pointer;position:relative;top:13%;" onclick="openNav()">&#9776; open</span><!-- side nav button  -->

<div id = "lowerNav">
    <h3 style = "position:absolute;left:1%;top:-50%;color:white;font-family: 'Josefin Sans', sans-serif;">Home </h3>
</div>

<div id = "center">
    <h3 id = "centerPageHeader">Contact Us</h3>  <!-- Page Heading Here -->
</div>
 
<!-- can put main stuff here, make div larger by editing universal style the id called centerPageHeader  -->
<div id = "leftBar">
    <!--<h3 style = "position:absolute;left:5%;top:5%;font-size:1.5em;" >Email Us</h3>-->
    <h3>Email Us</h3>
    <form>
        <input type="text" id="fname" name="fname" value="full name" style = ""><p></p>
        <input type="text" id="email" name="email" value="email" style = ""><p></p>
        <input type="text" id="phone" name="phone" value="phone number" style = ""><p></p>
        <input type="text" id="texts" name="texts" value="send us a message" style = ""><p></p>
    </form>

    <h3 style = "">Rate Us</h3>
    <img onclick = "submitOne()" src = "images/star.png" style = "height:7%;width:10%;" id = "starOne" onmouseover="oneStar();" onmouseout="clearStars();">
    <img onclick = "submitTwo();" src = "images/star.png" style = "height:7%;width:10%;" id = "starTwo" onmouseover="twoStar();" onmouseout="clearStars();">
    <img  onclick = "submitThree();" src = "images/star.png" style = "height:7%;width:10%;" id = "starThree" onmouseover="threeStar();" onmouseout="clearStars();">
    <img onclick = "submitFour();" src = "images/star.png" style = "height:7%;width:10%;" id = "starFour" onmouseover="fourStar();" onmouseout="clearStars();">
    <img  onclick = "submitFive();" src = "images/star.png" style = "height:7%;width:10%;" id = "starFive" onmouseover="fiveStar();" onmouseout="clearStars();">

    <img src = "images/bluestar.png" style = "height:7%;width:10%;" id = "hiddenStarOne" class = "hidden">
    <img src = "images/bluestar.png" style = "height:7%;width:10%;" id = "hiddenStarTwo" class = "hidden">
    <img src = "images/bluestar.png" style = "height:7%;width:10%;" id = "hiddenStarThree" class = "hidden">
    <img src = "images/bluestar.png" style = "height:7%;width:10%;" id = "hiddenStarFour" class = "hidden">
    <img src = "images/bluestar.png" style = "height:7%;width:10%;" id = "hiddenStarFive" class = "hidden">


    <button class = "button" style = ""> Submit </button>
</div>


</div>


<div id="mySidenav" class="sidenav"><!-- Side Nav  -->
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>




    <h3>Sample Text</h3>





  </div>
  

<div style = "position:fixed;left:0%;bottom:0%;width:100%;height:15%;background-color:rgb(214, 214, 214);border:solid 1px blue;"><!-- footer  -->

        <h3 style = "position:absolute;left:5%;top:2%;">We are committed to naming pets</h3>
        <p style = "position:absolute;left:5%;top:26%;width:15%;">Feel free to take our quiz and use the results to name your awesome pet.  Leave us some feedback about how great our web site is!<p> 

        <a href = "https://www.facebook.com"> <img src = "images/fb.jpg" style = "position:absolute;left:41%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.instagram.com"> <img src = "images/ig.jpg" style = "position:absolute;left:45%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.pinterest.com"> <img src = "images/pn.jpg" style = "position:absolute;left:49%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.reddit.com"> <img src = "images/rd.jpg" style = "position:absolute;left:53%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.tiktok.com"> <img src = "images/tt.jpg" style = "position:absolute;left:57%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.twitter.com"> <img src = "images/tw.jpg" style = "position:absolute;left:61%;top:20%;width:2%;height:20%;"></a>
        <h3 style = "position:absolute;left:50%;bottom:20%;">Share Us!</h3>

<script>

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


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
