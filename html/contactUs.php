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

    <img src = "../Only_USE_THIS_THEME/doggoWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">

    <a href = "index.html"><button class = "headerBut">Home</button></a> <!-- fill in your url to the page -->

    <img src = "../Only_USE_THIS_THEME/kittyWEBKIT.jpg" style = "position:relative;float:left;width:5%;height:100%;">

    <a href = "contactUs.php"><button class = "headerBut">Contact Us</button></a> <!-- fill in your url to the page -->

    <img src = "../Only_USE_THIS_THEME/iguanaWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">

    <a href = "TrendingPetNames.php"><button class = "headerBut">Trending</button></a> <!-- fill in your url to the page -->

    <img src = "../Only_USE_THIS_THEME/fishWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">



</div>


<div id = "center">
    <h3 id = "centerPageHeader">Contact Us</h3>  <!-- Page Heading Here -->
</div>
 
<!-- can put main stuff here, make div larger by editing universal style the id called centerPageHeader  -->
<div id = "leftBar">
    <!--<h3 style = "position:absolute;left:5%;top:5%;font-size:1.5em;" >Email Us</h3>-->
    <h3>Email Us</h3>
    <form>
        <input type="text" id="fname" name="fname" placeholder="full name" style = ""><p></p>
        <input type="text" id="email" name="email" placeholder="email" style = ""><p></p>
        <input type="text" id="phone" name="phone" placeholder="phone number" style = ""><p></p>
        <input type="text" id="texts" name="texts" placeholder="send us a message" style = ""><p></p>
    </form>

    <h3 style = "">Rate Us</h3>
    <img onclick = "submitOne();" src = "../Only_USE_THIS_THEME/star.png" style = "height:5%;width:10%;cursor:pointer;" id = "starOne" onmouseover="oneStar();" onmouseout="clearStars();">
    <img onclick = "submitTwo();" src = "../Only_USE_THIS_THEME/star.png" style = "height:5%;width:10%;cursor:pointer;" id = "starTwo" onmouseover="twoStar();" onmouseout="clearStars();">
    <img  onclick = "submitThree();" src = "../Only_USE_THIS_THEME/star.png" style = "height:5%;width:10%;cursor:pointer;" id = "starThree" onmouseover="threeStar();" onmouseout="clearStars();">
    <img onclick = "submitFour();" src = "../Only_USE_THIS_THEME/star.png" style = "height:5%;width:10%;cursor:pointer;" id = "starFour" onmouseover="fourStar();" onmouseout="clearStars();">
    <img  onclick = "submitFive();" src = "../Only_USE_THIS_THEME/star.png" style = "height:5%;width:10%;cursor:pointer;" id = "starFive" onmouseover="fiveStar();" onmouseout="clearStars();">

    <img src = "../Only_USE_THIS_THEME/bluestar.png" style = "height:5%;width:10%;cursor:pointer;" id = "hiddenStarOne" class = "hidden">
    <img src = "../Only_USE_THIS_THEME/bluestar.png" style = "height:5%;width:10%;cursor:pointer;" id = "hiddenStarTwo" class = "hidden">
    <img src = "../Only_USE_THIS_THEME/bluestar.png" style = "height:5%;width:10%;cursor:pointer;" id = "hiddenStarThree" class = "hidden">
    <img src = "../Only_USE_THIS_THEME/bluestar.png" style = "height:5%;width:10%;cursor:pointer;" id = "hiddenStarFour" class = "hidden">
    <img src = "../Only_USE_THIS_THEME/bluestar.png" style = "height:5%;width:10%;cursor:pointer;" id = "hiddenStarFive" class = "hidden">

    <br>
    <button class = "button" style = "">Submit</button>
</div>
  

<div style = "position:fixed;left:0%;bottom:0%;width:100%;height:15%;background-color:rgb(214, 214, 214);border:solid 1px blue;"><!-- footer  -->

        <h3 style = "position:absolute;left:5%;top:2%;">We are committed to naming pets</h3>
        <p style = "position:absolute;left:5%;top:26%;width:15%;">Feel free to take our quiz and use the results to name your awesome pet.  Leave us some feedback about how great our web site is!<p> 

        <a href = "https://www.facebook.com"> <img src = "../Only_USE_THIS_THEME/fb.jpg" style = "position:absolute;left:41%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.instagram.com"> <img src = "../Only_USE_THIS_THEME/ig.jpg" style = "position:absolute;left:45%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.pinterest.com"> <img src = "../Only_USE_THIS_THEME/pn.jpg" style = "position:absolute;left:49%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.reddit.com"> <img src = "../Only_USE_THIS_THEME/rd.jpg" style = "position:absolute;left:53%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.tiktok.com"> <img src = "../Only_USE_THIS_THEME/tt.jpg" style = "position:absolute;left:57%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.twitter.com"> <img src = "../Only_USE_THIS_THEME/tw.jpg" style = "position:absolute;left:61%;top:20%;width:2%;height:20%;"></a>
        <h3 style = "position:absolute;left:50%;bottom:20%;">Share Us!</h3>
    
    </div>
        <script type="text/JavaScript">


document.getElementById('starOne').onmouseover=function(){oneStar();};
document.getElementById('starTwo').onmouseover=function(){twoStar();};
document.getElementById('starThree').onmouseover=function(){threeStar();};
document.getElementById('starFour').onmouseover=function(){fourStar();};
document.getElementById('starFive').onmouseover=function(){fiveStar();};

function fiveStar(){
    fourStar();
    document.getElementById('starFive').src = "../Only_USE_THIS_THEME/bluestar.png";
}

function fourStar(){
    threeStar();
    document.getElementById('starFour').src = "../Only_USE_THIS_THEME/bluestar.png";
}

function threeStar(){
    twoStar();
    document.getElementById('starThree').src = "../Only_USE_THIS_THEME/bluestar.png";
}

function twoStar(){
    oneStar();
    document.getElementById('starTwo').src = "../Only_USE_THIS_THEME/bluestar.png";
}

function oneStar(){
    document.getElementById('starOne').src = "../Only_USE_THIS_THEME/bluestar.png";
}

function clearStars(){
    document.getElementById('starOne').src = "../Only_USE_THIS_THEME/star.png";
    document.getElementById('starTwo').src = "../Only_USE_THIS_THEME/star.png";
    document.getElementById('starThree').src = "../Only_USE_THIS_THEME/star.png";
    document.getElementById('starFour').src = "../Only_USE_THIS_THEME/star.png";
    document.getElementById('starFive').src = "../Only_USE_THIS_THEME/star.png";
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
