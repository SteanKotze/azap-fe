<script>
  //  --- Imports ---
  import { navigate } from 'svelte-routing'
  import { Button, SmolCard } from '../../components'
  import ShowStreamerTitle from '../streamers/ShowStreamerTitle.svelte'

  //  --- Props ---
  export let class_name = ''
  export let stream
</script>

<SmolCard class_name={class_name}>
  <div class="flex flex-col space-y-2">
    <ShowStreamerTitle streamer={stream.streamer} />
    <p>Song: {stream.listening_to}</p>
    <p>Viewers: {stream.viewers}</p>
    <p>Listeners: {stream.listeners}</p>
    <Button on_click={() => navigate(`/streams/${stream.streamer.uuid}`)}>Go To</Button>
  </div>
</SmolCard>
