import App from 'containers/App'

function loadRoute(callback) {
  return module => callback(null, module.default)
}

function errorLog(err) {
  console.log(err)
}

export default {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, callback) {
        System.import('containers/Section/Home').then(loadRoute(callback)).catch(errorLog)
      }
    },
    {
      path: '/test',
      getComponent(location, callback) {
        System.import('containers/Section/Posts/test.js').then(loadRoute(callback)).catch(errorLog)
      }
    },
    {
      path: '*',
      getComponent(location, callback) {
        System.import('containers/Section/404').then(loadRoute(callback)).catch(errorLog)
      }
    }
  ]
}
