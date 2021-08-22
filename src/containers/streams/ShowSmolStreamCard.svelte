<script>
  //  --- Imports ---
  import { navigate } from 'svelte-routing'
  import { Button, SmolCard } from '../../components'
  import ShowStreamerTitle from '../streamers/ShowStreamerTitle.svelte'

  //  --- Props ---
  export let className
  export let stream
</script>

<SmolCard className={className || ''}>
  <div class="flex flex-col space-y-2">
    <ShowStreamerTitle streamer={stream.streamer} />
    <p>Song: {stream.listening_to}</p>
    <p>Viewers: {stream.viewers}</p>
    <p>Listeners: {stream.listeners}</p>
    <Button onClick={() => navigate(`/streams/${stream.streamer.uuid}`)}>Go To</Button>
  </div>
</SmolCard>
