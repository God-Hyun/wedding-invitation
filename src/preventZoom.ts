// 휴대폰(특히 iOS Safari)에서 페이지 확대(핀치 줌 / 더블탭 줌)를 차단한다.
// iOS Safari는 viewport 메타의 user-scalable=0 을 무시하므로 JS 로 제스처를 막아야 한다.
export const preventZoom = () => {
  // iOS 핀치 줌 제스처 차단
  const preventGesture = (e: Event) => e.preventDefault()
  document.addEventListener("gesturestart", preventGesture, { passive: false })
  document.addEventListener("gesturechange", preventGesture, { passive: false })
  document.addEventListener("gestureend", preventGesture, { passive: false })

  // 두 손가락 이상 멀티터치 이동(핀치) 차단 - Android/기타 브라우저 대응
  document.addEventListener(
    "touchmove",
    (e: TouchEvent) => {
      if (e.touches.length > 1) e.preventDefault()
    },
    { passive: false },
  )

  // 더블탭 줌 차단 (300ms 이내 연속 탭)
  let lastTouchEnd = 0
  document.addEventListener(
    "touchend",
    (e: TouchEvent) => {
      const now = Date.now()
      if (now - lastTouchEnd <= 300) e.preventDefault()
      lastTouchEnd = now
    },
    { passive: false },
  )
}
