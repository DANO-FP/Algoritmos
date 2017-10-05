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
  
//Creating Class with CS and JQuery 
$('.account').prop class:'active'

log object.class

//Creating Class just with JS
$('.account').prop({
  classs: 'active'
});

log(object.class);

//Creating Objects with CS
name="name"
mask="orange"
weapon="nuckuks"
turtle={name,mask,weapon}
output='#{turtle.name} wears an #{turle.mask} mask. wathc out for his #{turtle.weapon}!'
//Creating objects with JS
var mask,name,output,turtle,weapon;

name="name";
mask="orange";
weapon="nuckuks";
turtle={name,mask,weapon};

output='${turtle.name} wears an ${turle.mask} mask. wathc out for his ${turtle.weapon}!';

//Comments in CS
###
asdasdasdas
###
//Comments in JS
/*
asdasdassd
 */
//JS something
//CS #something

//Changes in CJ with respect to JS
//If Else 
//JS
if(something)
{
 var mod = "yes";
}
if(2>1)
{
  something="hello";
}

date = friday?suie:jill;
//CS
mod ="yes" if something

if 2 > 1 
mod ="hello"

if happy and funny
WeAreHappyAndFunny();
else
WeNot();

date=if friday then sue else jill

// im here http://coffeescript.org/#splats