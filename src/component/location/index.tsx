import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용 시
            <br />
            8호선 <b>남위례역 3, 4번출구</b> 도보 7분
            <br />
            셔틀버스: <b>남위례역 5번출구</b> 승차 (15분 간격)
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            <b>밀리토피아시티 / 힐스테이트위례</b> 하차
            <br />
            50번, 231번, 315번, 343번, 345번, 3420번
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용 시
            <br />
            <b>밀리토피아호텔 바이마린 웨딩센터</b> 검색
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">주차 안내</div>
          <div />
          <div className="content">
            건물 내 <b>지하 주차장</b> 무료 이용 가능
            <br />
            (4시간 무료)
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
