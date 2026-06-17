'use client'
import { useEffect, useState } from 'react'

const SECTION_IDS = ['home', 'about', 'experience', 'projects', 'skills', 'services', 'contact']

export function useScrollSpy() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY
      let current = 'home'

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        // section is "active" once its top edge passes 120px from viewport top
        if (scrollY >= el.offsetTop - 120) {
          current = id
        }
      }

      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return active
}
