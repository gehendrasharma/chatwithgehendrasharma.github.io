d$(document).ready(function(){
   
  //$('.drawer-hamburger').css({"padding":"40px 1.75rem 40px"});

  $('.drawer').drawer({
    class: {
      nav: 'drawer-nav',
      toggle: 'drawer-toggle',
      overlay: 'drawer-overlay',
      open: 'drawer-open',
      close: 'drawer-close',
      dropdown: 'drawer-dropdown'
    },
    iscroll: {
      mouseWheel: true,
      preventDefault: false
    },
    showOverlay: true
  });




var notes= JSON.parse(localStorage.getItem("resume"));

if(notes!=null && notes.length>0 ) 
    {
    document.getElementById("resume-heading").innerHTML= "<span class='new-resume-heading'>NOTES<span>"
    var listElement=document.createElement("ul"); 
    listElement.setAttribute("id","ullist");
    document.getElementById("resume-heading").appendChild(listElement); 

    for(var i=0; i<notes.length; i++){
    var liItem=document.createElement("li");
    liItem.setAttribute("class","liClass");
    liItem.appendChild(document.createTextNode(notes[i]));
    listElement.appendChild(liItem);
    }

  }
  else {
     document.getElementById("resume-heading").innerHTML= " <h2 class ='bkmark'>Bookmark messages that you wish to make a note of<h2>"
  }

 }); 


