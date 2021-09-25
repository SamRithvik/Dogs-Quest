var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["62796b07-19e9-4852-a884-724e759f3021","d84df706-9b75-4f24-8cdb-97fe03e4b12a","f685582c-c485-44ed-823f-e33279b94102","23bdacfb-d115-4926-b946-a5888bacd9ab","39151dc5-f28c-4f61-a5ca-ad91650823d5","2d814ae3-517e-4306-abad-9ded28a41f74","d17d7c57-afbe-4bdc-8e67-4eeaf70f43fe"],"propsByKey":{"62796b07-19e9-4852-a884-724e759f3021":{"name":"cuteanimals_dog_1","sourceUrl":null,"frameSize":{"x":51,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"7ce1UOcNyLe86Z0FZLfXRvCTE_FPqjqO","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":75},"rootRelativePath":"assets/62796b07-19e9-4852-a884-724e759f3021.png"},"d84df706-9b75-4f24-8cdb-97fe03e4b12a":{"name":"bone_1","sourceUrl":null,"frameSize":{"x":30,"y":44},"frameCount":1,"looping":true,"frameDelay":12,"version":"ACrlHqNTeN8N034I6A_TNrLdlqFX2rec","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":44},"rootRelativePath":"assets/d84df706-9b75-4f24-8cdb-97fe03e4b12a.png"},"f685582c-c485-44ed-823f-e33279b94102":{"name":"cuteanimals_cat_1","sourceUrl":null,"frameSize":{"x":72,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"buNRSxaL0eyUmazJmW9iJN8cb48dogAR","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":75},"rootRelativePath":"assets/f685582c-c485-44ed-823f-e33279b94102.png"},"23bdacfb-d115-4926-b946-a5888bacd9ab":{"name":"face_milk_1","sourceUrl":null,"frameSize":{"x":18,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"gWVhZuYWVyX4JzJrZEsLJg3crRorQaYO","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":45},"rootRelativePath":"assets/23bdacfb-d115-4926-b946-a5888bacd9ab.png"},"39151dc5-f28c-4f61-a5ca-ad91650823d5":{"name":"monster_08_1","sourceUrl":null,"frameSize":{"x":54,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"i3Db7E6IZO2wfm68AZDc3hVEJ2NaEL4D","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":54,"y":100},"rootRelativePath":"assets/39151dc5-f28c-4f61-a5ca-ad91650823d5.png"},"2d814ae3-517e-4306-abad-9ded28a41f74":{"name":"coin_gold_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"kBAzzlqOdt6kJakpiijbqgtuYM.coP6i","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/2d814ae3-517e-4306-abad-9ded28a41f74.png"},"d17d7c57-afbe-4bdc-8e67-4eeaf70f43fe":{"name":"cny_08_1","sourceUrl":null,"frameSize":{"x":250,"y":213},"frameCount":1,"looping":true,"frameDelay":12,"version":"Tx7pzSy56a9PVPVQT5x8kLfOUVMPL4PX","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":213},"rootRelativePath":"assets/d17d7c57-afbe-4bdc-8e67-4eeaf70f43fe.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var coin = 0;

var collected = "no";

var dog = createSprite(30,350,50,50);
dog.setAnimation("cuteanimals_dog_1");

var cat = createSprite(320,80,30,30);
cat.setAnimation("cuteanimals_cat_1");

var bone = createSprite(380,30,25,25);
bone.setAnimation("bone_1");

var milk = createSprite(30,30,15,15);
milk.setAnimation("face_milk_1");
milk.visible = false;

var monster = createSprite(50,50,50,50);
monster.setAnimation("monster_08_1");
monster.visible = false;

var coin1 = createSprite(340,350,25,25);
coin1.setAnimation("coin_gold_1");

var coin2 = createSprite(170,70,25,25);
coin2.setAnimation("coin_gold_1");

var coin3 = createSprite(50,220,25,25);
coin3.setAnimation("coin_gold_1");

var gameState = "Play";

function draw() {
  background("gray");
  createEdgeSprites();

if (gameState === "Play"){
  if (keyDown("right")){
  dog.velocityX = 5;
  dog.velocityY = 0;
}else{
  dog.velocityX = 0;
}

  if (keyDown("left")){
  dog.velocityX = -5;
  dog.velocityY = 0;
}

if (keyDown("up")){
  dog.velocityX = 0;
  dog.velocityY = -5;
} else{
  dog.velocityY = 0;
}

if (keyDown("down")){
  dog.velocityX = 0;
  dog.velocityY = 5;
} 

if (dog.isTouching(cat) && collected === "yes"){
  gameState = "speech4";
}else{
  if (dog.isTouching(cat)){
  dog.x = 30;
  dog.y = 350;
  gameState = "speech";
  }
}

if (dog.isTouching(monster) && coin === 3){
  gameState = "speech3";
}else{
  if (dog.isTouching(monster)){
  dog.x = 30;
  dog.y = 350;
  gameState = "speech2";
  }
}

if (dog.isTouching(coin1)){
  coin1.destroy();
  coin = coin + 1;
}

if (dog.isTouching(coin2)){
  coin2.destroy();
  coin = coin + 1;
}

if (dog.isTouching(coin3)){
  coin3.destroy();
  coin = coin + 1;
}

if (dog.isTouching(milk)){
  collected = "yes";
  milk.destroy();
}

if (dog.isTouching(bone)){
  gameState = "win";
  bone.destroy();
}

}

if (gameState === "speech"){
  dog.velocityY = 0;
  dog.velocityX = 0;
  textSize(18);
  fill("white");
  text("Cat:Get me some Milk and then I'll let you pass", 15,200);
  
  if(keyWentDown("right")|| keyWentDown("left")|| keyWentDown("down")|| keyWentDown("up")){
    gameState = "Play";
    milk.visible = true;
    monster.visible = true;
  }
}

if (gameState === "speech2"){
  dog.velocityY = 0;
  dog.velocityX = 0;
  textSize(16);
  fill("white");
  text("Monster:Get me 3 Coins and then i'll let you pass", 15,200);
  
  if(keyWentDown("right")|| keyWentDown("left")|| keyWentDown("down")|| keyWentDown("up")){
    gameState = "Play";
  }
}

if (gameState === "speech3"){
  dog.velocityY = 0;
  dog.velocityX = 0;
  textSize(30);
  fill("white");
  text("Thank You So Much!", 15,200);
  
  if(keyWentDown("right")|| keyWentDown("left")|| keyWentDown("down")|| keyWentDown("up")){
    gameState = "Play";
    monster.destroy();
  }
}

if (gameState === "speech4"){
  dog.velocityY = 0;
  dog.velocityX = 0;
  textSize(30);
  fill("white");
  text("Thank You So Much!", 15,200);
  
  if(keyWentDown("right")|| keyWentDown("left")|| keyWentDown("down")|| keyWentDown("up")){
    gameState = "Play";
    cat.destroy();
  }
}

if (gameState === "win"){
  dog.velocityX = 0;
  dog.velocityY = 0;
  dog.x = 200;
  dog.y = 200;
  dog.setAnimation("cny_08_1");
  textSize(50);
  fill("white");
  background("black");
  text("You Win!",90,350);
}

  drawSprites();
  
  dog.bounceOff(edges);
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
