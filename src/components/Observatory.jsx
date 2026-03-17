import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function AvatarCore(){
  return (
    <mesh rotation={[0.6, 0.8, 0]}>
      <icosahedronGeometry args={[1.4, 0]} />
      <meshStandardMaterial color="#8b5cf6" flatShading />
    </mesh>
  )
}

function ProjectOrbit({ index, total }){
  const ref = React.useRef()
  const radius = 2.1 + index * 0.45

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * (0.15 + index * 0.03)
    const x = Math.cos(t) * radius
    const z = Math.sin(t) * radius
    if (ref.current) {
      ref.current.position.set(x, 0.15 * Math.sin(t * 1.4), z)
      ref.current.rotation.y += 0.01
    }
  })

  const palette = ['#38bdf8', '#22c55e', '#f97316', '#eab308']
  const color = palette[index % palette.length]

  return (
    <group ref={ref}>
      <mesh>
        <torusGeometry args={[0.26, 0.06, 16, 40]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.25} />
      </mesh>
    </group>
  )
}

function SkillHalo(){
  const ref = React.useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.z = t * 0.35
    }
  })

  return (
    <group ref={ref}>
      <mesh>
        <ringGeometry args={[1.9, 2.1, 80]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.5}
          side={2}
        />
      </mesh>
      <mesh rotation-x={Math.PI / 3}>
        <ringGeometry args={[1.9, 2.15, 60]} />
        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.45}
          side={2}
        />
      </mesh>
    </group>
  )
}

function TimelineRail(){
  return (
    <mesh rotation-y={-Math.PI / 7} position={[0.5, -0.2, 0]}>
      <cylinderGeometry args={[0.06, 0.06, 7, 32]} />
      <meshStandardMaterial
        color="#22c55e"
        metalness={0.6}
        roughness={0.3}
      />
    </mesh>
  )
}

function ContactField(){
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -0.9, 0]}>
      <circleGeometry args={[4.2, 54]} />
      <meshStandardMaterial
        color="#020617"
        transparent
        opacity={0.92}
        roughness={0.95}
      />
    </mesh>
  )
}

function BaseEnvironment(){
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 6, 3]} intensity={1.1} />
      <pointLight position={[-4, -4, -2]} intensity={0.9} color="#38bdf8" />
      <pointLight position={[3, -2, 4]} intensity={0.7} color="#a855f7" />

      <mesh rotation-x={-Math.PI / 2} position={[0, -1.3, 0]}>
        <circleGeometry args={[5, 60]} />
        <meshStandardMaterial
          color="#020617"
          metalness={0.3}
          roughness={0.9}
          transparent
          opacity={0.95}
        />
      </mesh>
    </>
  )
}

function SceneByMode({ mode }){
  if (mode === 'skills') {
    return (
      <>
        <BaseEnvironment />
        <SkillHalo />
        <AvatarCore />
      </>
    )
  }

  if (mode === 'projects') {
    return (
      <>
        <BaseEnvironment />
        <AvatarCore />
        {[0, 1, 2].map((_, i) => (
          <ProjectOrbit key={i} index={i} total={3} />
        ))}
      </>
    )
  }

  if (mode === 'timeline') {
    return (
      <>
        <BaseEnvironment />
        <AvatarCore />
        <TimelineRail />
      </>
    )
  }

  if (mode === 'contact') {
    return (
      <>
        <BaseEnvironment />
        <ContactField />
        <AvatarCore />
      </>
    )
  }

  return (
    <>
      <BaseEnvironment />
      <AvatarCore />
      <SkillHalo />
    </>
  )
}

export default function Observatory({ mode }){
  return (
    <div className="observatory-canvas">
      <Canvas camera={{ position: [0, 0.8, 6], fov: 45 }}>
        <SceneByMode mode={mode} />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.35} />
      </Canvas>
    </div>
  )
}

