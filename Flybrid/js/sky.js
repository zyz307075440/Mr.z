// 天空类
function Sky(cvs, ctx, x) {
    if (!Bird.isTrue) {
        throw "请先初始化Bird类";
    }
    this.cvs = cvs;
    this.ctx = ctx;
    this.x = x || 0; // 渲染天空的X轴 不传参数默认为0;
    this.y = 0; // 渲染天空的Y轴 
    this.speed = -2; //天空移动的速度;
    this.speedPlus = 0.00004; //天空移动加速度;
}

Sky.init = function(img) {
    // 在天空类中添加一个天空img对象
    Sky.img = img;
    // 添加天空宽 等于 图片的宽度;
    Sky.IMG_WIDTH = img.width;
    // 添加天空高 等于 图片的高度;
    Sky.IMG_HEIGHT = img.height;
    if (img) {
        Sky.isTrue = true;
    }

}



extend(Sky.prototype, {
    // 添加一个绘制天空的方法;
    draw: function() {
        this.ctx.drawImage(Sky.img, this.x, this.y);
    },
    // 更新下一帧天空的数据
    update: function() {
        this.x += this.speed;
        this.speed += this.speedPlus;
        if (this.x < -Sky.IMG_WIDTH) {
            this.x += Sky.IMG_WIDTH * 2;
        }

    }
});
