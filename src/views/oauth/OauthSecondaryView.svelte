<script>
  //  --- Imports ---
  import { Button, Card } from '../../components'

  //  --- Functionality ---
  const twitch_login = () => {
    console.error('ToDo')
  }

  const youtube_login = () => {
    console.error('ToDo')
  }
</script>

<div class="h-full flex">
  <div class="m-auto">
    <Card type="login">
      <div class="flex flex-col space-y-4">
        <Button on_click={twitch_login()}>Login With Twitch</Button>
        <Button on_click={youtube_login()}>Login With Youtube</Button>
      </div>
    </Card>
  </div>
</div>
