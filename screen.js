class Screen{
    constructor(){

    }

    display(){
      
      var made = 0;
        var total = 0;
        var gameState = 1;
        if (gameState === 1){
        var backGround = createElement("div");
        backGround.id("backGround");
        backGround.position(0,0);
        console.log("screen has been created"); 
        var logo = createImg(
            '../Images/logo.png',
            'Logo'
          );
        logo.parent(backGround);
        logo.position(width/2-320, height/2-200);
        logo.id("logo");
        var button = createButton('BEGIN >');
        button.position(width/2-65, height/2+100);
        button.id("startButton");
        button.mousePressed(change);
        }
    function change() {
      logo.hide();
      button.hide();
      gameState = 2;
      var instructions = createElement('h1', 'INSTRUCTIONS');
      instructions.position(width/2-225, height/2-360);
      var no1 = createElement('h4', '1.');
      no1.position(width/2-375, height/2-200);
      var rule1 = createElement('h5', 'If you make a shot, click the make button, and then click the spot on the court<br>   where you shot from, it should show a circle there.')
      rule1.position(width/2-350, height/2-207);
      var no2 = createElement('h4', '2.');
      no2.position(width/2-375, height/2-100);
      var rule2 = createElement('h5', 'If you miss a shot, click the miss button, and then click the spot on the court<br>   where you shot from, it should show a cross there.')
      rule2.position(width/2-350, height/2-107);
      var no3 = createElement('h4', '3.');
      no3.position(width/2-375, height/2);
      var rule3 = createElement('h5', 'After you are done, click the finish button on top of your screen, you will see<br> a summary. Take a screenshot of the page to keep track of your progress.')
      rule3.position(width/2-350, height/2-7);
      var quote = createElement('h5', "We don't quit, we don't cower, we don't run. We endure and conquer.")
      quote.position(width/2-315, height/2+110);
      var kobe = createElement('h4', '- Kobe Bryant');
      kobe.position(width/2-90, height/2+150);
      var button2 = createButton("START >");
      button2.position(width/2-70, height/2+250);
      button2.id("startButton2");
      button2.mousePressed(change1);
      function change1() {
        instructions.hide();
        no1.hide();
        rule1.hide();
        no2.hide();
        rule2.hide();
        no3.hide();
        rule3.hide();
        quote.hide();
        kobe.hide();
        button2.hide();
        var court = createImg(
          '../Images/Court.png',
          'Court'
        );
        court.position(width/2-280, height/2-5);
        court.id("court");
        court.mouseClicked(function () {
          x = mouseX;
          y = mouseY;
          console.log(x+" and "+y);
        });
        var make = createElement('h2', "M A K E");
        make.position(width/2-230,height/2-180);
        var miss = createElement('h2', "M I S S");
        miss.position(width/2+120,height/2-180);
        var makeButton = createImg(
          '../Images/makeButton.png',
          'makeButton'
        );
        makeButton.parent(backGround);
        makeButton.position(width/2-215, height/2-95);
        makeButton.id("makeButton");
        makeButton.mouseClicked(function () {
          makeImg = createImg(
            '../Images/circle2.png',
            'makeImg'
          );
          makeImg.position(x-13,y-13);
        });

        var missButton = createImg(
          '../Images/missedButton.png',
          'missedButton'
        );
        missButton.parent(backGround);
        missButton.position(width/2+130, height/2-95);
        missButton.id("missButton");
        missButton.mouseClicked(function () {
          missImg = createImg(
            '../Images/cross.png',
            'missImg'
          );
          missImg.position(x-15,y-15);
        });
        var accuracy = createElement('h2', "A C C U R A C Y");
        accuracy.position(width/2-97,height/2-350);
        
        var score = createElement('h1', made+"/"+total);
        score.position(width/2-60, height/2-310);
        }
    }
    
    }
}
