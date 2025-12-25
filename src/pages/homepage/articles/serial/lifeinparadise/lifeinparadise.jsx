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

import handIdle from "../../../../../assets/cursors/hand.png"
import handGrab from "../../../../../assets/cursors/handpinch.jpg"

const images = [
    cover,  //single
    page1,   
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    backcover // single
    ]

export default function LifeInParadise() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragProgress, setDragProgress] = useState(0)
  const [dragging, setDragging] = useState(false)


  const dragStartX = useRef(null)
  const isDragging = useRef(false)
  const isAnimating = useRef(false)

  const LAST_SPREAD_INDEX = images.length - 3

  const handleNext = () => {
  if (isAnimating.current) return

  // cover → first spread
  if (currentIndex === 0) {
    setCurrentIndex(1)
    return
  }

  // spreads → spreads
  if (currentIndex < LAST_SPREAD_INDEX) {
    setCurrentIndex(prev => prev + 2)
    return
  }

  // final spread → back cover
  if (currentIndex === LAST_SPREAD_INDEX) {
    setCurrentIndex(images.length - 1)
  }
}
    const handlePrev = () => {
  if (isAnimating.current) return

  // back cover → last spread
  if (currentIndex === images.length - 1) {
    setCurrentIndex(LAST_SPREAD_INDEX)
    return
  }

  // spreads → spreads
  if (currentIndex > 1) {
    setCurrentIndex(prev => prev - 2)
    return
  }

  // first spread → cover
  if (currentIndex === 1) {
    setCurrentIndex(0)
  }
}

  const handRef = useRef(null)

useEffect(() => {
  const move = (e) => {
    if (!handRef.current) return
    handRef.current.style.left = `${e.clientX}px`
    handRef.current.style.top = `${e.clientY}px`
  }

  window.addEventListener("pointermove", move)
  return () => window.removeEventListener("pointermove", move)
}, [])

  

  /* ---------- DRAG ---------- */

  const onPointerDown = (e) => {
    if (
    (currentIndex === 0 && e.clientX < window.innerWidth / 2) ||
    (currentIndex === images.length - 1 && e.clientX > window.innerWidth / 2)) {
    return
  }
  isDragging.current = true
  setDragging(true)
  dragStartX.current = e.clientX
}

const onPointerMove = (e) => {
  if (!isDragging.current) return

  const delta = dragStartX.current - e.clientX
  const progress = Math.max(-1, Math.min(1, delta / 280))

  setDragProgress(progress)
}

const onPointerUp = () => {
  if (!isDragging.current) return
  isDragging.current = false
  setDragging(false)

  const progress = dragProgress

  if (progress > 0.35) {
    animateSnap(progress, 1, () => {
      setDragProgress(0)  
      handleNext()
    })
  } 
  else if (progress < -0.35) {
    animateSnap(progress, -1, () => {
      setDragProgress(0)   
      handlePrev()
    })
  } 
  else {
    animateSnap(progress, 0, () => {
      setDragProgress(0)
    })
  }
}


const animateSnap = (from, to, onDone) => {
  const duration = 220
  const start = performance.now()

  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    const value = from + (to - from) * eased

    setDragProgress(value)

    if (t < 1) {
      requestAnimationFrame(tick)
    } else {
      onDone?.()
    }
  }

  requestAnimationFrame(tick)
}


  /* ---------- PRELOAD ---------- */

  useEffect(() => {
    images.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return (
    <div className={styles.viewer}>
      <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
        <source
          src="https://raw.githubusercontent.com/indigomagazine/website_images/aacaf7cb745a668672aad04efaa99aae2eae98c0/videos/group9vid.mp4"
          type="video/mp4"
        />
      </video>
    
    {/*actual mag*/}
      <div
        className={`${styles.imageContainer} ${dragging? styles.dragging : ""} ${styles.hasCursor}`}
        style={{
            "--cursor-idle": `url(${handIdle})`,
            "--cursor-drag": `url(${handGrab})`
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        >

        {/* COVER */}
        {currentIndex === 0 && (
          <img
            src={images[0]}
            className={styles.singleImage}
          />
        )}

        {/* BACK COVER */}
        {currentIndex === images.length - 1 && (
          <img
            src={images[images.length - 1]}
            className={styles.singleImage}
            
          />
        )}

        {/* SPREAD */}
        {currentIndex > 0 && currentIndex < images.length - 1 && (
          <div className={styles.doubleImage}>

            {/* DRAGGING PAGE */}
            {dragProgress !== 0 && (
              <img
                src={images[currentIndex + 1]}
                className={styles.flipSheet}
                style={{
                  transform: `rotateY(${-dragProgress * 120}deg)`
                }}
                draggable={false}
              />
            )}

            <img
              src={images[currentIndex]}
              className={`${styles.halfImage} ${styles.leftPage}`}
            />

            <img
                src={
                    dragging && dragProgress > 0
                    ? images[currentIndex + 2] ?? images[currentIndex + 1]
                    : images[currentIndex + 1]
                }
                className={`${styles.halfImage} ${styles.rightPage}`}
                draggable={false}
                />
          </div>
        )}

      </div>

      <div
        ref={handRef}
        className={styles.fakeHand}
        >
        <img
            src={dragging ? handGrab : handIdle}
            alt=""
            style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
            }}
        />
        </div>

    </div>
  )
}
