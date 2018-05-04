/*
 *author wxf
 * date 2018-5-4
 *
 */

//  服务于任何图片元素，在img 幕后，再将
//  origin_src 设置过去
 var LazyLoadImage = (function(){
    //  变量的冒泡查找
    // const a = 1;
    return {
        setSrc:function(ele){
            // console.log(a);
            const url = 
            ele.getAttribute('origin_src')?
            ele.getAttribute('origin_src'):'';
            if(!url) return;
            const oImg = document.createElement('img');
            // 不会影响页面， none会离开文档流
            // opacity：0 这个会撑长页面
            oImg.style.display='none';
            
            document.body.appendChild(oImg);
            // 注册事件
            // addEventListener 新的
            // 旧的写法
            // 当设置了图片的src后，就会启动http请求
            // 图片下载完成后 .onload 注册事件会回调
            oImg.onload = function(){
                // 不会立即执行
                // 后执行
                // console.log('图片下载完成');
                ele.src = url;
                document.body.removeChild(this);
                // ele.parentNode
            }
            // 先执行
            // console.log('设置src');
            
            oImg.src = url;
        }
    }
 })();
 