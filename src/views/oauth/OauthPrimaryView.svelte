<script>
  //  --- Imports ---
  import { push } from 'svelte-spa-router'
  import { Button, Card } from '../../components'

  //  --- Functionality ---
  const spotify_login = async () => {
    let response = await fetch(
      'http://api.azap.gamedate.co.za/api/oauth/initiate?requested_provider=spotify',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((response) => {
        return response.json()
      })
      .catch((e) => {
        console.error(e)
      })

    console.log(response.redirect)
  }
</script>

<div class="h-full flex">
  <div class="m-auto">
    <Card type="login">
      <Button on_click={spotify_login}>Login With Spotify</Button>
    </Card>
  </div>
</div>
