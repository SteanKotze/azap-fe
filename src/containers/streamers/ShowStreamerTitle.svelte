<script>
  //  --- Imports ---
  import { Link } from '../../components'

  //  --- Props ---
  export let streamer

  //  --- Functionality ---
  const render_css = () => {
    switch (streamer.platform) {
      case 'twitch':
        return ' my-auto h-6 w-5'
      default:
        return 'my-auto h-5 w-7'
    }
  }

  const render_channel_link = () => {
    switch (streamer.platform) {
      case 'twitch':
        return `https://www.twitch.tv/${streamer.channel}`
      default:
        return `https://www.youtube.com/channel/${streamer.channel}`
    }
  }
</script>

<Link class_name="mx-auto my-auto" to={render_channel_link()} text_size="text-xl">
  <div class="flex flex-row mx-auto space-x-3">
    <img
      class={render_css()}
      src={`images/logos/${streamer.platform}.png`}
      alt={`${streamer.platform} logo`} />
    <p>{streamer.name}</p>
  </div>
</Link>
