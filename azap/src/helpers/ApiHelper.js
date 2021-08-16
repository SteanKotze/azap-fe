import AjaxHelper from './AjaxHelper'

const ApiHelper = () => {
  return {
    showLoginRedirect: () => {
      return AjaxHelper.get() // ToDo
    }
  }
}

export default ApiHelper()
