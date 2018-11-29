import * as React from 'react'
import GeolocationWrapper from './geolocationWrapper'
import GoogleMapView from './googleMapView'
import ProcessView from './processView'
import ErrorView from './errorView'

// ______________________________________________________
//
// @ View

export default () => (
  <GeolocationWrapper
    renderProcessView={() => <ProcessView />}
    renderSuccessView={coords => (
      <GoogleMapView coords={coords} />
    )}
    renderErrorView={() => <ErrorView />}
  />
)
