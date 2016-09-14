 // 管道类
        function Pipe(cvs, ctx, x) {

            // 判断管道类是否初始化过，没有的话，就请
            if (!Pipe.isInit) {
                throw '请先初始化Pape类!';
            }

            this.cvs = cvs;
            this.ctx = ctx;
            this.space = 150;
            this.x = x; // 管道默认渲染的x轴坐标
            this.width = Pipe.IMG_WIDTH;
            this.height = Math.random() * 200 + 50;
            this.downY = this.height - Pipe.IMG_HEIGHT; // 管道默认渲染的y轴坐标
            this.UpY = this.height + this.space; // 管道默认渲染的y轴坐标
            this.speed = -2; // 管道的运动速度
            this.speedPlus = -0.00004; // 加速度
        }

        // 给管道类添加一个静态方法，用来初始化需要的一些数据
        Pipe.init = function(pipeDown,pipeUp) {
            // 给管道类添加一个静态属性，这个属性值是图片对象
            Pipe.pipeDown = pipeDown;
            Pipe.pipeUp = pipeUp;
            // 管道的默认宽度（常量）, 因为这张图片由3只小鸟构成，所以需要除以3。
            Pipe.IMG_WIDTH = pipeDown.width;
            // 管道的默认高度（常量）
            Pipe.IMG_HEIGHT = pipeDown.height;

            // 管道是否已经初始化控制
            if (pipeDown && pipeUp) {
                Pipe.isInit = true;
            }
        };

        extend(Pipe.prototype, {
            draw: function () {
                this.ctx.drawImage(Pipe.pipeDown, this.x,this.downY, Pipe.IMG_WIDTH, Pipe.IMG_HEIGHT)
                this.ctx.drawImage(Pipe.pipeUp, this.x,this.UpY, Pipe.IMG_WIDTH, Pipe.IMG_HEIGHT)
                this.drawPipePath();
            },

            drawPipePath: function () {
                this.ctx.rect(this.x,this.downY, Pipe.IMG_WIDTH, Pipe.IMG_HEIGHT);
                this.ctx.rect(this.x,this.UpY, Pipe.IMG_WIDTH, Pipe.IMG_HEIGHT);
            },

            update: function () {
                this.x += this.speed;
                this.speed += this.speedPlus;

                if (this.x <= -this.width) {
                    this.x = this.width * 3 * 6;
                    this.height = Math.random() * 200 + 50;
                    this.downY = this.height - Pipe.IMG_HEIGHT; // 管道默认渲染的y轴坐标
                    this.UpY = this.height + this.space; // 管道默认渲染的y轴坐标
                }
            }
        });