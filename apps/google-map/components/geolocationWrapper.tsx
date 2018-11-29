import * as React from 'react'
import { useState, useMemo, useEffect } from 'react'

// ______________________________________________________
//
// @ Types

type Props = {
  renderProcessView: () => React.ReactNode
  renderSuccessView: (
    coords: Coordinates
  ) => React.ReactNode
  renderErrorView: (error: PositionError) => React.ReactNode
  className?: string
}
// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const [coords, setCoords] = useState<Coordinates | null>(
    null
  )
  const [error, setError] = useState<PositionError | null>(
    null
  )
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoords(coords)
      },
      setError
    )
  }, [])
  return (
    <>
      {useMemo(
        () => {
          if (coords === null) return
          return props.renderSuccessView(coords)
        },
        [coords]
      )}
      {useMemo(
        () => {
          if (error === null) return
          return props.renderErrorView(error)
        },
        [error]
      )}
      {useMemo(
        () => {
          if (!(error === null && coords === null)) return
          return props.renderProcessView()
        },
        [coords, error]
      )}
    </>
  )
}
