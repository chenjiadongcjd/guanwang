/**
 * @author mrdoob / http://mrdoob.com/
 */
//案例
Menubar.Examples = function ( editor ) {

	var strings = editor.strings;

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	//示例模块
	title.setTextContent( strings.getKey( 'menubar/examples' ) );
	container.add( title );

	title.onClick(function(){
		window.open( '../../../skin/editor/case/examples/index.html#city_city', '_blank' )
	})
	return container;

};


//关于我们
Menubar.About = function ( editor ) {

	var strings = editor.strings;

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	//示例模块
	title.setTextContent( strings.getKey( 'menubar/about' ) );
	container.add( title );

	title.onClick(function(){
		window.open( '../../index.html', '_blank' )
	})
	return container;

};