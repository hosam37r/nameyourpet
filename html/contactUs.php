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

<div class="navbarMain">
        <div class="navbarDog"><img src = "images/dog.png" ></div>
        <div class="navbarIndex"><a href = "index.php">Home</a> <!-- fill in your url to the page --></div>
        <div class="navbarCat"><img src = "images/cat.png" ></div>
        <div class="navbarResources"><a href = "resources.html">Resources</a> <!-- fill in your url to the page --></div>
        <div class="navbarIguana"><img src = "images/iguana.png"></div>
        <div class="navbarTrending"><a href = "TrendingPetNames.php">Trending</a> <!-- fill in your url to the page --></div>
        <div class="navbarFish"><img src = "images/fish.png" ></div>
        <div class="navbarContact"><a href = "ContactUs.php">Contact Us</a> <!-- fill in your url to the page --></div>
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
    <img onclick = "submitOne();" src = "images/star.png" style = "height:5%;width:10%;cursor:pointer;" id = "starOne" onmouseover="oneStar();" onmouseout="clearStars();">
    <img onclick = "submitTwo();" src = "images/star.png" style = "height:5%;width:10%;cursor:pointer;" id = "starTwo" onmouseover="twoStar();" onmouseout="clearStars();">
    <img  onclick = "submitThree();" src = "images/star.png" style = "height:5%;width:10%;cursor:pointer;" id = "starThree" onmouseover="threeStar();" onmouseout="clearStars();">
    <img onclick = "submitFour();" src = "images/star.png" style = "height:5%;width:10%;cursor:pointer;" id = "starFour" onmouseover="fourStar();" onmouseout="clearStars();">
    <img  onclick = "submitFive();" src = "images/star.png" style = "height:5%;width:10%;cursor:pointer;" id = "starFive" onmouseover="fiveStar();" onmouseout="clearStars();">
    <img src = "images/bluestar.png" style = "height:5%;width:10%;cursor:pointer;" id = "hiddenStarOne" class = "hidden">
    <img src = "images/bluestar.png" style = "height:5%;width:10%;cursor:pointer;" id = "hiddenStarTwo" class = "hidden">
    <img src = "images/bluestar.png" style = "height:5%;width:10%;cursor:pointer;" id = "hiddenStarThree" class = "hidden">
    <img src = "images/bluestar.png" style = "height:5%;width:10%;cursor:pointer;" id = "hiddenStarFour" class = "hidden">
    <img src = "images/bluestar.png" style = "height:5%;width:10%;cursor:pointer;" id = "hiddenStarFive" class = "hidden">
    <br>
    <button class = "button" style = "" onclick = "submitFeedbacks()" Submit>Submit</button>
</div>
  
<div class="footerMain">
    <div class="footerTop1"><h3 >We are committed to naming pets</h3>
        <p >Feel free to take our quiz and use the results to name your awesome pet.  Leave us some feedback about how great our web site is!<p></p>
    </div>
    <div class="footerTop2">
        <a href = "https://www.facebook.com"> <img src = "images/fb.jpg" ></a>
    <a href = "https://www.instagram.com"> <img src = "images/ig.jpg"></a>
    <a href = "https://www.pinterest.com"> <img src = "images/pn.jpg" ></a>
    <a href = "https://www.reddit.com"> <img src = "images/rd.jpg" ></a>
    <a href = "https://www.tiktok.com"> <img src = "images/tt.jpg" ></a>
    <a href = "https://www.twitter.com"> <img src = "images/tw.jpg" ></a>
    </div>
    <div class="footerTop3"></div><!--Placeholder for top right side of footer-->
    <div class="footerBottom1"> </div><!--Placeholder for bottom left side of footer-->
    <div class="footerBottom2"><h3 >Share Us!</h3></div>
    <div class="footerBottom3"></div><!--Placeholder for bottom right side of footer-->
</div>
    
        <script type="text/JavaScript">        
document.getElementById('starOne').onmouseover=function(){oneStar();};
document.getElementById('starTwo').onmouseover=function(){twoStar();};
document.getElementById('starThree').onmouseover=function(){threeStar();};
document.getElementById('starFour').onmouseover=function(){fourStar();};
document.getElementById('starFive').onmouseover=function(){fiveStar();};
function fiveStar(){
    fourStar();
    document.getElementById('starFive').src = "images/bluestar.png";
}
function fourStar(){
    threeStar();
    document.getElementById('starFour').src = "images/bluestar.png";
}
function threeStar(){
    twoStar();
    document.getElementById('starThree').src = "images/bluestar.png";
}
function twoStar(){
    oneStar();
    document.getElementById('starTwo').src = "images/bluestar.png";
}
function oneStar(){
    document.getElementById('starOne').src = "images/bluestar.png";
}
function clearStars(){
    document.getElementById('starOne').src = "images/star.png";
    document.getElementById('starTwo').src = "images/star.png";
    document.getElementById('starThree').src = "images/star.png";
    document.getElementById('starFour').src = "images/star.png";
    document.getElementById('starFive').src = "images/star.png";
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

function submitFeedbacks(){
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var response = document.getElementById("texts").value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        }
    };
    xmlhttp.open("GET","nameurpet.com/addFeedback.php?fname="+fname+"&email="+email+"&phone="+phone+"&response="+response,true);
    xmlhttp.send();
    document.getElementById("fname").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("phone").value = " ";
    document.getElementById("texts").value = " ";
    alert("Thank you for your feedback, we will get back to you when we feel like it!");

}
</script>
</body>
</html>
