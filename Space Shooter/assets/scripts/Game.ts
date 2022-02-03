// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  

    @property(cc.Label)
    score:cc.Label = null;

    ActualScore:number = 0;
   
    // LIFE-CYCLE CALLBACKS:

    
    
    
    AddScore(){
        this.ActualScore += 10;
        this.score.string = "SCORE: "+this.ActualScore.toString();

       
    }


    onLoad () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.score

    }

    start () {

    }

    // update (dt) {}
}
