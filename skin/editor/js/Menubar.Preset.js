/**
 * @author songjiangbo
 * 
 * 加载工业模型预置体
 */


 
// 预置体加载

function addPreset(url){
	var path =  "../../../skin/editor/Modle/Industrial-model/";
    var object_loader = new THREE.ObjectLoader();
    object_loader.load(path+url, function(object) {
        object.scale.multiplyScalar(5);
        editor.execute( new AddObjectCommand( editor, object ) );

        // obj.children[0].scale.set(1,1,1);//网格模型缩放
        // obj.children[0].geometry.center();//网格模型的几何体居中
        // obj.children[0].material.color.set(0x1AEDC1);//设置材质颜色
    });
}

Menubar.Preset = function ( editor ) {

	var strings = editor.strings;

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'menubar/industry' ) );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// 滚筒机

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/industry/model1' ) );
	option.onClick( function () {

		addPreset('GTJ.json');
		
	} );
	options.add( option );

	// 链条机

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/industry/model2' ) );
	option.onClick( function () {

		addPreset('LTJ.json');

	} );
	options.add( option );

	// 顶升移载

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/industry/model3' ) );
	option.onClick( function () {

		addPreset('DSYZ.json');

	} );
	options.add( option );

	// 夹抱机

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/industry/model4' ) );
	option.onClick( function () {

		addPreset('JBJ.json');

	} );
	options.add( option );

	// 码盘机

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/industry/model5' ) );
	option.onClick( function () {

		addPreset('MPJ.json');

	} );
	options.add( option );

	// 堆垛机

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/industry/model6' ) );
	option.onClick( function () {

		addPreset('DDJ.json');

	} );
	options.add( option );

	// 提升机

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/industry/model7' ) );
	option.onClick( function () {

		addPreset('TSJ.json');

	} );
	options.add( option );

	// AGV

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/industry/model8' ) );
	option.onClick( function () {

		addPreset('AGV.json');

	} );
	options.add( option )

	// RGV

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/industry/model9' ) );
	option.onClick( function () {

		addPreset('RGV.json');

	} );
	options.add( option );

	// 多穿小车
	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/industry/model10' ) );
	option.onClick( function () {

		addPreset('DCC.json');

	} );
	options.add( option );



	// 机器人

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/industry/model12' ) );
	option.onClick( function () {

		addPreset('JQR.json');

	} );
	options.add( option );

	// 裹膜机

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/industry/model13' ) );
	option.onClick( function () {

		addPreset('GMJ.json');

	} );
	options.add( option );

	return container;

};
