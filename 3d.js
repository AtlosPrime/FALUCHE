      // Récupérer la référence du conteneur du canvas
      var canvasContainer = document.getElementById("canvas-container");

      // Créer une scène
      var scene = new THREE.Scene();

      // Créer une caméra
      var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Créer un rendu
      var renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
	  renderer.setClearColor(000022);

      // Ajouter le rendu au conteneur du canvas
      canvasContainer.appendChild(renderer.domElement);

      // Créer un cube
      var geometry = new THREE.BoxGeometry();
      var material = new THREE.MeshBasicMaterial({ color: 0x00df00 });
      var cube = new THREE.Mesh(geometry, material);

      // Ajouter le cube à la scène
      scene.add(cube);

      // Créer une instance de OrbitControls pour manipuler la caméra avec la souris
      var controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.update();

      // Fonction pour mettre à jour le rendu
      function animate() {
        requestAnimationFrame(animate);

        // Faire tourner le cube sur l'axe Y
        cube.rotation.y += 0.001;

        // Rendre la scène
        renderer.render(scene, camera);
      }

      // Appeler la fonction animate pour mettre à jour le rendu
      animate();
	  
// Fonction pour redimensionner le canvas en fonction de la taille de la fenêtre
	function onWindowResize() {
	  camera.aspect = window.innerWidth / window.innerHeight;
	  camera.updateProjectionMatrix();
	  renderer.setSize(window.innerWidth, window.innerHeight);
	}

// Ajouter un écouteur d'événements pour redimensionner le canvas lorsque la fenêtre est redimensionnée
window.addEventListener("resize", onWindowResize);