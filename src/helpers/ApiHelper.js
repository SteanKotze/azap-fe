import AjaxHelper from './AjaxHelper'
// ToDo baseUrl

const ApiHelper = () => {
  return {
    //  --- OAuth ---
    showOauthRedirect: () => {
      return AjaxHelper.get(`${process.env.REACT_APP_BACKEND_URL}/api/oauth/initiate`)
    },

    //  --- Streams ---
    indexStreams: () => {
      return AjaxHelper.get(`${process.env.REACT_APP_BACKEND_URL}/api/streams`)
    },
  }
}

export default ApiHelper()
