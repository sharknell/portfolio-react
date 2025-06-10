"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function StarField() {
  const ref = useRef(null)

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(5000 * 3)
    const colors = new Float32Array(5000 * 3)

    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100

      const color = new THREE.Color()
      color.setHSL(Math.random() * 0.2 + 0.5, 0.55, Math.random() * 0.25 + 0.55)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return [positions, colors]
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05
      ref.current.rotation.y = state.clock.elapsedTime * 0.075
    }
  })

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={2}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  )
}

export default ThreeBackground
