<script>
  //  --- Imports ---
  import { Button, Card } from '../../components'

  //  --- Functionality ---
  const twitchLogin = () => {
    console.log('ToDo logging in with twitch')
  }

  const youtubeLogin = () => {
    console.log('ToDo logging in with youtube')
  }
</script>

<div class="h-full flex">
  <div class="m-auto">
    <Card cardType="login">
      <div class="flex flex-col space-y-4">
        <Button onClick={twitchLogin()}>Login With Twitch</Button>
        <Button onClick={youtubeLogin()}>Login With Youtube</Button>
      </div>
    </Card>
  </div>
</div>
