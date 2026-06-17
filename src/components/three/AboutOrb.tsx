'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function AboutOrb() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth || 400
    const H = mount.clientHeight || 400

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100)
    camera.position.z = 5.5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Central icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(1.3, 1)
    const icoMat = new THREE.MeshBasicMaterial({ color: 0x4ade80, wireframe: true, transparent: true, opacity: 0.38 })
    const ico = new THREE.Mesh(icoGeo, icoMat)
    scene.add(ico)

    // Inner glowing sphere
    const sGeo = new THREE.SphereGeometry(0.85, 12, 12)
    const sMat = new THREE.MeshBasicMaterial({ color: 0x86efac, wireframe: true, transparent: true, opacity: 0.16 })
    const sphere = new THREE.Mesh(sGeo, sMat)
    scene.add(sphere)

    // Orbiting ring 1
    const r1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.1, 0.009, 8, 90),
      new THREE.MeshBasicMaterial({ color: 0x84cc16, transparent: true, opacity: 0.55 })
    )
    r1.rotation.x = Math.PI / 3
    scene.add(r1)

    // Orbiting ring 2
    const r2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.75, 0.007, 8, 110),
      new THREE.MeshBasicMaterial({ color: 0x4ade80, transparent: true, opacity: 0.32 })
    )
    r2.rotation.x = Math.PI / 6
    r2.rotation.y = Math.PI / 3
    scene.add(r2)

    // Orbiting ring 3 (cyan accent)
    const r3 = new THREE.Mesh(
      new THREE.TorusGeometry(3.3, 0.005, 8, 120),
      new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.18 })
    )
    r3.rotation.y = Math.PI / 2.5
    scene.add(r3)

    // Floating orbit dots
    const dotGroup = new THREE.Group()
    for (let i = 0; i < 24; i++) {
      const size = 0.025 + Math.random() * 0.05
      const dotMesh = new THREE.Mesh(
        new THREE.SphereGeometry(size, 6, 6),
        new THREE.MeshBasicMaterial({
          color: Math.random() > 0.5 ? 0x84cc16 : 0x4ade80,
          transparent: true,
          opacity: 0.6 + Math.random() * 0.4,
        })
      )
      const phi = Math.acos(Math.random() * 2 - 1)
      const theta = Math.random() * Math.PI * 2
      const r = 1.8 + Math.random() * 1.4
      dotMesh.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      )
      dotGroup.add(dotMesh)
    }
    scene.add(dotGroup)

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

      ico.rotation.x = t * 0.13
      ico.rotation.y = t * 0.19

      sphere.rotation.x = -t * 0.09
      sphere.rotation.y = t * 0.11

      r1.rotation.z = t * 0.13
      r2.rotation.z = -t * 0.1
      r3.rotation.z = t * 0.08

      dotGroup.rotation.x = t * 0.07
      dotGroup.rotation.y = t * 0.1

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
