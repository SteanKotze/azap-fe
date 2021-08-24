<script>
  //  --- Imports ---
  import { Link } from '../../components'

  //  --- Props ---
  export let song
</script>

<div class="song">
  <Link
    to={song.uri}
    class_name="flex flex-row justify-between py-2 space-x-3"
    text_color="text-white hover:text-gold"
    text_size="text-md"
    hover={false}>
    <h1 class="w-3/5">{song.title}</h1>
    <p class="w-2/5">{song.artist}</p>
  </Link>
</div>

<style>
  .song {
    border-top: 0.5px solid #dddddd;
  }

  .song:first-child {
    border-top: none;
  }
</style>
