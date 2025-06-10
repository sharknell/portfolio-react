"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"

function InteractiveSphere() {
  const meshRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const { mouse } = useThree()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3

      meshRef.current.position.x = mouse.x * 0.5
      meshRef.current.position.y = mouse.y * 0.5
    }
  })

  return (
    <Sphere
      ref={meshRef}
      args={[1, 100, 200]}
      scale={hovered ? 1.2 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color={hovered ? "#3b82f6" : "#8b5cf6"}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        transparent
        opacity={0.8}
      />
    </Sphere>
  )
}

function InteractiveSphereCanvas() {
  return (
    <div className="w-full h-96 relative">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <InteractiveSphere />
      </Canvas>
    </div>
  )
}

export default InteractiveSphereCanvas
