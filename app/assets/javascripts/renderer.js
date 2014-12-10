var renderer, scene, camera, controls, clock;

function three_init() {
  var container = document.getElementById('webgl-container');
  renderer = new THREE.WebGLRenderer({antialias: true });
  scene = new THREE.Scene();
  clock = new THREE.Clock();
  camera = new THREE.PerspectiveCamera( 75, container.offsetWidth/container.offsetHeight, 0.1, 10000 );

  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setClearColor(0x36353B, 1 );
  container.appendChild(renderer.domElement);

  var geometry = new THREE.PlaneBufferGeometry(7000, 7000, 64, 64);
  geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );

  var vertices = geometry.attributes.position.array;

  for ( var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {
   vertices[ j + 1 ] = Math.random() * 100;
  }

  var mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshLambertMaterial({
      wireframe: true,
      color: 'grey',
      side: THREE.DoubleSide
    })
  );

  mesh.position.set(0, 0, 0);
  scene.add(mesh);

  var light = new THREE.PointLight( 0xFFFFFF, 10, 0) ;
  light.position.set(0, 200, 0);
  scene.add(light);

  camera.position.set( -15, 10, 15 );
  camera.lookAt(scene.position);
  camera.position.set(0, 100, 0);

//  var text = new THREE.TextGeometry(

//  );
}

function render() {
  if(camera.position.x < 800.0) {
    camera.position.y += 0.1;
    camera.position.x += 0.1;
    camera.position.z += 0.1;
  } else{
    camera.position.set(0, 100, 0);
  }
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

$(document).on('ready page:load', function() {
  three_init();
  render();
});
