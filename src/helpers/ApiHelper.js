import AjaxHelper from './AjaxHelper'

const ApiHelper = () => {
  return {
    //  --- OAuth ---
    showOauthRedirect: () => {
      return AjaxHelper.get(`/api/oauth/initiate`) // ToDo baseUrl
    },

    //  --- Streams ---
    indexStreams: () => {
      return Promise.resolve([
        {
          streamer: "test",
          viewers: 1987,
          listeners: 607,
          listeningTo: "Kream - Drowning"
        }
      ])
      return AjaxHelper.get(`/api/streams`)
    },
  }
}

export default ApiHelper()