//Initialising the bot and the entire script of the bot
var botui = new BotUI('hello-world');

  botui.message.bot({ // show first message
  delay: 200,
  content: 'Hi There 👋'
  }).then(function(){
     return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'I am Gehendra, a mechanical engineering graduate With demonstrated history in design and development of mechanical components and assembly for transmission 🎓'
     });
  }).then(function(index){ // will send the index of the previous message to the showBookmark function which shows a star icon against the message.
      setTimeout(showBookmark(index),1500);   
      }).then(function () {
        return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'What is your name?'
        });
  }).then(function () {
     return botui.action.text({ // will print whatever was typed in the field.
     delay: 800,
     action: {
        value: 'John',
        placeholder: 'Your name'
    }
    });
  }).then(function (res) { // will be called when it is submitted.
      return botui.message.bot({
      delay: 500,
      content: 'Welcome to my page, '+ res.value + '! I am glad that you are here',
      });
 }).then(function () { 
      return botui.message.bot({
      delay: 1200,
      content:  'Lets get started. What would you like to know about me?'
    }); // will print whatever was typed in the field.

  }).then(function () {

            return botui.action.button({ 
            action: [
              {
                text: 'Okay! Got it',
                value: 'got_it'
              },
              {
                text: 'How can I reach out to you?',
                value: 'reach_out'
               
              }
            ]
          });
      
  }).then(function (res) {
        if(res.value == 'reach_out') {
          return botui.message.bot({ 
           delay: 1000, 
           content: 'Shoot me a mail at gehendra11@ou.edu', 

            }).then(function(index){
                     setTimeout(showBookmark(index),1500);   
        } 

        else {
          return botui.message.bot({ // second one
          delay: 1000, // wait 1 sec.
          content: 'Great'
          }).then(function () {
             return botui.action.button({ // let user do something
             delay: 1000,
             action: [
                    { 
                      text: 'Tell me about yourself',
                      value: 'aboutme'
                      
                    },
                    {
                      text: 'Where have you worked',
                      value: 'work_ex'
                     
                    }
                  ]
                });
            }).then(function (res) {
               if(res.value == 'work_ex') 
               {
                  return botui.message.bot({ 
                  delay: 1000,
                  content: 'Currently, I am a graduate research assistant at OU. Prior to this, I was working as a research engineer at Esco Couplings & Transmisions Pvt.Ltd.'
                  }).then(function(index){
                      setTimeout(showBookmark(index),1500);   
                      }).then(function(){
                          return botui.message.bot({ 
                            delay: 1000,
                            content: 'In the summer of 2017, I also interned at Tata Research Development and Design Center where I was responsible for developing ontology and bond graph for gearbox.'
                            });
                      }).then(function(index){
                      setTimeout(showBookmark(index),1500);   
                      }).then(function () {
                         return botui.action.button({ // let user do something
                         delay: 1000,
                         action: [
                                { 
                                  text: 'Tell me more',
                                  value: 'more'
                                  
                                },
                                {
                                  text: 'How can I reach out to you?',
                                  value: 'reach_out'
                                 
                                }
                              ]
                            });
                          }).then(function (res) {
                                if(res.value == 'more') {
                                  return botui.message.bot({ 
                                   delay: 1000, 
                                   content: 'While these experiences have helped me consolidate my learning, they have also made me aware of the intricacies involved in designing and developing mechanical systems', 
                                    }).then(function(index){
                                    setTimeout(showBookmark(index),1500);   

                                    }).then(function (){
                                    return botui.message.bot({ 
                                    delay: 1000,
                                    content: 'What else do you want to talk about? Select it from the menu on the left' ,
                                     });
                                    }); 
                                  }

                                else{
                                  return botui.message.bot({ 
                                  delay: 1000, 
                                  content: 'Shoot me a mail at gehendra11@ou.edu', 
                                  }).then(function(index){
                                     setTimeout(showBookmark(index),1500);   
                                  }).then(function (){
                                     return botui.message.bot({ 
                                      delay: 1000,
                                      content: 'Alternatively if I am in Norman, I am available for personal meeting' ,
                                      });
                                  }); 

                                }
                            }); 
                }   
                                         
                else{
                      return botui.message.bot({ 
                        // show first message
                        delay: 1000,
                        content: 'I was born in Kathmandu, capital city of Nepal.'
                        }).then(function(index){
                        setTimeout(showBookmark(index),1500);   
                        }).then(function(){
                        return botui.message.bot({ 
                        // show first message
                        delay: 1000,
                        content: 'I pursued mechanical engineering at Motilal Nehru Institute of Technology, Allahabad in India.'
                        });
                      }).then(function(index){
                      setTimeout(showBookmark(index),1500);   
                      }).then(function () {
             return botui.action.button({ // let user do something
             delay: 1000,
             action: [
                    { 
                      text: 'Where have you worked',
                      value: 'work_ex'
                      
                    },
                    {
                      text: 'What skills ya got',
                      value: 'skills'
                     
                    }
                  ]
                });
            }).then(function (res) {
              if (res==skills){
                  return botui.message.bot({ 
                      // show first message
                      delay: 1000,
                      content: 'I have hands-on experience in prototyping and testing components and assembly of transmission system.'
                      }).then(function(index){
                      setTimeout(showBookmark(index),1500);   
                    }).then(function(){
                      return botui.message.bot({ 
                      // show first message
                      delay: 1000,
                      content: 'Proficient in design, analysis, modelling and simulation'
                      });
                    }).then(function(index){
                      setTimeout(showBookmark(index),1500);   
                    }).then(function(){
                      return botui.message.bot({ 
                      // show first message
                      delay: 1000,
                      content: 'Comfortable with C, R, Python, MATLAB'
                      });
                    }).then(function(index){
                      setTimeout(showBookmark(index),1500);   
                    }).then(function(){
                      return botui.message.bot({ 
                      // show first message
                      delay: 1000,
                      content: 'Hands-on experience with Solidworks, AutoCAD, Abaqus and NX. '
                      });
                    }).then(function(index){
                      setTimeout(showBookmark(index),1500);   
                    });
              }

              else{
                    return botui.message.bot({ 
                  delay: 1000,
                  content: 'Prior to OU, Prior to this, I was working as a research engineer at Esco Couplings & Transmisions Pvt.Ltd.'
                  }).then(function(index){
                      setTimeout(showBookmark(index),1500);   
                      }).then(function(){
                          return botui.message.bot({ 
                            delay: 1000,
                            content: 'In the summer of 2017, I also interned at Tata Research Development and Design Center where I was responsible for developing ontology and bond graph for gearbox.'
                            });
                      }).then(function(index){
                      setTimeout(showBookmark(index),1500);   
                      }).then(function () {
                         return botui.action.button({ // let user do something
                         delay: 1000,
                         action: [
                                { 
                                  text: 'Tell me more',
                                  value: 'more'
                                  
                                },
                                {
                                  text: 'How can I reach out to you?',
                                  value: 'reach_out'
                                 
                                }
                              ]
                            });
                          }).then(function (res) {
                                if(res.value == 'more') {
                                  return botui.message.bot({ 
                                   delay: 1000, 
                                   content: 'While these experiences have helped me consolidate my learning, they have also made me aware of the intricacies involved in designing and developing mechanical systems', 
                                    }).then(function(index){
                                    setTimeout(showBookmark(index),1500);   

                                    }).then(function (){
                                    return botui.message.bot({ 
                                    delay: 1000,
                                    content: 'What else do you want to talk about? Select it from the menu on the left' ,
                                     });
                                    }); 
                                  }

                                else{
                                  return botui.message.bot({ 
                                  delay: 1000, 
                                  content: 'Shoot me a mail at gehendra11@ou.edu', 
                                  }).then(function(index){
                                     setTimeout(showBookmark(index),1500);   
                                  }).then(function (){
                                     return botui.message.bot({ 
                                      delay: 1000,
                                      content: 'Alternatively if I am in Norman, I am available for personal meeting' ,
                                      });
                                  }); 

                                }
                    });


              }



            });
           }
        });
      }

     }); 






// Click functions for the links in the drawer
document.getElementById("aboutme").onclick=function(){
  journey();
}

document.getElementById("experience").onclick=function(){
  experience();
}


document.getElementById("interest").onclick=function(){
  interest();
}

document.getElementById("skills").onclick=function(){
  skills();
}

document.getElementById("touch").onclick=function(){
 touch();
}


var skills = function(){
  botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'What skills ya got?'
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'I have hands-on experience with both conducting UX research as well designing user interfaces.'
    });
  }).then(function(index){
    setTimeout(showBookmark(index),1500);   
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'Proficient in Sketch, Adobe Photoshop, Adobe Illustrator, Adobe Indesign and Principle'
    });
  }).then(function(index){
    setTimeout(showBookmark(index),1500);   
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'Comfortable with HTML, CSS, Javascript, Jquery, C++/C'
    });
  }).then(function(index){
    setTimeout(showBookmark(index),1500);   
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'Occasionally tinker with arduino and sensors to build interactive prototypes '
    });
  }).then(function(index){
    setTimeout(showBookmark(index),1500);   
  });

}






