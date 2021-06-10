import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin (DrawSVGPlugin); 


  

    //add tools
    //GSDevTools.create();
  
    /* add your code here */
    //Variables
    let mainTL = gsap.timeline({id:"main"});


    // function init(){    

    //     gsap.set(["#outline-dash", "#icons", "#leather", "#IconA", "#IconB", "#IconC",  "#IconD" ], {alpha:0})


    // }

    function fadeInTL(){
        let tl = gsap.timeline();


        tl.from ("#black",{alpha:0})

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

        
        .from ("#_fuel-tabs_",{duration:1, alpha:0})

        // .from("#orange-ft-1",{duration:0.5, alpha:0})
        // .to("#orange-ft-1",{duration:0.5, alpha:0})
        // .from("#orange-ft-2",{duration:0.5, alpha:0})
        // .to("#orange-ft-2",{duration:0.5, alpha:0})
        // .from("#orange-ft-3",{duration:0.5, alpha:0})
        // .to("#orange-ft-3",{duration:0.5, alpha:0})
        // .from("#orange-ft-4",{duration:0.5, alpha:0})
        // .to("#orange-ft-4",{duration:0.5, alpha:0})
        // .from("#orange-ft-5",{duration:0.5, alpha:0})
        // .to("#orange-ft-5",{duration:0.5, alpha:0})

        .to("#_ft1_", {fill:"#F7941D", duration:0.35})
        .to("#_ft2_", {fill:"#F7941D", duration:0.35})
        .to("#_ft3_", {fill:"#F7941D", duration:0.35})
        .to("#_ft4_", {fill:"#F7941D", duration:0.35})
        .to("#_ft5_", {fill:"#F7941D", duration:0.5})


        

        .to ("#_pump_",{duration:1, scale:165, transformOrigin: "center"})

        .to ("#fuel-indicator",{duration:1, alpha:0})


        return tl;

    }

    function weatherTL(){
        let tl = gsap.timeline();




        tl.from ("#weather",{duration:1, alpha:0}, "w1")

        tl.to ("#weather",{duration:1, y:"-=185", x:"-=450"}, "w1")

        tl.to ("#weather",{duration:1, scale:2, transformOrigin:"center"})

        .to("#_d1_",{duration:1, y:"+=20", x:"-=5", alpha:0}, "drops")
        .to("#_d2_",{duration:1, y:"+=20", x:"-=5", alpha:0}, "drops")
        .to("#_d3_",{duration:1, y:"+=20", x:"-=5", alpha:0}, "drops")


        .to("#_d1_",{duration:0.5, y:"-=20", x:"+=5", alpha:100}, "still")
        .to("#_d2_",{duration:0.5, y:"-=20", x:"+=5", alpha:100}, "still")
        .to("#_d3_",{duration:0.5, y:"-=20", x:"+=5", alpha:100}, "still")
       

        tl.to ("#weather",{duration:1, alpha:0})

        return tl;

    }

    function musicTL(){
        let tl = gsap.timeline();

        tl.from ("#music",{duration:1, alpha:0}, "houdini")

        tl.to ("#music",{duration:1, y:"-=185", x:"+=450"}, "houdini")

        tl.to ("#music",{duration:1, scale:2, transformOrigin:"center"})

        tl.to ("#music",{duration:1, alpha:0})



        return tl;

    }


    function SpeedTL(){
        let tl = gsap.timeline();

        tl.from ("#speedometer",{duration:1, alpha:0, scale:10, transformOrigin:"center"}, "sp")
        .to ("#speedometer",{duration:1, y:"-=100", x:"+=133"}, "sp")

        .from ("#red-arrow",{duration:1, rotation:"180",transformOrigin:"right", alpha:0})
        .to ("#red-arrow",{duration:1, y:"-=100", x:"+=133"}, "sp")

        tl.to ("#speedometer",{duration:1, alpha:0})

        tl.to ("#red-arrow",{duration:1, alpha:0})

        return tl;

    }



    function DashboardTL(){
        let tl = gsap.timeline();

        
        tl.from (["#outline-dash", "#leather"], {duration:1, alpha:0, scale:10, transformOrigin:"center"}, "db1")
        // .to ("#outline-dash","#icons", "#leather", "#IconA", "#IconB", "#IconC",  "#IconD",{duration:1, y:"-=100", x:"+=133"}, "db1")

 

        .to ("#speedometer",{duration:1, alpha:1, svgOrigin:"0 0", x:0, y:0})
        .to ("#red-arrow",{duration:1, alpha:1, svgOrigin:"0 0", x:0, y:0})
        .to ("#weather",{duration:1, alpha:1, scale:1, x:0, y:0})
        .to ("#music",{duration:1, alpha:1, scale:1, x:0, y:0})
        .set("#_pump_",{scale:1, transformOrigin: "center"})
        .to("#fuel-indicator",{duration:1, alpha:1, x:0, y:0, scale:1})
        .to ("#Jag-logo",{duration:1, alpha:1, scale:1, x:0, y:0})
        .from ([ "#IconA", "#IconB", "#IconC", "#IconD"], {duration:1, alpha:0, stagger:0.1, y:"-=25"})

 


        ;





        return tl;

    }


  
















    //1. set initial properties
// init();

//2. show content - prevents FOUC
gsap.set('#svg-container',{visibility:"visible"});

//3. BUILD Main timeline
mainTL.add(fadeInTL())
      .add(FuelTL())
      .add(weatherTL())
      .add(musicTL())
      .add(SpeedTL())
      .add(DashboardTL(), "target")
     




;//tl END

// mainTL.seek("target");


