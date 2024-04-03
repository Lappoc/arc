// function soundClick() {
//     var audio = new Audio(); // Создаём новый элемент Audio
//     audio.src = 'click.mp3'; // Указываем путь к звуку "клика"
//     audio.autoplay = true; // Автоматически запускаем
//   }

//   function play() {
//     var audio = new Audio('starboy.mp3');
//     audio.play();
//   }
     const ENGINE_DEBUG = true;
	
     var canvas = null; 	  
     var context = null;  
     var frameCount = 0;   
     var fps = 0; 		  
 
     function hageRun() {
         canvas=document.getElementById("canvas");
         context=canvas.getContext("2d");			
         init(); 
         draw(); 				
         hageLoop();	
         hageFps();	
     }
     
     function hageDefault() {
         textFont('12pt Arial');
         textColor('#999');
         borderColor('#fff');
     }
     
     function hageClear() {
         context.clearRect(0,0,canvas.width, canvas.height);
         context.beginPath();
     }
     
     function hageLoop() {
         var start = new Date().getTime(),
         time = 0;
         function timer() {
             time += 15;
             var diff = (new Date().getTime() - start) - time;			
             hageClear();
             hageDefault(); 
             update(); 	 
             draw(); 	 		 
             frameCount++;					
             window.setTimeout(timer, (15 - diff));			
         }	
         window.setTimeout(timer, 15);		
     }
     
     function hageFps() {
         var start = new Date().getTime(),
         time = 0;
         function instance() {
             time += 1000;			
             setFPS();			
             var diff = (new Date().getTime() - start) - time;
             window.setTimeout(instance, (1000 - diff));
         }		
         window.setTimeout(instance, 1000);			
     }
 
     function setFPS() {
         fps = frameCount;
         frameCount = 0;		
     }

     function background(color) {
         canvas = document.getElementById('canvas');
         canvas.style.background = color;
     }	
 
     function noCursor() {
         canvas = document.getElementById('canvas');
         canvas.style.cursor = "url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto";
     }	
 
     function defaultCursor() {
         canvas = document.getElementById('canvas');
         canvas.style.cursor = "default";
     }	
 
     function customCursor(filename) {
         canvas = document.getElementById('canvas');
         canvas.style.cursor = "url('"+filename+"'),auto";
     }
     

     function textFont(font) {
         context.font = font;
     }	
     
     function textColor(color) {
         context.fillStyle = color;
     }
     
     function text(str, x, y) {
         context.fillText(str, x, y);
     }
     
     var mouseX = 0;
     var mouseY = 0;
     var mouseClickX = 0;
     var mouseClickY = 0;
     var mouseClick = false;
     
     var KEY = 0;
     var KEY_LEFT  = false;
     var KEY_RIGHT = false;
     var KEY_UP    = false;
     var KEY_DOWN  = false;
     var KEY_SPACE = false;
     var KEY_W 	  = false;
     var KEY_A  	  = false;
     var KEY_S 	  = false;
     var KEY_D     = false;
     var	KEY_K 	  = false;
     var	KEY_M     = false;
     
     function hageMouseMove(event) {
         mouseX = event.clientX - canvas.offsetLeft;    
         mouseY = event.clientY - canvas.offsetTop;    
     }
 
     function hageMouseClick(event) {
         mouseClickX = event.clientX - canvas.offsetLeft;    
         mouseClickY = event.clientY - canvas.offsetTop;    		
     }
         
     function hageMouseDown(event) {			
         mouseClick = true;		
     }
     
     function hageMouseUp(event) {		
         mouseClick = false;		
     }	 
     
     function hageKeyboardUpdateStates(event) {				
         KEY = event.keyCode;		
         if(KEY == 39) KEY_RIGHT = true; 
         if(KEY == 37) KEY_LEFT  = true; 
         if(KEY == 38) KEY_DOWN  = true; 
         if(KEY == 40) KEY_UP    = true; 
         if(KEY == 65) KEY_A  = true; 
         if(KEY == 87) KEY_W  = true; 
         if(KEY == 68) KEY_D  = true; 
         if(KEY == 83) KEY_S  = true; 
         if(KEY == 75) KEY_K  = true;
         if(KEY == 77) KEY_M  = true;
         if(KEY == 32) KEY_SPACE  = true;		
         
         if(ENGINE_DEBUG) console.log(KEY);
     }
     
     function hageKeyboardClearStates(event) {
         KEY = event.keyCode;
         KEY_RIGHT = false;
         KEY_LEFT  = false;
         KEY_DOWN  = false; 
         KEY_UP    = false; 
         KEY_W 	  = false;
         KEY_A  	  = false;
         KEY_S 	  = false;
         KEY_D     = false;
         KEY_K 	  = false;
         KEY_M     = false;
         KEY_SPACE = false;		
     }
     
     function borderColor(color) {
         context.strokeStyle = color;
     }
     
     function lineWidth(width) {	
         context.lineWidth = width;		    
     }
     
     function lineStyle(style) {		
         context.lineCap = cap; 
     }	
     
     function hageBegin() {
         context.beginPath();
     }
     
     function moveTo(x, y) {
         context.moveTo(x, y);
     }
     
     function lineTo(x, y) {
         context.lineTo(x, y);
     }	
     
     function quadraticCurveTo(controlX, controlY, endingPointX, endingPointY) {
         context.quadraticCurveTo(controlX, controlY, endingPointX, endingPointY);
     } 
     
     function bezierCurveTo(cPointX1, cPointY1, cPointX2, cPointY2, endPointX, endPointY) {
         context.bezierCurveTo(cPointX1, cPointY1, cPointX2, cPointY2, endPointX, endPointY); 
     }
     
     function hageEnd() {
         context.stroke();
     }	

     function circle(x, y, radius, fill_style) {
         startingAngle =  0 * Math.PI;
         endingAngle = 2 * Math.PI;
         context.beginPath();           
         context.arc(x, y, radius, startingAngle, endingAngle, false);
         context.fillStyle = fill_style;
         context.fill();
         context.stroke(); 
     } 
     
     function line(x1, y1, x2, y2, cap) {                            
         context.beginPath();           
         context.moveTo(x1,y1);
         context.lineTo(x2,y2);                 
         context.stroke();
     }
     
     function arc(x, y, radius, startAngle, endAngle) {
         startingAngle = startAngle * Math.PI;
         endingAngle = endAngle * Math.PI;
         context.beginPath();           
         context.arc(x, y, radius, startingAngle, endingAngle, false);
         context.stroke();    
     }
     
     function curve(x, y, controlX, controlY, endingPointX, endingPointY) {
         context.beginPath();              
         context.moveTo(x, y);
         context.quadraticCurveTo(controlX, controlY, endingPointX, endingPointY);
         context.stroke();
     }    
     
     function bezier(x, y, cPointX1, cPointY1, cPointX2, cPointY2, endPointX, endPointY) {
         context.beginPath();
         context.moveTo(x, y);
         context.bezierCurveTo(cPointX1, cPointY1, cPointX2, cPointY2, endPointX, endPointY); 
         context.stroke();
     }
     
     function rectangle(topLeftCornerX, topLeftCornerY, width, height, fill_style) {
         context.beginPath();
         context.rect(topLeftCornerX, topLeftCornerY, width, height);
         context.fillStyle = fill_style;
         context.fill();
         context.stroke();
     }   	
  
         var game_screen_width  = 640;  
         var game_screen_height = 460; 
     
         const menu_stage  = 0;
         const game_stage  = 1;		
         const score_stage = 2;
         
         var game_start = false;
         
         var game_current_stage = menu_stage;
         
         const mouse_control    = 0;
         const keyboard_control = 1;
         
         var game_current_control = mouse_control;
         
         var ball = new Object();
         var paddle = new Object();			
         var bricks = new Object();
         
         var level = 1;
         var score = 0;
         var lives = 3;
         var speed = 5;
         
        var bricks_destroed = 0;
         var bricks_count = 0;
				
         var level_bricks_count1  = 84;
         var level_bricks1 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                              [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                              [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                              [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                              [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                              [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                              [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                              [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                              [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                              [1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
                             
                
         var level_bricks_count2  = 123;
         var level_bricks2 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                              [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                              [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                              [2,1,1,1,2,1,1,1,2,1,1,1,2,1],
                              [1,2,1,1,1,2,1,1,1,2,1,1,1,2],
                              [1,1,2,1,1,1,2,1,1,1,2,1,1,1],
                              [1,1,1,2,1,1,1,2,1,1,1,2,1,1],
                              [2,1,1,1,2,1,1,1,2,1,1,1,2,1],
                              [1,2,1,1,1,2,1,1,1,2,1,1,1,2],
                              [1,1,2,1,1,1,2,1,1,1,2,1,1,1]];
 
				
         var level_bricks_count3  = 125;
         var level_bricks3 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                              [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                              [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                              [1,1,1,1,2,2,1,2,2,1,1,1,1,1],
                              [1,1,1,2,2,2,2,2,2,2,1,1,1,1],
                              [1,1,1,2,2,2,2,2,2,2,1,1,1,1],
                              [1,1,1,2,2,2,2,2,2,2,1,1,1,1],
                              [1,1,1,1,2,2,2,2,2,1,1,1,1,1],
                              [1,1,1,1,1,2,2,2,1,1,1,1,1,1],
                              [1,1,1,1,1,1,2,1,1,1,1,1,1,1]];
                              
         
         var level_bricks_count = level_bricks_count1;
         var level_bricks = level_bricks1;
         
         
         function initMenu() {
             
         }
         
         function updateMenu() {
             if(KEY_W) {
                 game_current_stage = game_stage;
                 initGame();
             }
             
             if(KEY_M) {
                 game_current_control = mouse_control;
             }
             
             if(KEY_K) {
                 game_current_control = keyboard_control;
             }
             
         }
         
         function drawMenu() {
            textFont('34pt Arial');
            text('ARKANOID',250,180);
            
            textFont('24pt Arial');
            text('PRESS',220,270);
            textColor("#000");
            text('W',345,270);
            textColor("#999");
            text('TO START',390,270);			
            
            text('Control: ',270,330);
            if(game_current_control == mouse_control) {
                textColor("#000");
            } else {
                textColor("#999");
            }
            text('m',390,330);
            textColor("#999");
            text('ouse',417,330);
            textColor("#999");
         }
     
         function initBall() {
             ball.x = 350;			
             ball.y = 300;
             ball.dx = 0;
             ball.dy = speed;  
             ball.radius = 5;
         }
         
         function drawBall() {
             circle(ball.x, ball.y, ball.radius, "#A6A6A6");        
         }
         
         function updateBall() {
             if(ball.x + ball.dx + ball.radius > canvas.width || ball.x + ball.dx - ball.radius < 0)  ball.dx = -ball.dx;     
 
             rowheight = bricks.height + bricks.padding;
             colwidth = bricks.width + bricks.padding;
             row = Math.floor(ball.y/rowheight);
             col = Math.floor(ball.x/colwidth);
             
             if (ball.y < bricks.rows * rowheight && row >= 0 && col >= 0 && level_bricks[row][col] == 1) {
                 ball.dy = -ball.dy;
                 level_bricks[row][col] = 0;
                 score += 50;		
                 bricks_destroed++; 
             }
             
             if (ball.y < bricks.rows * rowheight && row >= 0 && col >= 0 && level_bricks[row][col] == 2) {
                 ball.dy = -ball.dy;            
                 level_bricks[row][col] = 1;
             }
             
             
             if(ball.y + ball.dy - ball.radius < 20) {
                 ball.dy = -ball.dy;
             } else {
                 if(ball.y + ball.dy + ball.radius > canvas.height - paddle.height) {
                     if(ball.x + ball.radius > paddle.x && ball.x - ball.radius < paddle.x + paddle.width) {
                         ball.dy = -ball.dy;
                         ball.dx = 8 * ((ball.x-(paddle.x+paddle.width/2))/paddle.width);						
                     } else {                
                         if(ball.y + ball.dy + ball.radius > canvas.height) {
                             lives -= 1;
                             score -= 100;
                             
                             game_start = false;
                             
                             initBall();
                             
                                         
                         }
                     }
                 }
             }
             
             ball.x += ball.dx;
             ball.y += ball.dy;    
         }
         
         function magnetBall() {
             ball.x = paddle.x + (paddle.width/2); 
             ball.y = paddle.y - paddle.height; 
         }		
         
         function initPaddle() {
             paddle.x = 100;
             paddle.y = 570;
             paddle.width = 100;
             paddle.height = 10;
         }
         
         function drawPaddle() {
             borderColor('#000');
             rectangle(paddle.x, paddle.y, paddle.width, paddle.height, "#333");
         }
 
         function updatePaddle() {
             
             if(game_current_control == mouse_control) {
                 paddle.x = mouseX - (paddle.width/2);
             } else {
                 if(KEY_LEFT) paddle.x = paddle.x - 10;
                 if(KEY_RIGHT) paddle.x = paddle.x + 10;
             }
             
             
             if(paddle.x < 0) paddle.x = 0; 
             if(paddle.x + paddle.width > 640) paddle.x = canvas.width - paddle.width;   
         }
         
         function initBricks() {
             bricks.cols = 15;
             bricks.rows = 10;
             bricks.width = (canvas.width / bricks.cols);
             bricks.height = 25;
             bricks.padding = 3;	
             bricks_count = level_bricks_count;
         }
 
 
         function drawBricks() {	
             for (i=0; i < bricks.rows; i++) {
                 for (j=0; j < bricks.cols; j++) {          
                     if (level_bricks[i][j] == 1) {         			
                           rectangle((j * (bricks.width + bricks.padding)) + bricks.padding, 
                                         (i * (bricks.height + bricks.padding)) + bricks.padding,
                                               bricks.width, bricks.height,"#fff");                
                     }
                     if (level_bricks[i][j] == 2) {                
                         rectangle((j * (bricks.width + bricks.padding)) + bricks.padding, 
                                         (i * (bricks.height + bricks.padding)) + bricks.padding,
                                               bricks.width, bricks.height,"#333");                
                     }
                 }
             }
         }
 
         function updateBricks() {
             if(lives <= 0) {
                 game_current_stage = score_stage;
             }
             
             if(bricks_count != 0) {
                 if(bricks_destroed == bricks_count)  {
                     bricks_destroed = 0;
                     level +=1;
                     speed +=2;
                     game_start = false;
                     initBall();				
                 }
             }
             
             switch(level) {
                 case 1: 
                     level_bricks_count = level_bricks_count1;
                     level_bricks = level_bricks1;
                 break;
                 case 2: 
                     level_bricks_count	= level_bricks_count2;
                     level_bricks = level_bricks2;
                 break;
                 case 3: 
                     level_bricks_count	= level_bricks_count3;
                     level_bricks = level_bricks3;
                 break;
             }
             
             if(level > 3) {
                 game_current_stage = score_stage;
             }	
 
             initBricks();
             
         }
         
         function initGame() {
             initBall();		
             initPaddle();
             initBricks();			
         }
         
         function updateGame() {			
             
             if(game_current_control == mouse_control) {
                 if(mouseClick) game_start = true;			
                 if(game_start) updateBall(); else magnetBall();
             } else {
                 if(KEY_SPACE) game_start = true;			
                 if(game_start) updateBall(); else magnetBall();
             }
             
             updatePaddle();
             updateBricks();
         }
         
         function drawInfoBar() {
             rectangle(0, 0, 740, 30, "#fc7f49");
             
             textColor('#fff');
             text('Score: ' + score,10,20);		
             text('Level: ' + level,350,20);
             text('Lives: ' + lives,680,20);
             
         }
         
         function drawGame() {			
             drawInfoBar();
             drawBall();			
             drawPaddle();			
             drawBricks();					
         }
     
         function initScore() {
         
         }
         
         function updateScore() {
             // if(F5) RESTART THE GAME
         }
         
         function drawScore() {
             textFont('34pt Arial');
             text('ARKANOID',200,180);
             
             textFont('24pt Arial');
             text('Score:',200,280);
             text(score,300,280);
             
             
             text('PRESS',80,380);
             textColor('#333');
             text('F5',200,380);			
             textColor('#999');
             text('RESTART THE GAME',247,380);
             
         }
     
     
         function init() {	
             noCursor();
             initMenu();			
         }
         
         function update() {			
             switch(game_current_stage) {
                 case menu_stage:  updateMenu(); break;
                 case game_stage:  updateGame(); break;
                 case score_stage: updateScore(); break;
             }
         }
         
         function draw() {
             textFont("10pt Arial");
             
             switch(game_current_stage) {
                 case menu_stage:  drawMenu(); break;
                 case game_stage:  drawGame(); break;
                 case score_stage: drawScore(); break;
             }
             
         }
