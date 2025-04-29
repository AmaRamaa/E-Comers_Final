import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import {
    ViewerApp,
    addBasePlugins,
    TweakpaneUiPlugin,
    AssetManagerBasicPopupPlugin,
    FileTransferPlugin,
    CanvasSnipperPlugin,
} from 'webgi';

const IphoneModel = () => {
    try {
        const { scene } = useGLTF('/assets/3D/GLB/iphone_14_pro.glb');
        return <primitive object={scene} scale={0.5} />;
    } catch (error) {
        console.error('Failed to load iPhone model:', error);
        return null;
    }
};

const WebGIViewer = () => {
    useEffect(() => {
        const setupViewer = async () => {
            try {
                const viewer = new ViewerApp({
                    canvas: document.getElementById('webgi-canvas'),
                });

                await addBasePlugins(viewer);
                await viewer.addPlugin(AssetManagerBasicPopupPlugin);
                await viewer.addPlugin(FileTransferPlugin);
                await viewer.addPlugin(CanvasSnipperPlugin);

                await viewer.load('./assets/classic-watch.glb');

                const uiPlugin = await viewer.addPlugin(TweakpaneUiPlugin);
                uiPlugin.setupPlugins();
            } catch (error) {
                console.error('Failed to initialize WebGI Viewer:', error);
            }
        };

        setupViewer();
    }, []);

    return <canvas id="webgi-canvas" style={{ width: '100%', height: '100%' }} />;
};

const ThreeDScene = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ flex: 1 }}>
                <Canvas style={{ height: '100%', background: 'white' }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} />
                    <IphoneModel />
                    <OrbitControls />
                </Canvas>
            </div>
            <div style={{ flex: 1 }}>
                <WebGIViewer />
            </div>
        </div>
    );
};

export default ThreeDScene;