var philosophy = function(){
  botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'Do you have a design philosophy'
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'I am a strong believer in Function over form; Usability over aesthetics'
    });
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'Design thinking should be used to make a product useful above all. And this philosophy is reflected in all my work'
    });
  });

}




var journey = function(){
  
    return botui.message.bot({ 
    // show first message
    human: true,
    delay: 1000,
    content: 'Tell me about your journey'
    }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 1000,
    content: 'I was born in Assam, a state in North-East India and grew up in Mumbai.'
    });
  }).then(function(){
    return botui.message.bot({ 
    delay: 1000,
    content: 'Having changed over more than 5 schools while growing up, I can easily adapt to newer environments and attempt to understand and embrace change positively'
    });
  }).then(function(index){
     setTimeout(showBookmark(index),1500);   
     }).then(function(){
    return botui.message.bot({ 
    delay: 1000,
    content: 'I pursued design in my undergraduate. It was here when I was formally introduced to the world of (and behind ) the screens 🖥️'
    });
  }).then(function(index){
     setTimeout(showBookmark(index),1500);   
     });

}


var experience = function(){ 
  return botui.message.bot({ 
      human: true,
      delay: 1000,
      content: 'Tell me about your work experience'
    }).then(function(){
        return botui.message.bot({ 
        delay: 1000,
        content: 'Prior to CMU, I was working as a Product designer at Practo, a leading healthcare startup in India. As part of the book team, I was responsible for the booking experience of the patients in the Prato platform.'
        });
    }).then(function(index){
    setTimeout(showBookmark(index),1500);   
    }).then(function(){
       return botui.message.bot({ 
       delay: 1000,
       content: 'In the summer of 2015, I interned as a UX designer at Amazon India where I was responsible for redesigning the detail page for amazon mobile app'
       });
    });  

}


