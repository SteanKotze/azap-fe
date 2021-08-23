<script>
  import { Link } from '../components'
  import { UserIcon } from '../components/icons'
</script>

<div class="flex px-8 md:px-4 py-4 w-full bg-azap-light mb-10 shadow-xl">
  <div class="flex justify-between mx-auto w-full md:w-2/3 lg:w-3/5">
    <Link to="/">Azap</Link>
    <Link to="/users/me">
      <UserIcon />
    </Link>
  </div>
</div>
