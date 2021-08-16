import AjaxHelper from './AjaxHelper'
// ToDo baseUrl

const ApiHelper = () => {
  return {
    //  --- OAuth ---
    showOauthRedirect: () => {
      return AjaxHelper.get(`/api/oauth/initiate`)
    },

    //  --- Streams ---
    indexStreams: () => {
      return AjaxHelper.get(`/api/streams`)
    },
  }
}

export default ApiHelper()
