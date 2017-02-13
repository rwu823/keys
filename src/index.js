import { keyMap, keycodeMap } from './key-map'
console.log(JSON.stringify(keyMap))

module.exports = (key, func) => {
  const hasShiftKey = key.includes('shift')
  const hasCtrlKey = key.includes('ctrl')
  const hasCmdKey = key.includes('cmd') || key.includes('meta')
  const hasAltKey = key.includes('alt')
  const hasModKey = hasShiftKey || hasCtrlKey || hasAltKey || hasCmdKey

  const isNumrOrNumString = /\d/.test(key)
  let code

  if (isNumrOrNumString) {
    code = +key
  } else {
    if (hasModKey) {
      key = key.replace(/(ctrl|shift|cmd|alt)[+]/g, '')
    }
    code = +keyMap[key]
  }

  if (!code) {
    throw new Error(`invalid key: ${key}.`)
  }

  return function (ev) {
    const { which } = ev

    if (code !== which ||
      (hasShiftKey && !ev.shiftKey) ||
      (hasCtrlKey && !ev.ctrlKey) ||
      (hasAltKey && !ev.altKey) ||
      (hasCmdKey && !ev.metaKey)
     ) {
      return
    }

    func.bind(this)(ev, {

    })
  }
}
