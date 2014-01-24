$(document).ready(function(){
     $('body').show();
     $('.loader').hide();
});

init = function(){
      jarallax = new Jarallax();

      jarallax.addAnimation('.galaxy_bg',[{progress: "00%", top:"0%"}, {progress: "100%", top: "-5%"}]);
      jarallax.addAnimation('.stars_1',[{progress: "0%", top:"1000px"}, {progress: "100%", top: "-5%"}]);
      jarallax.addAnimation('.stars_2',[{progress: "0%", top:"0px"}, {progress: "100%", top: "1000px"}]);
      jarallax.addAnimation('.stars_3',[{progress: "0%", top:"0px"}, {progress: "100%", top: "50px"}]);
      jarallax.addAnimation('.stars_5',[{progress: "0%", top:"300px"}, {progress: "100%", top: "500px"}]);
      jarallax.addAnimation('.stars_6',[{progress: "0%", top:"3px"}, {progress: "100%", top: "70px"}]);
      jarallax.addAnimation('.clouds_1',[{progress: "0%", top:"200px"}, {progress: "100%", top: "300px"}]);
      jarallax.addAnimation('.clouds_2',[{progress: "0%", top:"0px"}, {progress: "100%", top: "200px"}]);
      jarallax.addAnimation('.clouds_3',[{progress: "0%", top:"500px"}, {progress: "100%", top: "10px"}]);
      jarallax.addAnimation('.clouds_4',[{progress: "0%", top:"600px"}, {progress: "100%", top: "300px"}]);

      jarallax.addAnimation('.r, .uthie',[{progress: "0%", opacity:"0"}, {progress: "30%", opacity: "0"}]);

      jarallax.addAnimation('.r',[{progress: "31%", opacity:"0"}, {progress: "50%", opacity: "1"}]);
      jarallax.addAnimation('.uthie',[{progress: "40%", opacity:"0"}, {progress: "50%", opacity: "1"}]);

      jarallax.addAnimation('.r, .uthie',[{progress: "0%", top:"-50%"}, {progress: "30%", top:"-50%"}]); 

      jarallax.addAnimation('.r',[{progress: "31%", top:"-50%"}, {progress: "50%", top:"25%"}]);
      jarallax.addAnimation('.uthie',[{progress: "40%", top:"-50%"}, {progress: "50%", top:"40%"}]);

      jarallax.addAnimation('.uthie',[{progress: "51%", top:"40%"}, {progress: "100%", top:"40%"}]); 
      jarallax.addAnimation('.r',[{progress: "51%", top:"25%"}, {progress: "100%", top:"25%"}]); 


      /*
      jarallax.addAnimation('.stars_3',[{progress: "0%", top:"-5%"}, {progress: "100%", top: "90%"}]);
      jarallax.addAnimation('.stars_2',[{progress: "0%", top:"70%"}, {progress: "100%", top: "40%"}]);
      jarallax.addAnimation('.stars_1',[{progress: "0%", top:"90%"}, {progress: "100%", top: "-5%"}]);
      jarallax.addAnimation('.galaxy_bg',[{progress: "0%", top:"0%"}, {progress: "100%", top: "-10%"}]);
      
      jarallax.addAnimation('#head1',[{progress: "0%", left:"-800px"}, {progress: "10%", left: "100px"}]);
      jarallax.addAnimation('#head1',[{progress: "10%", left:"100px"}, {progress: "40%", left: "150px"}]);
      jarallax.addAnimation('#head1',[{progress: "0%", opacity:"1"}, {progress: "30%", opacity:"1"}]);
      jarallax.addAnimation('#head1',[{progress: "30%", opacity:"1"}, {progress: "40%", opacity:"0"}]);
      
      jarallax.addAnimation('#head2',[{progress: "30%", left:"-800px"}, {progress: "40%", left: "100px"}]);
      jarallax.addAnimation('#head2',[{progress: "40%", left:"100px"}, {progress: "70%", left: "150px"}]);
      jarallax.addAnimation('#head2',[{progress: "30%", opacity:"1"}, {progress: "60%", opacity:"1"}]);
      jarallax.addAnimation('#head2',[{progress: "60%", opacity:"1"}, {progress: "70%", opacity:"0"}]);
      
      jarallax.addAnimation('#head3',[{progress: "60%", left:"-800px"}, {progress: "70%", left: "100px"}]);
      jarallax.addAnimation('#head3',[{progress: "70%", left:"100px"}, {progress: "100%", left: "150px"}]);
      jarallax.addAnimation('#head3',[{progress: "60%", opacity:"1"}, {progress: "100%", opacity:"1"}]);
      
      jarallax.addAnimation('#p1',[{progress: "15%", opacity:"0"}, {progress: "20%", opacity:"1"}]);
      jarallax.addAnimation('#p1',[{progress: "20%", opacity:"1"}, {progress: "30%"}]);
      jarallax.addAnimation('#p1',[{progress: "30%", opacity:"1"}, {progress: "40%", opacity:"0"}]);
      jarallax.addAnimation('#p1',[{progress: "15%", marginLeft:"0"}, {progress: "40%"}]);
      
      jarallax.addAnimation('#p2',[{progress: "45%", opacity:"0"}, {progress: "50%", opacity:"1"}]);
      jarallax.addAnimation('#p2',[{progress: "50%", opacity:"1"}, {progress: "60%"}]);
      jarallax.addAnimation('#p2',[{progress: "60%", opacity:"1"}, {progress: "70%", opacity:"0"}]);     
      jarallax.addAnimation('#p2',[{progress: "45%", marginLeft:"0"}, {progress: "70%"}]);
      
      jarallax.addAnimation('#p3',[{progress: "75%", opacity:"0"}, {progress: "80%", opacity:"1"}]);
      jarallax.addAnimation('#p3',[{progress: "80%", opacity:"1"}, {progress: "100%"}]);
      jarallax.addAnimation('#p3',[{progress: "75%", marginLeft:"0"}, {progress: "100%"}]);
    */}
