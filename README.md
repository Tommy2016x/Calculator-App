# Calculator App

This is probably my first major project with javascript. I was looking online at other versions of javascript calculators but the ones I found were not realistic and not natural to use. For example many of them displayed on the screen something like "1+2/3+6" which is not what a normal calculator would do. And they would also only allow you to do one operation at a time such as "2+2" and then once you press equals, it would not let you press equals again to continue adding, or press another operand to continue the calculations on top of the result. So I decided to try and make a calculator that did all of this and behave like a real one should.

The first thing I had to learn when making this was basic DOM manipulation, I would have an HTML <p> element which would be the display screen, and button elements to manipulate it. 
  
  Immediately it became very difficult as to how I would implement the features I discussed above as you would need a way to sort of remember what the user chose as an operand before you make another calculation. For example, if I wanted to do "2+2" and then "-2" after wards I would need a way to remember the "2+2" calculation and then sum it before the "-2" was implemented. 
  
  So what was my solution? well my solution may be a bit messy in hindsight but it certainly worked. I simply made lots of boolean expressions for each operand such as "plusclicked","minuesclicked",etc so when the user clicks on of those it would be true, and when they go to click on another operation if for example "plusclicked" was true it would know to add the 2 previous numbers. 
  
  So with this lets see how an operation with my calculator would work, I would type "2+2" so now the "plusclicked" boolean would be set to true, and then I would type "-2" so now when I press the "-" button the equals clicked would be true and it would calculate "2+2" and display it on the screen and then set "minuesclicked" equal to true and everything else to false so that when the next operand button would be clicked it would subtract from that and so forth.
  
  I also made values for what the "current choice" of the number is and what the "total" number is in the calculations.
  
  This project was porbablt the most difficult one yet but I certainly had lots of fun figuring out how to solve the challenges I came across and how to implement the solutions I had in my head.
  
  Some known bugs which I need to work on are that the number displayed if too big will go outside of the screen, and pressing some operands twice in a row will cause the calculator to break. I also need to figure out how to implement a "negatives sign" feature as well  in the future
