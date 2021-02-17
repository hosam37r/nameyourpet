<!DOCTYPE html>

<html lang="en">
<head>
    <!-- Fonts -->
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">

<!-- cssPage -->
<link rel="stylesheet" href="universalStyle.css">

</head>   
<body>
    
<div style = "position:fixed;top:0%;height:6%;left:0%;width:99.8%;background-color:rgb(214, 214, 214);border:solid 1px blue;"><!-- Header  -->
 <img src = "images/doggoWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">

<a href = " "><button class = "headerBut">Home</button></a> <!-- fill in your url to the page -->
<img src = "images/kittyWEBKIT.jpg" style = "position:relative;float:left;width:5%;height:100%;">
    
<a href = "contactUs.html"><button class = "headerBut">Contact Us</button></a> <!-- fill in your url to the page -->
    
<img src = "images/iguanaWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">
<a href = " "><button class = "headerBut">Index</button></a> <!-- fill in your url to the page -->
    
<img src = "images/doggoWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">
<a href = " "><button class = "headerBut">Trending</button></a> <!-- fill in your url to the page -->
<img src = "images/fishWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">
</div>
<span style="font-size:30px;cursor:pointer;position:relative;top:13%;" onclick="openNav()">&#9776; open</span><!-- side nav button  -->

<div id = "lowerNav">
    <h3 style = "position:absolute;left:1%;top:-50%;color:white;font-family: 'Josefin Sans', sans-serif;">Home ></h3>
</div>

<div id = "center">
    <h3 id = "centerPageHeader"> Trending Pet Names in 2021</h3>  <!-- Page Heading Here -->
    <table>
    <colgroup>
    <col class= "blue"/>
    <col class="pink"/>
    </colgroup>
    
  <tr>
    <th>Animal</th>
    <th>Male</th>
    <th>Female</th>
   
  </tr>
  <tr>
    <td>Dog</td>
    <td class="blue"><li>Tucker</li><li>Dakota</li><li>Jake</li><li>Bobbie</li><li>Pickle</li></td>
    
    <td class="pink"><li>Ripley<li>Gia</li><li>Bailey</li><li>Lola</li><li>Georgia</li></td>
   
  </tr>
    
  <tr>
    <td>Cat</td>
      <td class="blue"><li>Winston</li><li>Leo</li><li>Milo</li><li>Shadow</li><li>Oliver</li></td>
      
      <td class="pink"><li>Cleo</li><li>Missy</li><li>Shadow</li><li>Minnie</li><li>Bella</li></td>
  </tr>
  <tr>
      <td>Snake</td>
    <td class="blue"><li>Noodles</li><li>Slinky</li><li>Buttercup</li><li>Diablo</li><li>Jafaar</li></td>
    
    <td class="pink"><li>Medusa</li><li>Juniper</li><li>Cherry</li><li>Bindi</li><li>Severus</li></td>
  </tr>
  <tr>
      <td>Bunny</td>
    <td class="blue"><li>Thumper</li><li>Oreo</li><li>Whiskers</li><li>Drax</li><li>Midnight</li></td>
    
    <td class="pink"><li>Snowball</li><li>Rose</li><li>Luna</li><li>Gretta</li><li>Binky</li></td>
 
  </tr>
  <tr>
    <td>Fish</td>
      <td class="blue"><li>Nemo</li><li>Apollo</li><li>Bubbles</li><li>Pickle</li><li>Captain</li></td>
      
      <td class="pink"><li>Dori</li><li>Coral</li><li>Penny</li><li>Goldie</li><li>Jewel</li></td>
   
  </tr>
  <tr>
    <td>Bird</td>
    <td class="blue"><li>Mojo</li><li>Rico</li><li>Sky</li><li>Jay</li><li>Oscar</li></td>
    
    <td class="pink"><li>Tweetie</li><li>Kiwi</li><li>Tiki</li><li>Luna</li><li>Skye</li></td>
  </tr>

</table>
    
<!-- can put main stuff here, make div larger by editing universal style the id called centerPageHeader  -->
</div>

<style>

table, th, td {
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    padding-bottom: 70px;
   
    text-align: center;
    width: 500px;
}
    h2 {
        text-align: center;
       font-size: 35px;
        color: lightpink;
       
    }
 
    .backgroundImage {
        background-image: url(doggo.jpeg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
        background-position: center;
    }
    
    li {
        padding: 15px;
    }
    
    .top {
        border-style: solid;
        
    }
    
    .blue{
        background-color: lightblue;
    }
    
    .pink{
        background-color: lightpink;
    }
</style>
<div class="backgroundImage">
<br>
<br>
<br>
<br>
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
</script>
</body>
</html>
