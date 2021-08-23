<script>
  //  --- Imports ---
  import { navigate } from 'svelte-routing'
  import { Button, SmolCard, Link } from '../../components'
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
    <p class="px-1">
      Song: 
      <Link to={stream.listening_to.uri} text_size='text-md'>{stream.listening_to.title}</Link>
    </p>
    <Button on_click={() => navigate(`/streams/${stream.streamer.uuid}`)}>Go To</Button>
  </div>
</SmolCard>
