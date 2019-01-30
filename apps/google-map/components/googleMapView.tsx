import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  coords: Coordinates
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const [addressLabel, setAddressLabel] = useState(
    '...取得しています'
  )
  const ref = useRef({} as HTMLDivElement)
  useEffect(
    () => {
      if (ref.current === null) return
      const { latitude, longitude } = props.coords
      const center = { lat: latitude, lng: longitude }
      const mapOptions: google.maps.MapOptions = {
        center,
        zoom: 16
      }
      const map = new google.maps.Map(
        ref.current,
        mapOptions
      )
      const markerOptions: google.maps.MarkerOptions = {
        position: center,
        map
      }
      new google.maps.Marker(markerOptions)
      const geocoder = new google.maps.Geocoder()
      geocoder.geocode({ location: center }, function(
        results,
        status
      ) {
        if (status == google.maps.GeocoderStatus.OK) {
          setAddressLabel(results[1].formatted_address)
        } else {
          setAddressLabel('取得に失敗しました')
        }
      })
    },
    [props.coords]
  )
  return (
    <div className={props.className}>
      <div className="map" ref={ref} />
      <p className="addressLabel">
        現在住所：
        {addressLabel}
      </p>
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  > .map {
    width: 100%;
    max-width: 640px;
    padding-top: 300px;
  }
  > .addressLabel {
    margin-top: 16px;
    text-align: center;
    color: #fff;
  }
`
