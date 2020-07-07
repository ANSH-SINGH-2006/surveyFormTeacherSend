class Form {
  constructor() {
    
  }

  

  display(){
    var title = createElement('h2')
    var title1 = createElement('h2')
    var title2 = createElement('h2')
    var title3 = createElement('h4')
    var title4 = createElement('h4')
    
    title.html("Q1- Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
    title.position(100, 0);
    
    title1.html("Q2- Would you be willing to contribute a small amount every month for such a program?")
    title1.position(100, 100);

    title2.html("Q3- How much per month would you be willing to pay?")
    title2.position(100, 200);

    title3.html("Mention your NAME");
    title3.position(100, 420);

    title4.html("Mention your Email ID");
    title4.position(100, 520);

    
    var input0 = createInput("yes/no");
    var input1 = createInput("yes/no");
    var input2= createInput("amount/N.A.")
    var input3= createInput("name")
    var input4= createInput("email")
    var button = createButton('Submit');
    
    input0.position(130,60)

    input1.position(130, 160);

    input2.position(130,260);

    input3.position(130,480)

    input4.position(130,580)

    button.position(130, 700);

    
  var count=0;

    button.mousePressed(function(){
       count=count+1;
       var input0Value=input0.value();
       var userIndex="user"+count;
       database.ref(userIndex).set({
         input0:input0Value
       })
    });
  
  }
}
