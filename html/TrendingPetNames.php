<?php
    include_once 'header.php';
?>

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
<h2>Trending Pet Names in 2021</h2>
<br>
<br>



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
</div>
<?php
    include_once 'footer.php';
?>
