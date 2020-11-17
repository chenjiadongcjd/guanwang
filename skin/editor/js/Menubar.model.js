/**
 * @author songjiangbo
 * 
 * 加载军事模型预置体
 * 
 * 
 */

function addPreset1(url){
	var loader = new THREE.FBXLoader();//创建一个FBX加载器
    loader.load("../../../skin/editor/Modle/Military-model/"+url, function(obj) {
		editor.execute( new AddObjectCommand( editor, obj ) );
	})
	
    // var object_loader = new THREE.ObjectLoader();
    // object_loader.load(url, function(object) {
    //     object.scale.multiplyScalar(5);
    //     editor.execute( new AddObjectCommand( editor, object ) );

    // });
}

Menubar.model = function ( editor ) {

	var strings = editor.strings;

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'menubar/military' ) );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// 1客机

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/military/model1' ) );
	option.onClick( function () {

		addPreset1("Air_Force_One.FBX")

	} );
	options.add( option );

	// 2战斗机

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/military/model2' ) );
	option.onClick( function () {

		addPreset1("Combat_Jet.FBX")

	} );
	options.add( option );


	return container;

};
