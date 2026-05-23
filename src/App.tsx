import { useEffect } from "react"
import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { GuestBook } from "./component/guestbook"
import { LazyDiv } from "./component/lazyDiv"
import { ShareButton } from "./component/shareButton"
import { STATIC_ONLY } from "./env"

function App() {
  useEffect(() => {
    const isFormField = (target: HTMLElement) =>
      target.tagName === "INPUT" || target.tagName === "TEXTAREA"

    const blockContext = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isFormField(target)) return
      e.preventDefault()
    }
    const blockDrag = (e: DragEvent) => {
      e.preventDefault()
    }
    const blockShortcut = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (isFormField(target)) return
      if (e.ctrlKey || e.metaKey) {
        const k = e.key.toLowerCase()
        if (k === "s" || k === "u") {
          e.preventDefault()
        }
      }
    }

    document.addEventListener("contextmenu", blockContext)
    document.addEventListener("dragstart", blockDrag)
    document.addEventListener("keydown", blockShortcut)
    return () => {
      document.removeEventListener("contextmenu", blockContext)
      document.removeEventListener("dragstart", blockDrag)
      document.removeEventListener("keydown", blockShortcut)
    }
  }, [])

  return (
    <div className="background">
      <div className="card-view">
        <LazyDiv className="card-group">
          {/* 표지 */}
          <Cover />

          {/* 모시는 글 */}
          <Invitation />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 결혼식 날짜 (달력) */}
          <Calendar />

          {/* 겔러리 */}
          <Gallery />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 오시는길 */}
          <Location />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 마음 전하기 */}
          <Information />
          {/* 방명록 */}
          {!STATIC_ONLY && <GuestBook />}
        </LazyDiv>

        <ShareButton />
      </div>
    </div>
  )
}

export default App
