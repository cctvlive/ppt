
/*2014-4-22
 * 
 *
 * 加载类目页导图，首页导图，关注也导图，搜索页导图，个人会员也导图，购物车导图的js库
 * 
 * 已完成类目页导图 搜狐哦也导图 关注也导图设计布局
 * 
 * 
 * 
 */
 $(document).ready(function(){
		   var webRoot='http://hzxx.sinaapp.com/app/Image_Information?callback=?';
                    var html='';
                    $.ajax({ url: webRoot, type: "get",  dataType: "jsonp", async:false,jsonp:"callback",
/*jsonpCallback:"getItem",*/
                    success:function(json) {  for(var i in json) {  
// alert(i+":"+esult[i]);//循环输出a:1,b:2,etc. 
//htmlhader='<div class="item active"><img style="height:100px" src="'+json[i].picturelinkgood+'" alt="Second slide"><div class="carousel-caption"><a href="./app/ceshi.html" class="btn-primary " style="text-decoration:none;" role="button"><h1>品牌团</h1></a><p>品牌实力平台</p><p>品牌团线：400-600-800</p></div></div>';

// $("#htmlhader").append(htmlhader);
									             html='<div class="col-xs-2 col-md-4 '+'"'+'<a href="./app/p-r.html"><img class="img-thumbnail" src="'+json[i].picturelinkgood+'" />'+'</a></div>';
									             $("#app").append(html);
									            }  
											},  
                    error:function(){alert('没有发现');},
                    timeout:3000  
                            }
                            );
     });