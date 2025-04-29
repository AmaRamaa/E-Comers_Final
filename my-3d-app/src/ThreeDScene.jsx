import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model() {
    const gltf = useLoader(GLTFLoader, '/iphone_14_pro.glb', (loader) => {
        loader.manager.onError = (url) => {
            console.error(`Error loading model: ${url}`);
        };
    });

    // const gltf = useLoader(GLTFLoader, 'https://modelviewer.dev/shared-assets/models/Astronaut.glb');
    // console.log('This is the 3D model', gltf);
    // React.useEffect(() => {
    //     gltf.scene.traverse((child) => {
    //         if (child.isMesh) {
    //             child.material.transparent = false; // Ensure material is not transparent
    //             child.material.opacity = 1; // Set full opacity
    //         }
    //     });
    // }, [gltf]);
    
    return <primitive object={gltf.scene} scale={5} />;
}

function Model2() {
    const gltf = useLoader(GLTFLoader, 'https://modelviewer.dev/shared-assets/models/Astronaut.glb');
    console.log('This is the 3D model', gltf);
    return <primitive object={gltf.scene} scale={0.5} />;
}

const ThreeDScene = () => {
    return (
        <div style={{ height: '100vh', background: 'white' , width: '100vw'}}>
            <h1>testing</h1>
            <div style={{ height: '100%' , width: '100%'}}>
                <Canvas camera={{ position: [0, 0, 2] }}>
                    <Suspense fallback={<Html><span>Loading 3D Model...</span></Html>}>
                        <Model />
                        {/* <Model2 />
                        <mesh>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color="red" />
                        </mesh> */}
                    </Suspense>
                    <OrbitControls />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                </Canvas>
            </div>
        </div>
    );
};

export default ThreeDScene;