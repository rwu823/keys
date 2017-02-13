import keys from '../src'

document.body.addEventListener('keyup', keys('shift+alt+enter', (ev)=> {
  debugger
}), false)

if (module.hot) {
  module.hot.accept()
}
