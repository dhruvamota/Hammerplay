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
export default class NewClass extends cc.Component
{

    @property
    BulletSpeed: number = 800;

    onCollisionEnter(otherCollider,selfCollider)
    {
        if (otherCollider.name == "enemy<BoxCollider2D>") {
            this.node.destroy();
        }
    }
          




    update(dt)
    {
        this.node.setPosition(this.node.position.x,this.node.position.y -= this.BulletSpeed*dt);
        if(this.node.position.y <= -(this.node.parent.getContentSize().height)){
            this.node.destroy();
        }
    }
}
