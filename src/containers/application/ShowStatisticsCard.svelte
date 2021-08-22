<script>
  import { Link } from 'svelte-routing'
  import { Button, Card } from '../../components'
</script>

<Card>
  A summary of the platform statistics
  <div class="flex justify-center pt-4">
    <Link to="stats">
      <Button>All the Numbers!</Button>
    </Link>
  </div>
</Card>
