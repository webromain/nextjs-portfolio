'use client'
import { useEffect } from 'react'

export default function CvPage() {
  useEffect(() => {
    window.location.replace('/romain-poisson-cv.pdf')
  }, [])
  return null
}
