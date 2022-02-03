// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import { Game } from "cc";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    duration: number = 0.5;
    @property
    moveAmountX: number = 300;
    @property
    moveAmountY: number = 75;
    moveEnemy: cc.ActionInterval;

   

  
    // LIFE-CYCLE CALLBACKS:

    setMovements() {
        var moveLeft = cc.moveBy(this.duration, cc.v2(-this.moveAmountX, -this.moveAmountY)).easing(cc.easeCircleActionInOut());
        var moveRight = cc.moveBy(this.duration, cc.v2(this.moveAmountX, -this.moveAmountY)).easing(cc.easeCircleActionInOut());
        return cc.repeatForever(cc.sequence(moveLeft, moveRight));
    }
   
    onLoad () {
        this.moveEnemy = this.setMovements();
        this.node.runAction(this.moveEnemy);
      

        cc.director.preloadScene('Menu');
    }
    onCollisionEnter(otherCollider,selfCollider){
        if (otherCollider.name == "bullet<BoxCollider2D>")
        {
          //add score
            this.node.stopAllActions();
            this.node.destroy();
            
        }
    }
   
    
    start () {

    }

    update (dt) {
        if(this.node.position.y<= -(this.node.parent.getContentSize().height)){
            this.node.destroy();
            cc.director.loadScene('Menu');
        }
    }
}
