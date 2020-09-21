class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:offsetX,y:offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}/*constraint.pointB
A Vector that specifies the offset of the constraint from center of the constraint.bodyB if defined, otherwise a world-space position.

Default: { x: 0, y: 0 }*/