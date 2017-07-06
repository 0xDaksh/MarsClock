<template>
  <div class="home">
    <h2>
      {{time}}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      time: '0:0:0',
      tai: 37
    }
  },
  methods: {
    getTime() {
      var date = new Date().getTime()
      var jdut = 2440587.5 + (date / 8.64E7)
      var jdtt = jdut + (this.tai + 32.184) / 86400
      var j2000 = jdtt - 2451545
      var msd = (((j2000 - 4.5) / 1.027491252) + 44796.0 - 0.00096)
      var mtc = (24 * msd) % 24
      this.time = this.toTime(mtc)
    },
    toTime(h) {
      var x = h * 3600;
      var hh = Math.floor(x / 3600);
      if (hh < 10) hh = "0" + hh;
      var y = x % 3600;
      var mm = Math.floor(y / 60);
      if (mm < 10) mm = "0" + mm;
      var ss = Math.round(y % 60);
      if (ss < 10) ss = "0" + ss;
      return hh + ":" + mm + ":" + ss;
  }
  },
  mounted() {
    this.getTime()
    setInterval(this.getTime, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 4.1em;
}
</style>
