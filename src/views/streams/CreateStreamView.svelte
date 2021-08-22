<script>
  //  --- Imports ---
  import { navigate } from 'svelte-routing'
  import { Button, Card, TextInput, Select } from '../../components'
  import { streaming_platforms, music_platforms } from '../../constants/PlatformConstants.js'

  //  --- Variables ---
  let stream_title = ''
  let music_platform = ''
  let streaming_platform = ''

  //  --- Functionality ---
  const create_stream = () => {
    navigate('/streams/me')
    console.error('ToDo')
  }
</script>

<Card>
  <div class="flex flex-col space-y-6">
    <p class="mx-auto text-2xl">Create a New Stream</p>
    <div class="flex flex-row justify-between w-full mt-5">
      <label class="w-1/3" for="new-stream-title">Stream Title:</label>
      <TextInput class_name="text-azap-dark w-2/3" bind:value={stream_title} name="new-stream-title" />
    </div>
    <div class="flex flex-row w-full">
      <label class="w-1/3" for="stream-platform-select">Stream Platform:</label>
      <Select
        bind:value={streaming_platform}
        class_name="w-40"
        options={streaming_platforms}
        name="stream-platform-select"
      />
    </div>
    <div class="flex flex-row w-full mt-5">
      <label class="w-1/3" for="music-platform-select">Music Platform:</label>
      <Select class_name="w-40" options={music_platforms} bind:value={music_platform} name="music-platform-select" />
    </div>
    <Button class_name="mx-auto" on_click={create_stream}>Start Stream</Button>
  </div>
</Card>