var interest = function(){

  return botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'What are your interest?'
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 200,
    content: 'From e-textiles to driverless cars, Internet of Things is giving life to a growing range of everyday objects. My interest lies in helping people adapt to these emerging modalities of technologies'
    });
  }).then(function () {
      return botui.message.bot({ 
      delay: 1000, 
      content: 'I am particularly keen on designing for human-vehicle interaction as driverless cars has the potential to transform how people commute'

      })
    }).then(function(index){
        setTimeout(showBookmark(index),1500);   
    }).then(function () {
            return botui.action.button({ // let user do something
            delay: 1000,
            action: [
              {
                text: 'Tell me more!',
                value: 'tell_me_more'
              },
              {
                text: 'Get in touch',
                value: 'reach_out'
               
              }
            ]
          });
      
         }).then(function (res) {
        if(res.value == 'reach_out') {


              return botui.message.bot({ 
               delay: 1000, // wait 1 sec.
              content: 'Shoot me a mail at samadrid@andrew.cmu.edu or connect to me https://www.linkedin.com/in/samadrita-das',    
              }).then(function(index){
                  setTimeout(showBookmark(index),1500);   
                  }).then(function (){
                      return botui.message.bot({ // let user do something
                      delay: 1000,
                      content: 'Alternatively if you are in Pittsburgh, I am always down for coffee ☕' ,
                      });
        
                }); 
          
      
        } 

        else {
              botui.message.bot({ // second one
              delay: 1000, // wait 1 sec.
              content: 'Check out my work [here](www.samadrita.info)'
              })
            }

      }); 


}


var research = function(){

  return botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'Tell me about your research work'
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 200,
    content: 'I view design thinking as a tool to solve complex humanitarian problem and this philosophy is reflected in my work I undertook during my undergraduate'
    });
  }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'While one of study focusses on teaching maths to specially abled kids by designing tangible toolkits, the other study educates young adolescent girls in rural India about PCOS using serious games. '

      })
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'You can find the papers [here](https://dl.acm.org/citation.cfm?id=2836281) (which won the best student paper) and [here](https://dl.acm.org/citation.cfm?id=2836283)'

      })
    }).then(function () {

            messageCounter();
            return botui.action.button({ // let user do something
            delay: 1000,
            action: [
              {
                text: 'Good',
                value: 'good'
              },
              {
                text: 'Really Good',
                value: 'really_good'
               
              }
            ]
          });
      
         });


}

var exploration = function(){

  return botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'What are you upto in college'
  }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'Keeping with my interest with emerging technologies, I am currently working on two projects. The first is a project to study human factors consideration in designing for VR',
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'My second project is a little too explorative because this summer, I wondered what would it be like if one could capture and send smell. As a result, I am trying to build an electronic nose that can sense smell of food',
      });
    });


}

var achievements = function(){

  return botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'Tell me about your achievements'
  }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'Our team won the first runners-up at OzCHI24 2015, an International Student Design competition organized by OzCHI conference in Australia. It was a 24hr long Desiathon where we designed an AR based app that could help people beat social isolation',
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'Our study on Tangible learning kit won the best students paper award at IHCI',
      });
    });


}

var book = function(){

  return botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'What are you reading these days?'
  }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'I have just started reading Golden Krishnas "The Best Interface Is No Interface" 📖. Hoping to get some useful insights about designing natural user interfaces',
      });
    });


}

