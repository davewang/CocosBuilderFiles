var kMenuSelectionNone = 0;
var kMenuSelectionPlay = 1;
var kMenuSelectionAbout = 2;

//
// MainScene class
//
var gAudioEngine;
var MainScene = function(){};
cc.log("MainScene was loaded");
MainScene.prototype.onDidLoadFromCCB = function()
{   
    cc.log("File was loaded onDidLoadFromCCB");
    // Setup callback for completed animations
    this.rootNode.animationManager.setCompletedAnimationCallback(this, this.onAnimationComplete);
    // Reset menu selection
    this.menuSelection = kMenuSelectionNone;
    // Schedule callback
//    this.rootNode.onUpdate = function(dt) {
//        this.controller.onUpdate();
//    };
//  this.rootNode.schedule(this.rootNode.onUpdate);
};
MainScene.prototype.onAnimationComplete = function()
{
	cc.log("File was onAnimationComplete"); 
	if (this.menuSelection == kMenuSelectionPlay)
	{
		var scene = cc.BuilderReader.loadAsScene("Scenes/GameScene.ccbi");
		cc.Director.getInstance().replaceScene(scene);
		gAudioEngine.stopMusic();
    }
};
// Create callback for button
MainScene.prototype.onPressButton = function()
{	 
	cc.log("onPressButton ");
    this.menuSelection = kMenuSelectionPlay;
    this.rootNode.animationManager.runAnimationsForSequenceNamed("Outro");
    
    // Setup sound
	gAudioEngine = cc.AudioEngine.getInstance();
	gAudioEngine.playEffect("sounds/click.wav");
	//this.rootNode.animationManager.runAnimationsForSequenceNamed("Outro");
	//this.menu.setEnabled(false);
	
};