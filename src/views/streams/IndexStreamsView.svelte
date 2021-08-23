<script>
  //  --- Imports ---
  import { Card } from '../../components'
  import { ShowSmolStreamCard } from '../../containers'
  import streams from '../../constants/mock/IndexStreams.js'
</script>

<div class="h-full">
  <Card>
    <p class="text-center pb-4 text-2xl">Active Audio Streams</p>
    <div class="flex flex-row flex-wrap space-x-4">
      {#each streams as stream}
        <ShowSmolStreamCard class_name="w-64" {stream} />
      {/each}
    </div>
  </Card>
</div>
