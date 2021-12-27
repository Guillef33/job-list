import React from 'react'
import { Canvas } from '@react-three/fiber';
import Box from '../components/Box'

const Three = () => {

    return (
      <>
        <h2>Hola Three</h2>
        <Canvas>
          <Box />
        </Canvas>
      </>
    );

}

export default Three;