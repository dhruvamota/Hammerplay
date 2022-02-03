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

    moveLeft:number = 0;
    moveRight:number = 0;
    playerLife: number = 3;
    @property(cc.Prefab)
    Bullet:cc.Prefab = null;

   
    shootBullets() {
        var bullet = cc.instantiate(this.Bullet);
        bullet.setPosition(this.node.position.x, this.node.position.y);
        this.node.parent.addChild(bullet);
    }

    moveJet(event){
        switch(event.keyCode){
            case cc.macro.KEY.left:
                this.moveLeft = 1;
                break;
            case cc.macro.KEY.right:
                this.moveRight = 1;
                break;
        }
        
    }
    stopJet(event){
        switch(event.keyCode){
            case cc.macro.KEY.left:
                this.moveLeft = 0;
                break;
            case cc.macro.KEY.right:
                this.moveRight = 0;
                break;
        }
 
    }

    onCollisionEnter(otherCollider, selfCollider) {
        if (otherCollider.name == "enemy<BoxCollider2D>") {
            this.playerLife -= 1;
            //display health
            if (this.playerLife < 1)
            {
                cc.director.loadScene('Menu');
            }
        }
    }
    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.moveJet,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.stopJet,this);

        
    }

    start () {

    }

    update (dt) {
        if(this.moveLeft == 1){
            this.node.setPosition(this.node.position.x -= 300*dt,this.node.position.y);
        }
        if(this.moveRight == 1){
            this.node.setPosition(this.node.position.x += 300*dt,this.node.position.y);
        }
        
        
        
    }

    /*hookInput() {
        const cannon = this;

        cc.eventManager.addListener({ // 2
            event: cc.EventListener.KEYBOARD, // 3
            onKeyPressed(kCode, e) { // 4
                switch (kCode) {
                    case cc.KEY.space:
                        this.scheduleOnce(function() {
    
             shootBullets();
                        }, 0.5)
                }
            },
            
            
        }, this.node);
    }*/

}
