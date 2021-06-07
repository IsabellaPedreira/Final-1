import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin (DrawSVGPlugin); 


  

    //add tools
    //GSDevTools.create();
  
    /* add your code here */
    //Variables
    let mainTL = gsap.timeline({id:"main"});


    function init(){    




    }

    function fadeInTL(){
        let tl = gsap.timeline();


        gsap.set(["#outline-dash", "#icons", "#music", "#weather", "#speedometer", "#leather"], {alpha:0})

        tl.from ("#Jag-logo",{duration:1, alpha:0, scale:10, transformOrigin:"center"})
        .from ("#_Text_",{duration:1, alpha:0})
        .to("#Jag-logo", {duration:1, scale:2.5, transformOrigin:"center"})
        .from ("#Jag-logo",{duration:1, rotation:"360", transformOrigin:"center"}, "jl")
        .to("#Jag-logo", {duration:1, y:"+=128"}, "jl")
        .to("#Jag-logo", {duration:1, alpha:0})
    
    
    

        return tl;

    }


    function FuelTL(){
        let tl = gsap.timeline();

        tl.from ("#fuel-indicator",{duration:1, alpha:0, scale:"-10", transformOrigin:"center"}, "f1")
        tl.to ("#fuel-indicator",{duration:1, y:"-=135", x:"-=200"}, "f1")

        
        .from ("#_fuel-tabs_",{duration:1, alpha:0,})









        return tl;

    }









    function SpeedTL(){
        let tl = gsap.timeline();

        tl.from ("#speedometer",{duration:1, alpha:0, scale:10, transformOrigin:"center"}, "sp")
        .to ("#speedometer",{duration:1, y:"-=100", x:"+=133"}, "sp")

        .from ("#_red-arrow_",{duration:1, rotation:"180",transformOrigin:"right"})

        .from ("#numbers",{duration:.5, alpha:0, scale:3} )

        return tl;

    }





    //1. set initial properties
init();

//2. show content - prevents FOUC
gsap.set('#svg-container',{visibility:"visible"});

//3. BUILD Main timeline
mainTL.add(fadeInTL())
    .add(FuelTL())
      .add(SpeedTL())
     




;//tl END

//mainTL.play("target");


