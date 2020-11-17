/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.File = function ( editor ) {

	var NUMBER_PRECISION = 6;

	function parseNumber( key, value ) {

		return typeof value === 'number' ? parseFloat( value.toFixed( NUMBER_PRECISION ) ) : value;

	}

	//

	var config = editor.config;
	var strings = editor.strings;

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'menubar/file' ) );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// New 新建

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/file/new' ) );
	option.onClick( function () {

		if ( confirm( 'Any unsaved data will be lost. Are you sure?' ) ) {

			editor.clear();

			//模拟太阳光
			function PointLight(){

				//添加点光源，并且设置光照距离为10000
				var pointColor = "0xffffff";
				var pointLight = new THREE.PointLight(pointColor);
				pointLight.distance = 10000;

				pointLight.name = 'initPointLight';

				//设置光照强度
				pointLight.intensity = 1.4;
	
				pointLight.position.set( 10.000, 60.000, -84.221 );
				pointLight.castShadow = true;	//开启阴影

				pointLight.shadow.mapSize.width=4096;	//阴影贴图宽度设置为2048像素
				pointLight.shadow.mapSize.height=4096;	//阴影贴图高度设置为2048像素
	
				editor.execute( new AddObjectCommand( editor, pointLight ) );
			}

			//环境光
			function AmbientLight(){
				var color1 = 0xD7EFFF;
				var light = new THREE.AmbientLight( color1, 0.5);
				light.name = 'initAmbientLight';
				editor.execute( new AddObjectCommand( editor, light ) );
			}
			//初始天空
			function sky(){
				var path = "../../../skin/editor/images/SKY/sky0/";
			
				var directions  = ["right", "left", "up", "down", "front", "back"];
				var format = ".jpg";
			
				var materialArray = [];
				for (var i = 0; i < 6; i++)
					materialArray.push( new THREE.MeshBasicMaterial({
						map: THREE.ImageUtils.loadTexture( path + directions[i] + format ),
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
			//默认平面
			function initPlane(){
				// 创建一个平面 并设置平面的颜色
				var planeGeometry = new THREE.PlaneGeometry(300, 300);
				var planeMaterial = new THREE.MeshLambertMaterial({color: 0x9D9B9B, wireframe: false});
				var plane = new THREE.Mesh(planeGeometry, planeMaterial);

				plane.name = 'initPlane';
		
				//设置平面为接受投射阴影的物体
				plane.receiveShadow = true;
		
				// 旋转并定位平面
				plane.rotation.x = -0.5 * Math.PI;
				plane.position.x = 0;
				plane.position.y = 0;
				plane.position.z = 0;

				editor.execute( new AddObjectCommand( editor, plane ) );
			}
			initPlane();
			sky();
			AmbientLight();
			PointLight();
		}

	} );
	options.add( option );

	//

	options.add( new UI.HorizontalRule() );

	//导入

	var form = document.createElement( 'form' );
	form.style.display = 'none';
	document.body.appendChild( form );

	var fileInput = document.createElement( 'input' );
	fileInput.multiple = true;
	fileInput.type = 'file';
	fileInput.addEventListener( 'change', function ( event ) {

		editor.loader.loadFiles( fileInput.files );
		form.reset();

	} );
	form.appendChild( fileInput );


	//导入
	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/file/import' ) );
	option.onClick( function () {

		fileInput.click();

	} );
	options.add( option );

	//

	options.add( new UI.HorizontalRule() );

	// Export Geometry

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/file/export/geometry' ) );
	option.onClick( function () {

		var object = editor.selected;

		if ( object === null ) {

			alert( 'No object selected.' );
			return;

		}

		var geometry = object.geometry;

		if ( geometry === undefined ) {

			alert( 'The selected object doesn\'t have geometry.' );
			return;

		}

		var output = geometry.toJSON();

		try {

			output = JSON.stringify( output, parseNumber, '\t' );
			output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		} catch ( e ) {

			output = JSON.stringify( output );

		}

		saveString( output, 'geometry.json' );

	} );
	options.add( option );

	// Export Object

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/file/export/object' ) );
	option.onClick( function () {

		var object = editor.selected;

		if ( object === null ) {

			alert( 'No object selected' );
			return;

		}

		var output = object.toJSON();

		try {

			output = JSON.stringify( output, parseNumber, '\t' );
			output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		} catch ( e ) {

			output = JSON.stringify( output );

		}

		saveString( output, 'model.json' );

	} );
	options.add( option );

	// Export Scene

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/file/export/scene' ) );
	option.onClick( function () {

		var output = editor.scene.toJSON();

		try {

			output = JSON.stringify( output, parseNumber, '\t' );
			output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		} catch ( e ) {

			output = JSON.stringify( output );

		}

		saveString( output, 'scene.json' );

	} );
	options.add( option );

	//

	options.add( new UI.HorizontalRule() );

	// Export DAE

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/file/export/dae' ) );
	option.onClick( function () {

		var exporter = new THREE.ColladaExporter();

		exporter.parse( editor.scene, function ( result ) {

			saveString( result.data, 'scene.dae' );

		} );

	} );
	options.add( option );

	// Export GLB

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/file/export/glb' ) );
	option.onClick( function () {

		var exporter = new THREE.GLTFExporter();

		exporter.parse( editor.scene, function ( result ) {

			saveArrayBuffer( result, 'scene.glb' );

			// forceIndices: true, forcePowerOfTwoTextures: true
			// to allow compatibility with facebook
		}, { binary: true, forceIndices: true, forcePowerOfTwoTextures: true } );

	} );
	options.add( option );

	// Export GLTF

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/file/export/gltf' ) );
	option.onClick( function () {

		var exporter = new THREE.GLTFExporter();

		exporter.parse( editor.scene, function ( result ) {

			saveString( JSON.stringify( result, null, 2 ), 'scene.gltf' );

		} );


	} );
	options.add( option );

	// Export OBJ

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/file/export/obj' ) );
	option.onClick( function () {

		var object = editor.selected;

		if ( object === null ) {

			alert( 'No object selected.' );
			return;

		}

		var exporter = new THREE.OBJExporter();

		saveString( exporter.parse( object ), 'model.obj' );

	} );
	options.add( option );

	// Export STL (ASCII)

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/file/export/stl' ) );
	option.onClick( function () {

		var exporter = new THREE.STLExporter();

		saveString( exporter.parse( editor.scene ), 'model.stl' );

	} );
	options.add( option );

	// Export STL (Binary)

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/file/export/stl_binary' ) );
	option.onClick( function () {

		var exporter = new THREE.STLExporter();

		saveArrayBuffer( exporter.parse( editor.scene, { binary: true } ), 'model-binary.stl' );

	} );
	options.add( option );

	//

	options.add( new UI.HorizontalRule() );

	// 发布

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( strings.getKey( 'menubar/file/publish' ) );
	option.onClick( function () {

		var zip = new JSZip();

		//

		var output = editor.toJSON();

		output.metadata.type = 'App';

		
		delete output.history;	//删除输出后的历史记录




		var vr = output.project.vr;

		output = JSON.stringify( output, parseNumber, '\t' );
		output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );

		zip.file( 'app.json', output );

		

		//

		var title = config.getKey( 'project/title' );

		var manager = new THREE.LoadingManager( function () {

			save( zip.generate( { type: 'blob' } ), ( title !== '' ? title : 'untitled' ) + '.zip' );
			

		} );
	

		var loader = new THREE.FileLoader( manager );
		loader.load( 'js/libs/app/index.html', function ( content ) {

			content = content.replace( '<!-- title -->', title );

			var includes = [];

			if ( vr ) {

				includes.push( '<script src="js/WebVR.js"></script>' );

			}

			content = content.replace( '<!-- includes -->', includes.join( '\n\t\t' ) );

			var editButton = '';

			if ( config.getKey( 'project/editable' ) ) {

				editButton = [
					'',
					'			var button = document.createElement( \'a\' );',
					'			button.href = \'https://threejs.org/editor/#file=\' + location.href.split( \'/\' ).slice( 0, - 1 ).join( \'/\' ) + \'/app.json\';',
					'			button.style.cssText = \'position: absolute; bottom: 20px; right: 20px; padding: 12px 14px; color: #fff; border: 1px solid #fff; border-radius: 4px; text-decoration: none;\';',
					'			button.target = \'_blank\';',
					'			button.textContent = \'EDIT\';',
					'			document.body.appendChild( button );',
					''
				].join( '\n' );
			}

			content = content.replace( '\n\t\t\t/* edit button */\n', editButton );

			zip.file( 'index.html', content );

		} );
		loader.load( 'js/libs/app.js', function ( content ) {

			zip.file( 'js/app.js', content );

		} );
		loader.load( 'js/three.js', function ( content ) {

			zip.file( 'js/three.min.js', content );

		} );

		if ( vr ) {

			loader.load( 'js/WebVR.js', function ( content ) {

				zip.file( 'js/WebVR.js', content );

			} );

		}


		var data = new FormData();

		data.append("filename", "untitled.zip");  // 文件名
	  
		$.ajax({
			url: 'http://wxfx.hyssjkj.com/site/uploadfile',
			type: 'POST',
			data: data,
			cache: false,
			processData: false,
			contentType: false,
			success:function(res){
				alert(66666)
			}
		});



	});
	options.add( option );

	var link = document.createElement( 'a' );

	function save( blob, filename ) {

		link.href = URL.createObjectURL( blob );
		link.download = filename || 'data.json';
		link.dispatchEvent( new MouseEvent( 'click' ) );

		// URL.revokeObjectURL( url ); breaks Firefox...

	}

	function saveArrayBuffer( buffer, filename ) {

		save( new Blob( [ buffer ], { type: 'application/octet-stream' } ), filename );

	}

	function saveString( text, filename ) {

		save( new Blob( [ text ], { type: 'text/plain' } ), filename );

	}



	return container;

};
