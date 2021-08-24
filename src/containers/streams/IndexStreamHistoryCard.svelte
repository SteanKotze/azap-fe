<script>
  //  --- Imports ---
  import { SmolCard } from '../../components'
  import ShowSong from '../songs/ShowSong.svelte'

  //  --- Props ---
  export let class_name = ''
  export let history = []

  //  --- ToDo ---
  console.error('ToDo - Should redirect in new tab on clicking on song')
  console.error('ToDo - Should be able to switch between history and queue')
</script>

<SmolCard {class_name}>
  {#each history as song}
    <ShowSong {song} />
  {/each}
</SmolCard>
