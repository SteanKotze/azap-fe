<script>
  export let class_name = ''
  export let color = 'white'
</script>

<div class={class_name}>
  <svg
    fill={color}
    class="w-9 h-9"
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    version="1.1"
    viewBox="0 0 100 100"
    xmlSpace="preserve">
    <path
      d="M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        dur="1s"
        from="0 50 50"
        repeatCount="indefinite"
        to="360 50 50"
        type="rotate" />
    </path>
  </svg>
</div>
