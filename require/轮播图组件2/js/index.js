/**
 * Created by apple on 17/2/20.
 */
require(['jquery','carousel'],function($,Carousel){
    var imageData = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
    new Carousel({
        imageData:imageData,
        seletor:'#con',
        buttonStyle:'circle',
        arrowPos:'center'
    });
    new Carousel({
        imageData:imageData,
        seletor:'#con2',
        buttonStyle:'circle',
        arrowPos:'center'
    });
});