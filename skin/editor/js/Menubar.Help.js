/**
 * @author songjiangbo
 * 天空盒
 */

function skyBox(path1){
    var path = "../../../editor/editor/images/SKY/";
    var y = editor.scene.getObjectByName("skyBox");
    //清除之前的天空盒
    editor.execute( new RemoveObjectCommand( editor, y ) );

    var directions  = ["right", "left", "up", "down", "front", "back"];
    var format = ".jpg";

    var materialArray = [];
    for (var i = 0; i < 6; i++)
        materialArray.push( new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture( path + path1 +"/"+ directions[i] + format ),
            side: THREE.BackSide
        }));
    var geometry = new THREE.BoxGeometry( 400000, 400000, 400000);
    var mesh = new THREE.Mesh( geometry, materialArray );
    mesh.name = 'skyBox';
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 0;
    editor.execute( new AddObjectCommand( editor, mesh ) );
    
}


Menubar.Help = function ( editor ) {

	var strings = editor.strings;

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'menubar/sky' ) );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// 天空场景1
	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/sky/sky1' ) );
	option.onClick( function () {

		skyBox("sky1")

	} );
	options.add( option );

	// 天空场景2

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/sky/sky2' ) );
	option.onClick( function () {

		skyBox("sky2")

	} );
	options.add( option );


	// 天空场景4
	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/sky/sky4' ) );
	option.onClick( function () {

		skyBox("sky4")

	} );
	options.add( option );

	// 天空场景5
	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/sky/sky5' ) );
	option.onClick( function () {

		skyBox("sky5")

	} );
	options.add( option );


	// 晴天3
	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/sky/sky6' ) );
	option.onClick( function () {

		skyBox("sky0")

	} );
	options.add( option );


	// 天空场景10
	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/sky/sky10' ) );
	option.onClick( function () {

		skyBox("sky10")

	} );
	options.add( option );

	return container;


};
