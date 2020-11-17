// 滤镜
function firePople(){

 var $html='';
    $html+='<div id="fire-pople">'
    $html+=     '<div class="pople-title">滤镜'
    $html+=         '<button class="fire-btn">x</button>'
    $html+=     '</div>'
    $html+=     '<div class="pople-content">'
    $html+=         '<div class="content-list">'
    $html+=             '<div>色度</div>'
    $html+=             '<input type="text" value="0.00000">'
    $html+=         '</div>'
    $html+=         '<div class="content-list">'
    $html+=             '<div>亮度</div>'
    $html+=             '<input type="text" value="0.00000">'
    $html+=         '</div>'
    $html+=         '<div class="content-list">'
    $html+=             '<div>饱和度</div>'
    $html+=             '<input type="text" value="0.00000">'
    $html+=         '</div>'
    $html+=         '<div class="content-list">'
    $html+=             '<div>对比度</div>'
    $html+=             '<input type="text" value="0.00000">'
    $html+=         '</div>'
    $html+=         '<div class="content-list">'
    $html+=             '<div>灰度</div>'
    $html+=             '<input type="text" value="0.00000">'
    $html+=         '</div>'
    $html+=         '<div class="content-list">'
    $html+=             '<div>模糊</div>'
    $html+=             '<input type="text" value="0.00000">'
    $html+=         '</div>'
    $html+=     '</div>'
    $html+='</div>'

     $('body').append($html);

    // 拖拽移动
}




