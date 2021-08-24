<script>
  //  --- Imports ---
  import { push } from "svelte-spa-router"
  import { Button, Card, SmolCard } from '../../components'
  import { IndexStreamerPlatformLinks } from '../../containers'

  //  --- Variables ---
  import data from '../../constants/mock/ShowUser'

  //  --- ToDo ---
  console.error('ToDo - should have user data saved', data)
  console.error("ToDo - should change 'Go Live!' button based on whether user is already streaming")
</script>

<svelte:head>
  <title>It you! - Azap</title>
</svelte:head>

<Card>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-row mx-auto space-x-2">
      <p class="text-2xl">{data.user.username} -</p>
      <IndexStreamerPlatformLinks platforms={data.platforms} />
    </div>
    <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
      <SmolCard class_name="w-full md:w-2/5">
        <div class="flex flex-col space-y-4 py-2">
          <Button class_name="mx-auto w-2/3" on_click={() => push('/streams/create')}
            >Go Live!</Button>
          {#each data.platforms as platform}
            <Button
              class_name="mx-auto w-2/3"
              enabled={!platform.authenticated}
              on_click={() => push(`/api/oauth/${platform.name.toLowerCase()}`)}>
              + {platform.name}
            </Button>
          {/each}
        </div>
      </SmolCard>
      <SmolCard class_name="w-full md:w-3/5">User Details from Spotify</SmolCard>
    </div>
    <SmolCard>User Past Stream Statistics</SmolCard>
  </div>
</Card>
