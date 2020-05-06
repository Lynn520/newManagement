import 'babel-polyfill'
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import { version, build, target } from '../package.json'

// import rem from './utils/rem'
// rem();
// if (module.hot) {
//   module.hot.accept(() => {
//     ReactDOM.render(
//         <HotLoaderContainer>
//           <LocaleProvider locale={zhCN}>
//             <Root />
//           </LocaleProvider>
//         </HotLoaderContainer>,
//         document.getElementById('root')
//     )
//   })
// }

console.log(`环境: ${target} 版本号: ${version} build ${build}`)

if (process.env.NODE_ENV === 'production') {
    if (!window.console) window.console = {}
    const methods = ['log', 'debug', 'warn', 'info']
    for (let i = 0; i < methods.length; i++) {
        console[methods[i]] = function() {}
    }
}

ReactDOM.render(
    <div className="body-container">
        <Root />
    </div>,
    document.getElementById('root')
)
