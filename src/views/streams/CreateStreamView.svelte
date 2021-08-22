<script>
  //  --- Imports ---
  import { navigate } from 'svelte-routing'
  import { Button, Card, TextInput, Select } from '../../components'
  import { streamingPlatforms, musicPlatforms } from '../../constants/PlatformConstants.js'

  //  --- Variables ---
  let streamTitle = ''
  let musicPlatform = ''
  let streamingPlatform = ''

  //  --- Functionality ---
  const createStream = () => {
    navigate('/streams/me')
    console.error('ToDo')
  }
</script>

<Card>
  <div class="flex flex-col space-y-6">
    <p class="mx-auto text-2xl">Create a New Stream</p>
    <div class="flex flex-row justify-between w-full mt-5">
      <label class="w-1/3" for="new-stream-title">Stream Title:</label>
      <TextInput className="text-azap-dark w-2/3" bind:value={streamTitle} name="new-stream-title" />
    </div>
    <div class="flex flex-row w-full">
      <label class="w-1/3" for="stream-platform-select">Stream Platform:</label>
      <Select
        className="w-40"
        options={streamingPlatforms}
        bind:value={streamingPlatform}
        name="stream-platform-select"
      />
    </div>
    <div class="flex flex-row w-full mt-5">
      <label class="w-1/3" for="music-platform-select">Music Platform:</label>
      <Select className="w-40" options={musicPlatforms} bind:value={musicPlatform} name="music-platform-select" />
    </div>
    <Button className="mx-auto" onClick={createStream}>Start Stream</Button>
  </div>
</Card>
