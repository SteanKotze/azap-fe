<script>
  //  --- Imports ---
  import { Link } from '../../components'

  //  --- Props ---
  export let streamer

  //  --- Functionality ---
  const renderCss = () => {
    switch (streamer.platform) {
      case 'twitch':
        return ' my-auto h-6 w-5'
      default:
        return 'my-auto h-5 w-7'
    }
  }

  const renderChannelLink = () => {
    switch (streamer.platform) {
      case 'twitch':
        return `https://www.twitch.tv/${streamer.channel}`
      default:
        return `https://www.youtube.com/channel/${streamer.channel}`
    }
  }
</script>

<Link className="mx-auto my-auto" to={renderChannelLink()} textSize="text-xl">
  <div class="flex flex-row mx-auto space-x-3">
    <img class={renderCss()} src={`images/logos/${streamer.platform}.png`} alt={`${streamer.platform} logo`} />
    <p>{streamer.name}</p>
  </div>
</Link>
