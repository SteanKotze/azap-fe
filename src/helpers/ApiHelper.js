import AjaxHelper from './AjaxHelper'

const ApiHelper = () => {
  return {
    //  --- OAuth ---
    showOauthRedirect: () => {
      return AjaxHelper.get(`${process.env.REACT_APP_BACKEND_URL}/api/oauth/initiate`)
    },

    //  --- Streams ---
    createStream: (name, streamingPlatform, musicPlatform) => {
      // ToDo
      return Promise.resolve()
    },
    indexStreams: () => {
      return AjaxHelper.get(`${process.env.REACT_APP_BACKEND_URL}/api/streams`)
    },
  }
}

export default ApiHelper()
