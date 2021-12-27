import { render } from "@react-three/fiber";
import React from "react";
import { useRef, useEffect } from "react";
import * as THREE from 'three';
import { Vector3 } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Model3D = () => {
    const mountRef = useRef(null);
    
    useEffect(() => {

        const currentRef = mountRef.current;
        const {clientWidth: width, cllientHeight: height} = currentRef;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(25, width / height, 0.01, 1000);
        scene.add(camera);
        camera.position.z = 6;
        camera.position.x = 6;

        const renderer = new THREE.WebGL1Renderer();
        renderer.setSize(width, height)
        currentRef.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1,1,1)
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
        camera.lookAt(cube.position)

        renderer.render(scene, camera)

        return () => {
            currentRef.removeChild(renderer.domElement)
        }

    }, [])

  return (
    <div ref={mountRef} style={{width: '100%', height:'100vh'}}>    
    </div>

  );
}

export default Model3D;
