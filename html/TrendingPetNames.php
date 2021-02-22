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

    <img src = "doggoWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">
    <a href = " "><button class = "headerBut">Home</button></a> <!-- fill in your url to the page -->
    <img src = "kittyWEBKIT.jpg" style = "position:relative;float:left;width:5%;height:100%;">
    <a href = ""><button class = "headerBut">Contact Us</button></a> <!-- fill in your url to the page -->
    <img src = "iguanaWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">
    <a href = ""><button class = "headerBut">Index</button></a> <!-- fill in your url to the page -->
    <img src = "doggoWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">
    <a href = ""><button class = "headerBut">Trending</button></a> <!-- fill in your url to the page -->
    <img src = "fishWEBKIT.png" style = "position:relative;float:left;width:5%;height:100%;">
</div>


<div id = "center">
    <h2 id = "centerPageHeader">Trending Pet Names in 2021</h2>  <!-- Page Heading Here -->
    
    <div class= "dog_male">
    <div class="option_list_male">
        <div class="option_male">
            <span><h2 style=" font-family: 'Pacifico', cursive;">Dogs</h2></span>
            <p>Male Names: </p>
            <li>Tucker</li>
            <li>Dakota</li>
            <li>Jake</li>
            <li>Bobbie</li>
            <li>Pickle</li>
        </div>
    <div class="dog_female">
    <div class="option_list_female">
        <div class="option_female">
            <span><h2 style=" font-family: 'Pacifico', cursive;">Dogs</h2></span>
            <p>Female Names: </p>
            <li>Ripley</li>
            <li>Gia</li>
            <li>Bailey</li>
            <li>Lola</li>
            <li>Georgia</li>
        </div>
        </div>
        </div>
        </div>
    </div>
    
<!-- 
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

    h2 {
        text-align: center;
        font-size: 35px;
       
    }
    
    #center{
        position:fixed;
        left:5%;
        height: 100%;
        margin-left: 0;
        margin-right; 0;
        font-size:1.5em;
        
        <!-- width: 100%; -->
       
    }
 
    .backgroundImage {
        background-image: url(doggo.jpeg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
        background-position: center;
    }
    
    .top {
        border-style: solid;
        
    }

    .dog {
       position:absolute;
       margin:0; 
       margin-top:0; 
       margin-left:30px;
       font-size: 0.8em;
    }
    

    .option_list_male .option_male {
    background: aliceblue;
    border: 1px solid #84c5fe;
    border-radius: 5px;
    padding: 8px 15px;
    margin-bottom: 15px;
    font-size: 17px;
    justify-content: space-between;
    margin-left: 30px;
    margin-top: 10px;
    cursor: pointer;
    font-family: 'Pacifico', cursive; 
    }
    
    .option_list_female .option_female {
    background: lavenderblush;
    border: 1px solid #ff69b4;
    border-radius: 5px;
    padding: 8px 15px;
    margin-bottom: 15px;
    font-size: 17px;
    justify-content: space-between;
    margin-left: 30px;
    margin-top: 10px;
    cursor: pointer;
    font-family: 'Pacifico', cursive; 
    }
    
    li{
        list-style-type: circle;
    }
    
    .option_list_male, option_list_female {
        padding: 5px;
        margin: 5px;
        display: flex;
        float: left;
    }
</style>
<script>
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
</script>
<div class="backgroundImage">
<br>
<br>
<br>
<br>
</div>
<div id="mySidenav" class="sidenav"><!-- Side Nav  -->
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  </div>
  

<div style = "position:fixed;left:0%;bottom:0%;width:100%;height:15%;background-color:rgb(214, 214, 214);border:solid 1px blue;"><!-- footer  -->

        <h3 style = "position:absolute;left:5%;top:2%;">We are committed to naming pets</h3>
        <p style = "position:absolute;left:5%;top:26%;width:15%;">Feel free to take our quiz and use the results to name your awesome pet.  Leave us some feedback about how great our web site is!<p> 

        <a href = "https://www.facebook.com"> <img src = "fb.jpg" style = "position:absolute;left:41%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.instagram.com"> <img src = "ig.jpg" style = "position:absolute;left:45%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.pinterest.com"> <img src = "pn.jpg" style = "position:absolute;left:49%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.reddit.com"> <img src = "rd.jpg" style = "position:absolute;left:53%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.tiktok.com"> <img src = "tt.jpg" style = "position:absolute;left:57%;top:20%;width:2%;height:20%;"></a>
        <a href = "https://www.twitter.com"> <img src = "tw.jpg" style = "position:absolute;left:61%;top:20%;width:2%;height:20%;"></a>
        <h3 style = "position:absolute;left:50%;bottom:20%;">Share Us!</h3>

    </div>
</body>
</html>
