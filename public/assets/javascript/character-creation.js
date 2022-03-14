const canvas = document.querySelector('[data-canvas]')

// Create the scene
const scene = new THREE.Scene()

// Create the camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
scene.add(camera)

// Create the renderer
const renderer = new THREE.WebGLRenderer({ canvas })

// Render the scene
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)

camera.position.z = 5

const geometry = new THREE.BoxGeometry(1, 1, 1
	
	// Create a new material with a white color
const material = new THREE.MeshLambertMaterial({ color: 0xffffff })