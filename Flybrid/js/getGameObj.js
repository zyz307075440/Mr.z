function getGameObj(fn) {
	        // 创建一个对象保存图片路径;
	        var imgPathObj = {
	            'birds': "./birds.png",
	            "land": "./land.png",
	            "pipeDown": "./pipeDown.png",
	            "pipeUp": "./pipeUp.png",
	            "sky": "sky.png"
	        }

	        // 创建一个对象存放图片对象;
	        var imgObj = {}
	            // 创建一个变量来计数
	        var imgFlag = 0;
	        // 遍历路径对象;
	        for (var key in imgPathObj) {
	            // 创建一个Image对象;
	            var img = new Image();
	            // 创建一个变量保存路径
	            var path = imgPathObj[key];
	            // 给img绑定加载完成事件;
	            img.addEventListener('load', function() {

	                // 每加载一次 计数器加1;
	                imgFlag++;

	                // 当图片加载完毕后执行;
	                if (imgFlag >= 5) {
	                    fn(imgObj);
	                };
	            });
	            // 给img添加src属性;
	            img.src = path;
	            // 把img对象放入imgObj对象中;
	            imgObj[key] = img;

	        }
	    }