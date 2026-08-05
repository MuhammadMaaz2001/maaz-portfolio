"use client"

import { useEffect, useRef } from "react"

const GLITCH_COLORS = ["#1C1C20", "#C9A961", "#EAD9A8", "#8A7439"]
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
const LETTERS = Array.from(CHARACTERS)
const GLITCH_SPEED = 70
const FONT_SIZE = 15
const CHAR_WIDTH = 9
const CHAR_HEIGHT = 18

type Letter = { char: string; color: string; targetColor: string; colorProgress: number }

function getRandomChar() {
  return LETTERS[Math.floor(Math.random() * LETTERS.length)]
}
function getRandomColor() {
  return GLITCH_COLORS[Math.floor(Math.random() * GLITCH_COLORS.length)]
}
function hexToRgb(hex: string) {
  const shorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthand, (_m, r, g, b) => r + r + g + g + b + b)
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : null
}
function interpolateColor(start: { r: number; g: number; b: number }, end: { r: number; g: number; b: number }, factor: number) {
  const r = {
    r: Math.round(start.r + (end.r - start.r) * factor),
    g: Math.round(start.g + (end.g - start.g) * factor),
    b: Math.round(start.b + (end.b - start.b) * factor),
  }
  return `rgb(${r.r}, ${r.g}, ${r.b})`
}

export default function GlitchCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let letters: Letter[] = []
    let grid = { columns: 0, rows: 0 }
    let lastGlitchTime = Date.now()
    let rafId: number | null = null

    const calculateGrid = (w: number, h: number) => ({
      columns: Math.ceil(w / CHAR_WIDTH),
      rows: Math.ceil(h / CHAR_HEIGHT),
    })

    const initializeLetters = (columns: number, rows: number) => {
      grid = { columns, rows }
      const total = columns * rows
      letters = Array.from({ length: total }, () => ({
        char: getRandomChar(),
        color: getRandomColor(),
        targetColor: getRandomColor(),
        colorProgress: 1,
      }))
    }

    const drawLetters = () => {
      if (!ctx || letters.length === 0) return
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)
      ctx.font = `${FONT_SIZE}px monospace`
      ctx.textBaseline = "top"
      letters.forEach((letter, i) => {
        const x = (i % grid.columns) * CHAR_WIDTH
        const y = Math.floor(i / grid.columns) * CHAR_HEIGHT
        ctx.fillStyle = letter.color
        ctx.fillText(letter.char, x, y)
      })
    }

    const updateLetters = () => {
      if (letters.length === 0) return
      const updateCount = Math.max(1, Math.floor(letters.length * 0.04))
      for (let i = 0; i < updateCount; i++) {
        const idx = Math.floor(Math.random() * letters.length)
        if (!letters[idx]) continue
        letters[idx].char = getRandomChar()
        letters[idx].targetColor = getRandomColor()
        letters[idx].colorProgress = 0
      }
    }

    const handleSmoothTransitions = () => {
      let needsRedraw = false
      letters.forEach((letter) => {
        if (letter.colorProgress < 1) {
          letter.colorProgress += 0.05
          if (letter.colorProgress > 1) letter.colorProgress = 1
          const s = hexToRgb(letter.color)
          const e = hexToRgb(letter.targetColor)
          if (s && e) {
            letter.color = interpolateColor(s, e, letter.colorProgress)
            needsRedraw = true
          }
        }
      })
      if (needsRedraw) drawLetters()
    }

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = window.devicePixelRatio || 1
      const rect = parent.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const { columns, rows } = calculateGrid(rect.width, rect.height)
      initializeLetters(columns, rows)
      drawLetters()
    }

    const animate = () => {
      const now = Date.now()
      if (now - lastGlitchTime >= GLITCH_SPEED) {
        updateLetters()
        drawLetters()
        lastGlitchTime = now
      }
      handleSmoothTransitions()
      rafId = requestAnimationFrame(animate)
    }

    const startIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            resizeCanvas()
            if (!reduceMotion) animate()
            startIo.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )
    startIo.observe(canvas)

    let resizeTimeout: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (rafId) cancelAnimationFrame(rafId)
        resizeCanvas()
        if (!reduceMotion) animate()
      }, 100)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      startIo.disconnect()
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return <canvas ref={canvasRef} />
}
