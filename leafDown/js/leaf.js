/**
 * Created by nad on 2017/2/14.
 */
define(function (require,exports,module) {
    function Leaf(options) {
        this.width=options.width;
        this.left=options.left;
        this.oImg=new Image();
        this.oImg.src="./img/" + parseInt(Math.random()*4+1)+'.png';
        this.oImg.width=this.width;
        this.oImg.style.left=this.left +"px";
        //this.container=options.container;
        options.container.appendChild(this.oImg);

    }
    Leaf.prototype.fall=function () {
        var that=this;
        setInterval(function () {
            that.oImg.style.top=that.oImg.offsetTop +5 +"px";
        },Math.random()*200)
    };
    module.exports=Leaf;
});