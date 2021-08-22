<script>
  //  --- Imports ---
  import { Link } from '../../components'

  //  --- Props ---
  export let platforms = []
</script>

<div class="flex flex-row space-x-2">
  {#each platforms as platform}
    {#if platform.authenticated}
      {#if platform.name === 'Twitch'}
        <Link class_name="my-auto">
          <img class="w-5 h-6" src="/images/logos/Twitch.png" alt="twitch-logo" />
        </Link>
      {:else if platform.name === 'Youtube'}
        <Link class_name="my-auto">
          <img class="w-7 h-5" src="/images/logos/Youtube.png" alt="youtube-logo" />
        </Link>
      {:else if platform.name === 'Apple'}
        <Link class_name="my-auto">
          <img class="w-5 h-6" src="/images/logos/Apple.svg" alt="apple-logo" />
        </Link>
      {:else}
        <Link class_name="my-auto">
          <img
            class="w-5 h-5"
            src={`/images/logos/${platform.name}.png`}
            alt={`${platform.name}-logo`} />
        </Link>
      {/if}
    {/if}
  {/each}
</div>
