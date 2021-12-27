import React from 'react'
import { useRef, useEffect } from 'react';
import { BoxBufferGeometry, meshLambertMaterial } from "three";


export default function Box () {
    return (
      <>
        <h2>Hola Three Fuera </h2>
        <mesh>
          <h2>Hola Three</h2>
          <BoxBufferGeometry attach="geometry" />
          <meshLambertMaterial attach="material" color="blue" />
        </mesh>
      </>
    );
}