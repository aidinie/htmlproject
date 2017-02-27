/**
 * Created by nad on 2017/2/14.
 */
require(["./leaf"],function (Leaf) {
var oContainer=document.getElementById('container');
var winWidth=document.documentElement.clientWidth;
    for(var i=0;i<4;i++){
        var iWidth=50 + parseInt(Math.random()*51);
        var leaf=new Leaf({
            width:iWidth,
            left:parseInt((winWidth-iWidth)*Math.random()),
            container:oContainer
        })
        leaf.fall();
    }

});
