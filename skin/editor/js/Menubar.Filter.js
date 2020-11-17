/**
 * @author songjiangbo
 * 滤镜
 */

Menubar.Filter = function ( editor ) {

	var strings = editor.strings;

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	//示例模块
	title.setTextContent( strings.getKey( 'menubar/filter' ) );
	container.add( title );

	title.onClick(function(){
		alert("滤镜功能开发中！")
	})

	return container;


};
