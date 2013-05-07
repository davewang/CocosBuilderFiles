//
// GameScene class
//
var gAudioEngine;
var GameScene = function(){};
cc.log("GameScene was loaded");
GameScene.prototype.onDidLoadFromCCB = function()
{   
    cc.log("File was loaded onDidLoadFromCCB");
};
// Create callback for button
GameScene.prototype.onPressButton = function()
{	
    gAudioEngine.playEffect("sounds/click.wav");
};