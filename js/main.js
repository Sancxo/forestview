let scene, renderer, camera, controls;
let geometry, cube, loader, textureCube, material;

init = () => {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000000);
    camera.position.set(100, 0, 0);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    geometry = new THREE.BoxGeometry(5000000, 5000000, 5000000);
    loader = new THREE.CubeTextureLoader();
    loader.setPath('textures/forest-skyboxes/Brudslojan/')
    textureCube = loader.load([ 'negx.jpg', 'posx.jpg', 'negy.jpg', 'posy.jpg', 'posz.jpg', 'negz.jpg']);
    material = new THREE.MeshBasicMaterial({envMap: textureCube, side: THREE.BackSide});
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    window.addEventListener('resize', onWindowResize);
    animate();
};

onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix;

    renderer.setSize(window.innerWidth, window.innerHeight);
};

animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

init();
document.addEventListener('mousedown', function () {
        document.body.style.cursor = 'grabbing';
})
document.addEventListener('mouseup', function() {
    document.body.style.cursor = 'grab';
})
