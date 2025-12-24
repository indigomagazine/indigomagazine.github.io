import { useState, useEffect, useRef } from "react"
import styles from "./lifeinparadise.module.css"

import page1 from "../../../../../assets/serial photos/group9/page 1.png"
import page2 from "../../../../../assets/serial photos/group9/page 2.png"
import page3 from "../../../../../assets/serial photos/group9/page 3_.png"
import page4 from "../../../../../assets/serial photos/group9/page 4.png"
import page5 from "../../../../../assets/serial photos/group9/page 5.png"
import page6 from "../../../../../assets/serial photos/group9/page 6.png"
import page7 from "../../../../../assets/serial photos/group9/page 7.png"
import page8 from "../../../../../assets/serial photos/group9/page 8.png"
import backcover from "../../../../../assets/serial photos/group9/back cover.png"

const images = [
  page1,   // cover
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  backcover // standalone back cover
]

export default function LifeInParadise() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipDirection, setFlipDirection] = useState(null)
  const isAnimating = useRef(false)
  const dragStartX = useRef(null)

  const LAST_SPREAD_INDEX = images.length - 2

  const handleNext = () => {
    if (isAnimating.current) return
    if (currentIndex >= LAST_SPREAD_INDEX) return

    isAnimating.current = true
    setFlipDirection("next")

    setTimeout(() => {
      setCurrentIndex(prev => (prev === 0 ? 1 : prev + 2))
      setFlipDirection(null)
      isAnimating.current = false
    }, 650)
  }

  const handlePrev = () => {
    if (isAnimating.current) return
    if (currentIndex <= 0) return

    isAnimating.current = true
    setFlipDirection("prev")

    setTimeout(() => {
      setCurrentIndex(prev => (prev === 1 ? 0 : prev - 2))
      setFlipDirection(null)
      isAnimating.current = false
    }, 650)
  }

  const onPointerDown = (e) => {
    dragStartX.current = e.clientX
  }

  const onPointerUp = (e) => {
    const delta = dragStartX.current - e.clientX
    dragStartX.current = null
    if (delta > 60) handleNext()
    if (delta < -60) handlePrev()
  }

  return (
    <div className={styles.viewer}>
      <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
        <source
          src="https://raw.githubusercontent.com/indigomagazine/website_images/aacaf7cb745a668672aad04efaa99aae2eae98c0/videos/group9vid.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className={styles.imageContainer}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {/* COVER */}
        {currentIndex === 0 && (
          <img src={images[0]} className={styles.singleImage} draggable={false} />
        )}

        {/* BACK COVER */}
        {currentIndex === images.length - 1 && (
          <img src={images[images.length - 1]} className={styles.singleImage} />
        )}

        {/* SPREAD */}
        {currentIndex > 0 && currentIndex < images.length - 1 && (
          <div className={styles.doubleImage}>
            <img
              src={images[currentIndex]}
              className={`${styles.halfImage} ${styles.leftPage}`}
              draggable={false}
            />
            <img
              src={images[currentIndex + 1]}
              className={`${styles.halfImage} ${styles.rightPage}`}
              draggable={false}
            />
          </div>
        )}
      </div>
    </div>
  )
}
