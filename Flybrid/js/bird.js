 // 创建小鸟类
        function Bird(cvs, ctx, x, y, width, height) {
            if (!Bird.isTrue) {
                throw "请先初始化Bird类"
            }
            this.cvs = cvs;
            this.ctx = ctx;
            this.x = x; // 
            this.y = y; //
            this.width = width; //小鸟宽度
            this.height = height; //小鸟高度
            this.index = 0; //小鸟渲染的帧数;
            this.speed = 1; //小鸟下落速度;
            this.speedPlus = 0.05; //小鸟下落加速度;
        }

        Bird.init = function (img) {
           // 在鸟类中添加一个小鸟img对象
            Bird.img = img;
            // 添加每个小鸟宽高;
            Bird.IMG_WIDTH = img.width / 3;
            Bird.IMG_HEIGHT = img.height;
            if (img) {
                Bird.isTrue = true;
            }
            
        }

        
        extend(Bird.prototype, {
            // 给原型添加一个渲染小鸟的方法;
            draw: function() {

                // 保存坐标轴
                this.ctx.save();

 /*
         * 如果要让一个图形旋转，需要如下几步骤：
         * 1、计算好要绘制图形的中心坐标
         * 2、然后根据计算好的坐标平移坐标系
         * 3、根据想要旋转的弧度旋转坐标系
         * 4、绘制图形，绘制的图形的x轴为-width/2，绘制的图形的y轴为-height/2
         * */

                // 获取到小鸟的中心坐标;
                var coreX = this.x + this.width / 2;
                var coreY = this.y + this.height / 2;
                // y移动小鸟中心坐标;
                this.ctx.translate(coreX, coreY);

                // 掉落速度增加一次 角度旋转10度;
                var rad = this.speed * 10;

                rad = rad > 35 ? 35 : rad;
                // 旋转小鸟角度
                this.ctx.rotate(angleToRad(rad));

                this.ctx.drawImage(Bird.img, this.index * 52, 0, Bird.IMG_WIDTH,
                 Bird.IMG_HEIGHT, -this.width / 2, -this.height / 2, this.width, this.height);



                // 回滚保存的坐标轴
                this.ctx.restore();
            },
            // 判断小鸟渲染下一帧的数据;
            update: function() {
                this.index = ++this.index % 3;
                this.y += this.speed;
                this.speed += this.speedPlus;
            }

        });