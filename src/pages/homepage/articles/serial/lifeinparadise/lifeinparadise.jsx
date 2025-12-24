import { useState, useEffect, useRef } from "react"
import styles from "./lifeinparadise.module.css"

import cover from "../../../../../assets/serial photos/group9/cover.png"
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
  cover,
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  backcover,
]

export default function LifeInParadise() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)

    const [flipDirection, setFlipDirection] = useState(null)
    const touchStartX = useRef(0)

    const isAnimating = useRef(false)

    const handleNext = () => {
    if (isAnimating.current || currentIndex >= images.length - 1) return

    isAnimating.current = true
        setFlipDirection("next")

        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? 1 : prev + 2))
            setFlipDirection(null)
            isAnimating.current = false
        }, 650)
    }

    const handlePrev = () => {
    if (isAnimating.current || currentIndex <= 0) return

        isAnimating.current = true
        setFlipDirection("prev")

        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 1 ? 0 : prev - 2))
            setFlipDirection(null)
            isAnimating.current = false
        }, 650)
    }

 

    const handlePageClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    clickX < rect.width / 2 ? handlePrev() : handleNext()
    }

    useEffect(() => {
    const onKey = (e) => {
        if (e.key === "ArrowRight") handleNext()
        if (e.key === "ArrowLeft") handlePrev()
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    }, [])

    useEffect(() => {
    images.forEach((src) => {
        const img = new Image()
        img.src = src
    })
    }, [])


    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const onTouchEnd = (e) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (delta > 50) handleNext()
    if (delta < -50) handlePrev()
    }

  return (
    <div className={styles.viewer}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundVideo}
      >
        <source
          src="https://raw.githubusercontent.com/indigomagazine/website_images/aacaf7cb745a668672aad04efaa99aae2eae98c0/videos/group9vid.mp4"
          type="video/mp4"
        />
      </video>

      {/* Magazine */}
      <div
        className={styles.imageContainer}
        ref={containerRef}
        onClick={handlePageClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Cover */}
        {currentIndex === 0 && (
          <img src={images[0]} alt="Cover" className={styles.singleImage} />
        )}

        {/* Back cover */}
        {currentIndex === images.length - 1 && (
          <img
            src={images[images.length - 1]}
            alt="Back Cover"
            className={styles.singleImage}
          />
        )}

        {/* Two-page spread */}
        {currentIndex > 0 && currentIndex < images.length - 1 && (
          <div 
            className={styles.doubleImage}
            style={{ "--stack": Math.min(currentIndex, 10) }}
            >
            <img
              src={images[currentIndex]}
              draggable={false}
              alt={`Page ${currentIndex}`}
              className={`${styles.halfImage} ${styles.leftPage} ${
                flipDirection === "prev" ? `${styles.flipLeft} ${styles.flipping}` : ""
                }`}

            />
            <img
              src={images[currentIndex + 1]}
              draggable={false}
              alt={`Page ${currentIndex + 1}`}
              className={`${styles.halfImage} ${styles.rightPage} ${
                flipDirection === "next" ? `${styles.flipRight} ${styles.flipping}` : ""
                }`}

            />
          </div>
        )}
      </div>
    </div>
  )
}
