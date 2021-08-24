<script>
  //  --- Imports ---
  import { Link } from '../../components'

  //  --- Props ---
  export let song

  //  --- ToDo ---
  console.error('ToDo - Should be able to get song image from whichever platform is being used {1}')
  console.error(
    'ToDo - Should be able to go back a song, play/stop current song, go to next song, and seek in current song {2}'
  )
  console.error('ToDo - Should be able to change volume {3}')
</script>

<div class="flex flex-row justify-between">
  <Link text_color="text-white hover:text-gold" hover={false}>
    <div class="flex flex-row space-x-4">
      <div class="h-11 w-11 bg-gold rounded-md">
        <!-- ToDo 1 -->
        img
      </div>
      <div class="flex flex-col">
        <h1>{song.title}</h1>
        <p class="text-xs">{song.artist}</p>
      </div>
    </div>
  </Link>
  <div class="flex flex-col w-3/5 px-3 justify-between pb-1">
    <!-- ToDo 2 -->
    <div class="mx-auto">Back, Play/Stop, Next</div>
    <div class="bg-white w-full rounded-full" style="height: 2px;" />
  </div>
  <div>
    <!-- ToDo 3 -->
    Volume Thingy
  </div>
</div>
