"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"

function FloatingCode() {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[2, 1, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.7} />
      </mesh>
    </Float>
  )
}

function FloatingReact() {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1}>
      <mesh ref={meshRef} position={[-2, -1, 0]}>
        <torusGeometry args={[0.3, 0.1, 16, 100]} />
        <meshStandardMaterial color="#61dafb" transparent opacity={0.8} />
      </mesh>
    </Float>
  )
}

function FloatingJS() {
  return (
    <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh position={[0, -2, -1]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#f7df1e" transparent opacity={0.7} />
      </mesh>
    </Float>
  )
}

function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingCode />
        <FloatingReact />
        <FloatingJS />
      </Canvas>
    </div>
  )
}

export default FloatingElements