var facts = function(){

  return botui.message.bot({
   human: true,
   delay: 1000, // wait 1 sec.
   content: 'Have fun facts to share? '
  }).then(function () {
      return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'I am a trained Indian classical singer and as a kid, have sung for the radio',
      });
    });


}

var touch = function(){

    botui.message.bot({
      human: true, // second one
      delay: 1000, // wait 1 sec.
      content: 'How can I reach out to you?',
    }).then(function(){ 
      return botui.message.bot({ 
      delay: 1000, // wait 1 sec.
      content: 'Shoot me a mail at samadrid@andrew.cmu.edu or connect to me https://www.linkedin.com/in/samadrita-das',    
      })
    }).then(function(index){
  setTimeout(showBookmark(index),1500);   
  }).then(function (){
      return botui.message.bot({ // let user do something
      delay: 1000,
      content: 'Alternatively if you are in Pittsburgh, I am always down for coffee ☕' ,
  });
        
  });
}

  
//Function to show checkbox  
var checkboxNumber=[];
var showBookmark = function (msgno) {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    var span = document.createElement('span');
    span.className = "check";

    var value= "checkbox" + msgno;
    checkbox.id= "checkbox" + msgno;
    var label = document.createElement('label')
    document.getElementsByClassName("botui-message")[msgno].appendChild(label);
    label.appendChild(span);
    label.appendChild(checkbox);


    if(localStorage.getItem("checkbox"+msgno)!==null && localStorage.getItem("checkbox"+msgno)=="true" ){
           console.log("not null");
            $("#checkbox"+ msgno).prev('span').addClass('checked');
            $("#checkbox"+ msgno).prop('checked', true);
            
    }
      


    $("#checkbox"+ msgno).change(function() {
    if ($("#checkbox"+ msgno).is(':checked')) { $(this).prev('span').addClass('checked');
    save($(this).parent().prev().find("span").html(),msgno);
    } else {
      $(this).prev('span').toggleClass('checked');
      deleteListItem($(this).parent().prev().find("span").html(),msgno);
    }
    });

}


//function to save a message when bookmark is clicked
var save = function (text,msgno) {
localStorage.setItem("notes", text);
var notes = localStorage.getItem("notes");
    var newNote=[]; 
    if(JSON.parse(localStorage.getItem("resume"))==null){
      newNote.push(notes); 
      localStorage.setItem("resume",  JSON.stringify(newNote));
      }
    else{
      var saved= JSON.parse(localStorage.getItem("resume"));
      saved.push(notes);
      localStorage.setItem("resume", JSON.stringify(saved));

        }
    var notes= JSON.parse(localStorage.getItem("resume"));
    if(notes!=null) 
    {
    document.getElementById("resume-heading").innerHTML= "<span class='new-resume-heading'>NOTES<span>"
    var listElement=document.createElement("ul"); 
        //listElement.id= "ullist";
        listElement.setAttribute("id","ullist");
        document.getElementById("resume-heading").appendChild(listElement); 

        for(var i=0; i<notes.length; i++){
        var liItem=document.createElement("li");
        //liItem.className="liClass";
        liItem.setAttribute("class","liClass");
        liItem.appendChild(document.createTextNode(notes[i]));
        listElement.appendChild(liItem);
    }

  }
   
  localStorage.setItem("checkbox"+msgno,"true");
 
 }


//Function to delete an item when bookmark is deselected
var deleteListItem = function(text,msgno){
  localStorage.removeItem("checkbox"+msgno);
      var notes= JSON.parse(localStorage.getItem("resume"));
      for(var i=0; i<notes.length; i++){
        if(text==notes[i]){
          notes.splice(i,1);
          localStorage.setItem("resume",  JSON.stringify(notes));
          document.getElementsByClassName("liClass")[i].remove();
          if (notes.length==0){
       document.getElementById("resume-heading").innerHTML= " <h2 class ='bkmark'>Bookmark messages that you wish to make a note of<h2>"
    

          
          }
          break;
          }

          
      }
 
}























