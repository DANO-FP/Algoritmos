//CoffeeScript vs Javascript
//CS function 
square =(x)-> x*x 
cube = (x)->square(x)*x
/*JS functions */ 
var square = function(x){return x*x};
var cube =function(x){return square(x)*x};

//Strings CS
author ="asdasdasdasa"
quote="asdasdasda. -- #(author)"
sentence="#{22/7} is a decent approximation of PI"
//String JS
var author ="asdasdasdasd";
var quote="asdasdasd. --$(author)";
var sentence = "$(22/7) is a dencent approximation of PI";

//Block of script delimited by """ or '''
//CJ
html="""<strong> cup of coffeescript</strong>"""
//JS
var html="<strong>\n cup of coffeescript\n</strong>";

//Definition of Array in CJ
song=["","","","",""]

singesr ={Jagger:"rock",Elvis:"Roll"}

bitList=[
    1,0,1
    0,0,1
    1,1,0
]
kids =
brother:
  name: "Max"
  age:  11
sister:
  name: "Ida"
  age:  9

//Array in JS
var bitlist, kids, singers, song;
  
song = ["do", "re", "mi", "fa", "so"];
  
singers = {
    Jagger: "Rock",
    Elvis: "Roll"
  };
  
bitlist = [1, 0, 1, 0, 0, 1, 1, 1, 0];
  
kids = {
    brother: {
      name: "Max",
      age: 11
    },
    sister: {
      name: "Ida",
      age: 9
    }
  };
  
//Creating Objects with CS