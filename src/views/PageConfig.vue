<template>
  <div class="">
    <!-- <header-bar></header-bar> -->
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
// import HeaderBar from '../components/HeaderBar'
import Tab from 'components/Tab'

export default {
  name: 'pagesview',
  components: { Tab },
  data () {
    return {
      talion: ''
    }
  },
  methods: {
    // open: function () {
    //   this.talion = 'open'
    // },
    // close: function () {
    //   this.talion = ''
    // }
  }
}
</script>

<style scoped>

</style>
