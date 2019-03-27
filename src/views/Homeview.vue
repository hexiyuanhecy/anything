<template>
<div>
  <v-layout row height="100%">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click="go"
          >
            <v-list-tile-action>
              <v-icon v-if="item.icon" color="pink">star</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import Tab from 'components/Tab'

export default {
  name: 'Homeview',
  components: {
    Tab
  },
  data () {
    return {
      bottomNav: 'recent'
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size: 14px !important
</style>
