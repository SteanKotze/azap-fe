import AjaxHelper from './AjaxHelper'

const ApiHelper = () => {
  return {
    showLoginRedirect: () => {
      return AjaxHelper.get("/api/oauth/initiate") // ToDo baseUrl
    }
  }
}

export default ApiHelper()
