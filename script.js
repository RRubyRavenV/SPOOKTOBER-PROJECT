//note global variables with string of image links needed
//note to self copy paste whole html
var l=0;
var m=0;
var n=0;
var o=0;
var points = 0;
var lives = 3;
var isAlive;
var y;
var charPool=[1,2,3,4,5];
var pool=[1,2,3,4,5];
charPool.sort(function(a, b){return 0.5 - Math.random()});
      
      //autoplay music
      function music(){
        var x = document.getElementById('doorbell');
        x.play();
      }

      //the whole function for the play button
      function webstart(){
        music();
        document.getElementById('door').style.visibility='visible';
        document.getElementById('start').style.visibility='hidden';
        document.getElementById('heart1').style.visibility='visible';
        document.getElementById('heart2').style.visibility='visible';
        document.getElementById('heart3').style.visibility='visible';
        document.getElementById('choice1').style.visibility='hidden';
        document.getElementById('choice2').style.visibility='hidden';
        document.getElementById('choice3').style.visibility='hidden';
        document.getElementById('choice4').style.visibility='hidden';
        document.getElementById('score').style.visibility='visible';
        document.getElementById('instructions').innerHTML='<center><em>Click on the door to greet the trick or treater</em></center>';
      }
      
      //note: remember to add parameters and have itemSelection return a boolean for the pointSystem
      //note: remember to make a global variable for the rng of the game so it can be used by all functions
      //the life system comes out(hearts/instructions/score appears)

      function pointSystem(){
        if(isAlive==1){
          points+=1;
          document.getElementById('score').innerHTML=points;
          //could add a point cap to win game or let it run endlessly(first option probably better for small scale)
        }
        else{
          lives-=1;
          if(lives<3){
            document.getElementById('heart3').style.visibility='hidden';
          }
          if(lives<2){
            document.getElementById('heart2').style.visibility='hidden';
          }
          if(lives<1){
            document.getElementById('heart1').style.visibility='hidden';
          }
        }
        if(lives==0){
          //player dies(jumpscare(audio/visual)/virus prompts(if possible))
            document.getElementById('choice1').onclick=false;
            document.getElementById('choice2').onclick=false;
            document.getElementById('choice3').onclick=false;
            document.getElementById('choice4').onclick=false;
            jumpScare();
        }
        else if(points==5){
            document.getElementById('choice1').onclick=false;
            document.getElementById('choice2').onclick=false;
            document.getElementById('choice3').onclick=false;
            document.getElementById('choice4').onclick=false;
            victory();
        }
        else{
            rng();
            itemSelection();
        }
      }
      
      function victory(){
        document.getElementById('heart1').style.visibility='hidden';
        document.getElementById('heart2').style.visibility='hidden';
        document.getElementById('heart3').style.visibility='hidden';
        document.getElementById('choice1').style.visibility='hidden';
        document.getElementById('choice2').style.visibility='hidden';
        document.getElementById('choice3').style.visibility='hidden';
        document.getElementById('choice4').style.visibility='hidden';
        document.getElementById('score').style.visibility='hidden';
        document.getElementById('door').style.width="750px"
        document.getElementById('door').style.height="600px"
        document.getElementById('door').src="https://media1.tenor.com/images/cb54b977a3fd1c84baa2e0d5c2e17ced/tenor.gif?itemid=17103939"
        document.getElementById("doorbell").src = "Victory.mp3"
        music();
        document.getElementById('words').innerHTML='<center><em>YOU WIN</em></center>';
        document.getElementById('instructions').innerHTML='<center><em>GG</em></center>';
      }

      function jumpScare(){
        document.getElementById('heart1').style.visibility='hidden';
        document.getElementById('heart2').style.visibility='hidden';
        document.getElementById('heart3').style.visibility='hidden';
        document.getElementById('choice1').style.visibility='hidden';
        document.getElementById('choice2').style.visibility='hidden';
        document.getElementById('choice3').style.visibility='hidden';
        document.getElementById('choice4').style.visibility='hidden';
        document.getElementById('score').style.visibility='hidden';
        document.getElementById('door').style.width="750px"
        document.getElementById('door').style.height="600px"
        document.getElementById('door').src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c327453-d068-47ab-b450-6958dda97075/db0a74h-a1e79def-72f4-4ce9-9e48-42ab56c3c5c1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOGMzMjc0NTMtZDA2OC00N2FiLWI0NTAtNjk1OGRkYTk3MDc1XC9kYjBhNzRoLWExZTc5ZGVmLTcyZjQtNGNlOS05ZTQ4LTQyYWI1NmMzYzVjMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.PlRq03mspWGPNkc-KyF_kkGjIm2srDUXIBFXqQxAwCE"
        document.getElementById("doorbell").src = "Jumpscare.mp3"
        music();
        document.getElementById('words').innerHTML='<center><em>YOU ARE DEAD</em></center>';
        document.getElementById('instructions').innerHTML='<center><em>GG</em></center>';
      }

      //rng for random characters and their backgroud music
      function rng(){
        document.getElementById('instructions').innerHTML='<center><em>Click on the images to appease the killer</em></center>';
        y=charPool.pop();
        //y = (Math.floor(Math.random()*5)+1); broken code
        //need to add music for all characters
        //need to add killing pic for all characters on death
        if(y==1){
          //jason
          document.getElementById("door").src = "https://upload.wikimedia.org/wikipedia/en/f/f7/Jason_Voorhees_%28Ken_Kirzinger%29.jpg";
          document.getElementById("door").width="250";
          document.getElementById("door").onclick=itemSelection();
          document.getElementById("doorbell").src = "Jason.mp3"
          music();
           
        }
        else if(y==2){
          //freddy
          document.getElementById("door").src = "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/38/1537607637-freddy-kreuger.jpg?resize=480:*";
          document.getElementById("door").width="250";
          document.getElementById("door").onclick=itemSelection();
          document.getElementById("doorbell").src = "Freddy.mp3"
          music();
          
       }
        else if(y==3){
          //annabelle
          document.getElementById("door").src = "https://www.thesun.co.uk/wp-content/uploads/2019/04/NINTCHDBPICT000484155738.jpg";
          document.getElementById("door").width="250";
          document.getElementById("door").onclick=itemSelection();
          document.getElementById("doorbell").src = "Annabelle.mp3"
          music();
          
        }
        else if(y==4){
          //pennywise
          document.getElementById("door").src = "https://images-na.ssl-images-amazon.com/images/I/5161Dmb-FSL._AC_.jpg";
          document.getElementById("door").width="250";
          document.getElementById("door").onclick=itemSelection();
          document.getElementById("doorbell").src = "Pennywise.mp3"
          music();
           
        }
        else{
          //jigsaw
          document.getElementById("door").src = "https://i.pinimg.com/originals/af/68/d4/af68d4bd99fcb26ce7622b74147e7868.jpg";
          document.getElementById("door").width="250";
          document.getElementById("door").onclick=itemSelection();
          document.getElementById("doorbell").src = "Saw.mp3"
          music();
           
        }
      }
      
      function picRNG(){
        pool.sort(function(a, b){return 0.5 - Math.random()});
        var current = pool.pop();
          if(current==1){
            return "https://media.discordapp.net/attachments/546447690855219201/772233215082496000/c8339c07cb16757bc743efeedcdbc7e2.png?width=270&height=375";
          }
          else if(current==2){
            return "https://media.discordapp.net/attachments/546447690855219201/772232582934036490/ccd99629b369562bbcde500cf2f92530.png";
        }
          else if(current==3){
            return "https://media.discordapp.net/attachments/546447690855219201/772232350636703745/104-1049582_holy-water-clip-art-png-download-transparent-holy.png?width=221&height=374";
          }
          else if(current==4){
            return "https://media.discordapp.net/attachments/546447690855219201/772233370796818485/131-1316712_clip-art-openclipart-image-vector-graphics-drawing-fear.png?width=366&height=375";
          }
          else{
            return "https://media.discordapp.net/attachments/546447690855219201/772234034624462848/images1183511_kh.png?width=499&height=375";
          }
        }
      //choices specialized for each character comes out
      function itemSelection(){
        //3 buttons each character
        if(y==1){
          pool.splice(0,1);
          document.getElementById('choice1').style.visibility="visible";
          document.getElementById('choice2').style.visibility="visible";
          document.getElementById('choice3').style.visibility="visible";
          document.getElementById('choice4').style.visibility="visible";
          document.getElementById('choice1').src=picRNG();
          document.getElementById('choice2').src="https://media.discordapp.net/attachments/546447690855219201/772233215082496000/c8339c07cb16757bc743efeedcdbc7e2.png?width=270&height=375";
          document.getElementById('choice3').src=picRNG();
          document.getElementById('choice4').src=picRNG();
          pool=[1,2,3,4,5];
          
        }
        else if(y==2){
          pool.splice(1,2);
          document.getElementById('choice1').style.visibility="visible";
          document.getElementById('choice2').style.visibility="visible";
          document.getElementById('choice3').style.visibility="visible";
          document.getElementById('choice4').style.visibility="visible";
          document.getElementById('choice1').src=picRNG();
          document.getElementById('choice2').src=picRNG();
          document.getElementById('choice3').src="https://media.discordapp.net/attachments/546447690855219201/772232582934036490/ccd99629b369562bbcde500cf2f92530.png";
          document.getElementById('choice4').src=picRNG();
          pool=[1,2,3,4,5];
        
        }
        else if(y==3){
          pool.splice(2,3);
          document.getElementById('choice1').style.visibility="visible";
          document.getElementById('choice2').style.visibility="visible";
          document.getElementById('choice3').style.visibility="visible";
          document.getElementById('choice4').style.visibility="visible";
          document.getElementById('choice1').src="https://media.discordapp.net/attachments/546447690855219201/772232350636703745/104-1049582_holy-water-clip-art-png-download-transparent-holy.png?width=221&height=374";
          document.getElementById('choice2').src=picRNG();
          document.getElementById('choice3').src=picRNG();
          document.getElementById('choice4').src=picRNG();
          pool=[1,2,3,4,5];
        }
        else if(y==4){
          pool.splice(3,4);
          document.getElementById('choice1').style.visibility="visible";
          document.getElementById('choice2').style.visibility="visible";
          document.getElementById('choice3').style.visibility="visible";
          document.getElementById('choice4').style.visibility="visible";
          document.getElementById('choice1').src=picRNG();
          document.getElementById('choice2').src=picRNG();
          document.getElementById('choice3').src=picRNG();
          document.getElementById('choice4').src="https://media.discordapp.net/attachments/546447690855219201/772233370796818485/131-1316712_clip-art-openclipart-image-vector-graphics-drawing-fear.png?width=366&height=375";
          pool=[1,2,3,4,5];
         
        }
        else{
          pool.splice(4,5);
          document.getElementById('choice1').style.visibility="visible";
          document.getElementById('choice2').style.visibility="visible";
          document.getElementById('choice3').style.visibility="visible";
          document.getElementById('choice4').style.visibility="visible";
          document.getElementById('choice1').src="https://media.discordapp.net/attachments/546447690855219201/772234034624462848/images1183511_kh.png?width=499&height=375";
          document.getElementById('choice2').src=picRNG();
          document.getElementById('choice3').src=picRNG();
          document.getElementById('choice4').src=picRNG();
          pool=[1,2,3,4,5];
        }
      }

      //determines life and death


      function isItClicked(p){
        if(p==1){
          l=1;
        }
        else if(p==2){
          m=1;
        }
        else if(p==3){
          n=1;
        }
        else{
          o=1;
        }
      }

      function onSelect(){
        if(y==1){
          if(m == 1){
            isAlive=1;
          }
          else{
            isAlive=0;
          }
        }
        else if(y==2){
          if(n==1){
            isAlive=1;
          }
          else{
            isAlive=0;
          }
        }
        else if(y==3){
          if(l==1){
            isAlive=1;
          }
          else{
            isAlive=0;
          }
        }
        else if(y==4){
          if(o==1){
            isAlive=1;
          }
          else{
            isAlive=0;
          }
        }
        else{
          if(l==1){
            isAlive=1;
          }
          else{
            isAlive=0;
          }
        }
        l=0;
        m=0;
        n=0;
        o=0;
      }

      function doItAll1(){
          isItClicked(1);
          onSelect();
          pointSystem();
      }
      function doItAll2(){  
        isItClicked(2); 
        onSelect();  
        pointSystem();  
      }
      function doItAll3(){
        isItClicked(3);
        onSelect();
        pointSystem();
      }
      function doItAll4(){
          isItClicked(4);
          onSelect();
          pointSystem();
      }
