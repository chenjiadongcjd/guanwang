/**
 * @author mrdoob / http://mrdoob.com/
 */

var Menubar = function ( editor ) {

	var container = new UI.Panel();
	container.setId( 'menubar' );

	container.add( new Menubar.File( editor ) );
	container.add( new Menubar.Edit( editor ) );
	container.add( new Menubar.Add( editor ) );
	container.add( new Menubar.Play( editor ) );
	container.add( new Menubar.Preset( editor ) );
	container.add( new Menubar.model( editor ) );
	container.add( new Menubar.Help( editor ) );
	container.add( new Menubar.Filter( editor ) );	//滤镜
	container.add( new Menubar.Examples( editor ) ); //案例

	container.add( new Menubar.About( editor ) ); //关于我们（公司官网）
	

	

	return container;

};
