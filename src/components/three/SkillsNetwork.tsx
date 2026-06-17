'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function SkillsNetwork() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth || 800
    const H = mount.clientHeight || 220

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 100)
    camera.position.z = 9

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const nodeCount = 38
    const positions: THREE.Vector3[] = []
    const group = new THREE.Group()

    // Build nodes
    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5
      )
      positions.push(pos)

      const size = 0.035 + Math.random() * 0.07
      const isAccent = Math.random() > 0.6
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(size, 8, 8),
        new THREE.MeshBasicMaterial({
          color: isAccent ? 0x84cc16 : 0x4ade80,
          transparent: true,
          opacity: 0.65 + Math.random() * 0.35,
        })
      )
      dot.position.copy(pos)
      group.add(dot)
    }

    // Build edges between nearby nodes
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x4ade80, transparent: true, opacity: 0.1 })
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = positions[i].distanceTo(positions[j])
        if (dist < 4) {
          const geo = new THREE.BufferGeometry().setFromPoints([positions[i], positions[j]])
          group.add(new THREE.Line(geo, edgeMat))
        }
      }
    }

    scene.add(group)

    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    let raf: number
    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = Date.now() * 0.001
      group.rotation.x = Math.sin(t * 0.15) * 0.25
      group.rotation.y = t * 0.09
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}
