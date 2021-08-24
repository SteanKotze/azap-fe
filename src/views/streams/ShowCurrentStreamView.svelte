<script>
  //  --- Imports ---
  import { Card, SmolCard } from '../../components'
  import { IndexStreamHistoryCard, ShowSongPlayer } from '../../containers'

  //  --- Variables ---
  import user from '../../constants/mock/ShowUser.js'
  import stream from '../../constants/mock/ShowCurrentStream.js'
  import history from '../../constants/mock/IndexStreamHistory.js'

  //  --- ToDo ---
  console.error('ToDo - should have user data saved', user)
  console.error('ToDo - should get stream data from API', stream)
  console.error('ToDo - should get stream history from API', history)
  console.error('ToDo - create uptime container', stream.uptime)
</script>

<svelte:head>
  <title>Your Stream - Azap</title>
</svelte:head>

<Card>
  <div class="flex flex-col">
    <h1 class="text-2xl text-center">{stream.title}</h1>
    <p class="mt-1 text-cyan-light text-sm text-center">{stream.started_at}</p>
    <SmolCard class_name="mt-4">
      <ShowSongPlayer song={stream.playing} />
    </SmolCard>
    <IndexStreamHistoryCard class_name="mt-4" {history} />
  </div>
</Card>
