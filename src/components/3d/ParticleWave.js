"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function ParticleWave() {
  const ref = useRef(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(6000)

    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 20

      positions.set([x, y, z], i * 3)
    }

    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]

        positions[i + 2] = Math.sin(state.clock.elapsedTime + x * 0.01 + y * 0.01) * 2
      }

      ref.current.geometry.attributes.position.needsUpdate = true
      ref.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function ParticleWaveCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ParticleWave />
      </Canvas>
    </div>
  )
}

export default ParticleWaveCanvas
