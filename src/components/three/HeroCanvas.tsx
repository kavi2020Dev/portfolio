'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth || window.innerWidth
    const H = mount.clientHeight || window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100)
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── Particle field ──
    const COUNT = 1400
    const pos = new Float32Array(COUNT * 3)
    const col = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 28
      pos[i * 3 + 1] = (Math.random() - 0.5) * 28
      pos[i * 3 + 2] = (Math.random() - 0.5) * 28
      const t = Math.random()
      col[i * 3]     = 0.1 + t * 0.3
      col[i * 3 + 1] = 0.55 + t * 0.45
      col[i * 3 + 2] = 0.05 + t * 0.1
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    pGeo.setAttribute('color', new THREE.BufferAttribute(col, 3))
    const pMat = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    // ── Central wireframe icosahedron ──
    const icoGeo = new THREE.IcosahedronGeometry(1.6, 1)
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x4ade80,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    })
    const ico = new THREE.Mesh(icoGeo, icoMat)
    scene.add(ico)

    // ── Inner glowing sphere ──
    const sGeo = new THREE.SphereGeometry(0.9, 12, 12)
    const sMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    })
    const sphere = new THREE.Mesh(sGeo, sMat)
    scene.add(sphere)

    // ── Orbiting torus 1 ──
    const t1Geo = new THREE.TorusGeometry(2.8, 0.007, 8, 110)
    const t1Mat = new THREE.MeshBasicMaterial({
      color: 0x84cc16,
      transparent: true,
      opacity: 0.35,
    })
    const torus1 = new THREE.Mesh(t1Geo, t1Mat)
    torus1.rotation.x = Math.PI / 3
    scene.add(torus1)

    // ── Orbiting torus 2 ──
    const t2Geo = new THREE.TorusGeometry(3.8, 0.005, 8, 130)
    const t2Mat = new THREE.MeshBasicMaterial({
      color: 0x4ade80,
      transparent: true,
      opacity: 0.18,
    })
    const torus2 = new THREE.Mesh(t2Geo, t2Mat)
    torus2.rotation.x = Math.PI / 6
    torus2.rotation.y = Math.PI / 4
    scene.add(torus2)

    // ── Mouse parallax ──
    const onMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    // ── Resize ──
    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // ── Animation loop ──
    let raf: number
    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = Date.now() * 0.001

      particles.rotation.x = t * 0.016
      particles.rotation.y = t * 0.022

      ico.rotation.x = t * 0.11
      ico.rotation.y = t * 0.15

      sphere.rotation.x = -t * 0.08
      sphere.rotation.y = t * 0.12

      torus1.rotation.z = t * 0.08
      torus2.rotation.z = -t * 0.06

      camera.position.x += (mouseRef.current.x * 0.6 - camera.position.x) * 0.04
      camera.position.y += (-mouseRef.current.y * 0.6 - camera.position.y) * 0.04
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      renderer.dispose()
      ;[pGeo, icoGeo, sGeo, t1Geo, t2Geo].forEach(g => g.dispose())
      ;[pMat, icoMat, sMat, t1Mat, t2Mat].forEach(m => m.dispose())
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 z-0" />
}
