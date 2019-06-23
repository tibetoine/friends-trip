<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        fixed
        :clipped="$vuetify.breakpoint.mdAndUp"
        app
      >
        <v-list dense>
          <template v-for="item in items">
            <v-list-tile :key="item.text" href="" :to="item.path">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        color="blue darken-3"
        dark
        app
        :clipped-left="$vuetify.breakpoint.mdAndUp"
        fixed
      >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon
            @click.stop="drawer = !drawer"
          ></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">Google Contacts</span>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          prepend-icon="search"
          label="Search"
          class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
      </v-toolbar>

      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'not_listed_location', text: 'C où?', path: '/C où?' },
      { icon: 'restaurant', text: 'Menus', path: '/menus' },
      {
        icon: 'local_grocery_store',
        text: 'Les courses',
        path: '/les courses'
      },
      { icon: 'forum', text: 'Blabla...', path: '/blabla...' },
      {
        icon: 'add_a_photo',
        text: 'On partage tout',
        path: '/on partage tout'
      },
      { icon: 'attach_money', text: 'Les sous', path: '/les sous' },
      { icon: 'person_add', text: 'Invités', path: '/invités' },
      {
        icon: 'assignment',
        text: 'Qui ramène quoi?',
        path: '/Qui ramène quoi?'
      },
      { icon: 'beach_access', text: 'Activités', path: '/activités' },
      { icon: 'hotel', text: 'On dort où?', path: '/on dort où?' },
      { icon: 'help', text: 'Aide', path: '/help' }
    ]
  })
}
</script>
