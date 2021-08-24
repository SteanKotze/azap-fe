<script>
  //  --- Imports ---
  import { parse } from 'qs'
  import { querystring } from 'svelte-spa-router'
  import { Spinner, Button, Card } from '../../components'

  //  --- Functionality ---
  const send_redirect_params = async () => {
    console.log(parse($querystring))
    // return
    var response = await fetch('http://api.azap.gamedate.co.za/api/oauth/token', {
      method: 'POST',
      body: JSON.stringify(parse($querystring)),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        // if (checkAuthorization && response.status === 401) return window.open('/login', '_self')
        // if (!checkOk && !response.ok) throw response
        return response.json()
      })
      .catch((e) => {
        console.error('Could not POST to resource at ' + e)
      })

    console.log(response)
  }

</script>

<Card>
  <div class="flex flex-col justify-center">
    <Spinner class_name='mx-auto' />
    <Button class_name='mx-auto' on_click={send_redirect_params}>Test</Button>  
  </div>
</Card>