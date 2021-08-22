<script>
  import { navigate } from 'svelte-routing'
  import { Button, Card, SmolCard } from '../../components'
  import { IndexStreamerPlatformLinks } from '../../containers'
  import data from '../../constants/mock/ShowUser'
</script>

<Card>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-row mx-auto space-x-2">
      <p class="text-2xl">{data.user.username} -</p>
      <IndexStreamerPlatformLinks platforms={data.platforms} />
    </div>
    <div class="flex flex-row space-x-4">
      <SmolCard className="w-1/3">
        <div class="flex flex-col space-y-4 py-2">
          <Button className="mx-auto w-2/3" onClick={() => navigate('/streams/create')}>Go Live!</Button>
          {#each data.platforms as platform}
            <Button
              className="mx-auto w-2/3"
              enabled={!platform.authenticated}
              onClick={() => history.push(`/api/oauth/${platform.name.toLowerCase()}`)}
            >
              + {platform.name}
            </Button>
          {/each}
        </div>
      </SmolCard>
      <SmolCard className="w-2/3">User Details from Spotify</SmolCard>
    </div>
    <SmolCard>User Past Stream Statistics</SmolCard>
  </div>
</Card>
