// ______________________________________________________
//
// @ Types

interface Porps {
  canvas: HTMLCanvasElement
  fileName?: string
  saveType?: 'png' | 'jpeg'
}

// ______________________________________________________
//
// @ Utils

function saveCanvas({
  canvas,
  fileName = 'sample.png',
  saveType = 'png'
}: Porps) {
  const imageType =
    saveType === 'png' ? 'image/png' : 'image/jpeg'
  const base64 = canvas.toDataURL(imageType)
  const blob = Base64toBlob(base64)
  saveBlob(blob, fileName)
}

function Base64toBlob(base64: string) {
  const tmp = base64.split(',')
  const data = atob(tmp[1])
  const mime = tmp[0].split(':')[1].split(';')[0]
  const buf = new Uint8Array(data.length)
  for (let i = 0; i < data.length; i++) {
    buf[i] = data.charCodeAt(i)
  }
  const blob = new Blob([buf], { type: mime })
  return blob
}

function saveBlob(blob: any, fileName: string) {
  const url = window.URL
  const dataUrl = url.createObjectURL(blob)
  const event = document.createEvent('MouseEvents')
  event.initMouseEvent(
    'click',
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  )
  const a = document.createElementNS(
    'http://www.w3.org/1999/xhtml',
    'a'
  ) as any
  a.href = dataUrl
  a.download = fileName
  a.dispatchEvent(event)
}

// ______________________________________________________
//
// @ exports

export { saveCanvas }
