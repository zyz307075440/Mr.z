 // 大地类
        function Land(cvs, ctx, x) {

            // 判断大地类是否初始化过，没有的话，就请初始化
            if (!Land.isInit) {
                throw '请先初始化Land类!';
            }
            this.cvs = cvs;
            this.ctx = ctx;
            this.x = x || 0; // 大地默认渲染的x轴坐标
            this.y = cvs.height - Land.IMG_HEIGHT; // 大地默认渲染的y轴坐标
            this.width = Land.IMG_WIDTH;
            this.height = Land.IMG_HEIGHT;
            this.speed = -2; // 大地的运动速度
            this.speedPlus = -0.00004; // 加速度
        }

        // 给大地类添加一个静态方法，用来初始化需要的一些数据
        Land.init = function(img) {
            // 给大地类添加一个静态属性，这个属性值是图片对象
            Land.img = img;
            // 大地的默认宽度（常量）, 因为这张图片由3只小鸟构成，所以需要除以3。
            Land.IMG_WIDTH = img.width;
            // 大地的默认高度（常量）
            Land.IMG_HEIGHT = img.height;

            // 大地是否已经初始化控制
            if (img) {
                Land.isInit = true;
            }
        };

        // 给大地原型扩展方法
        extend(Land.prototype, {

            // 渲染大地
            draw: function() {
                this.ctx.drawImage(Land.img, this.x, this.y);
            },

            // 更新大地下一帧渲染时的数据
            update: function() {
                this.x += this.speed;
                this.speed += this.speedPlus;

                if (this.x < -Land.IMG_WIDTH) {

                    // 当一张大地走出画布时，让这张大地向右拼接
                    this.x = this.x + Land.IMG_WIDTH * 4;
                }
            }
        });

