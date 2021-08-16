import AjaxHelper from './AjaxHelper'

const ApiHelper = () => {
  return {
    //  --- OAuth ---
    showOauthRedirect: () => {
      return AjaxHelper.get(`/api/oauth/initiate`) // ToDo baseUrl
    },

    //  --- Streams ---
    indexStreams: () => {
      return AjaxHelper.get(`/api/streams`)
    },
  }
}

export default ApiHelper()