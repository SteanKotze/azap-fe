<script>
  //  --- Imports ---
  import { navigate } from 'svelte-routing'
  import { Button, SmolCard } from '../../components'
  import ShowStreamerTitle from '../streamers/ShowStreamerTitle.svelte'

  //  --- Props ---
  export let class_name = ''
  export let stream
</script>

<SmolCard {class_name}>
  <div class="flex flex-col space-y-3">
    <ShowStreamerTitle streamer={stream.streamer} />
    <p class="px-1">Viewers: {stream.viewers}</p>
    <p class="px-1">Listeners: {stream.listeners}</p>
    <p class="px-1">Song: {stream.listening_to}</p>
    <Button on_click={() => navigate(`/streams/${stream.streamer.uuid}`)}>Go To</Button>
  </div>
</SmolCard>
