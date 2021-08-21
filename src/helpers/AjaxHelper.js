const AjaxHelper = () => {
  return {
    post: (url, body, checkAuthorization = true, checkOk = true) => {
      return fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: body,
        headers: { 'Content-Type': 'application/json', 'Sec-Fetch-Mode': 'navigate' },
      })
        .then((response) => {
          if (checkAuthorization && response.status === 401) return window.open('/login', '_self')
          if (!checkOk && !response.ok) throw response
          return response.json()
        })
        .catch((error) => {
          console.error('Could not POST to resource at ' + url)
        })
    },
    get: (url, checkOk = true, parse = true) => {
      return fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Host: 'localhost:4000' },
      })
        .then((response) => {
          if (checkOk && !response.ok) throw response
          if (parse) return response.json()
        })
        .catch((error) => {
          console.info('Could not GET resource at ' + url)
          console.error(error)
        })
    },
    put: (url, body, checkAuthorization = true, checkOk = true, emptyResponse = false) => {
      fetch(url, {
        credentials: 'include',
        method: 'PUT',
        body: body,
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          if (checkAuthorization && response.status === 401) return window.open('/login', '_self')
          if (!checkOk && !response.ok) throw response
          if (!emptyResponse) return response.json()
        })
        .catch((error) => {
          console.error('Could not PUT to resource at ' + url, error)
        })
    },
    delete: (url, checkAuthorization = true, checkOk = true) => {
      fetch(url, { method: 'DELETE', credentials: 'include' })
        .then((response) => {
          if (checkAuthorization && response.status === 401) return window.open('/login', '_self')
          if (!checkOk && !response.ok) throw response
          return response.json()
        })
        .catch((error) => {
          console.error('Could not DELETE resource at ' + url, error)
        })
    },
  }
}

export default AjaxHelper()
