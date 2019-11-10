<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
          <template v-for="item in items">
            <v-list-item :key="item.text" href="" :to="item.path">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app color="indigo" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Friends Trip</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
      </v-app-bar>

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
      { icon: 'not_listed_location', text: 'C où?', path: '/where' },
      { icon: 'restaurant', text: 'Menus', path: '/menus' },
      {
        icon: 'local_grocery_store',
        text: 'Les courses',
        path: '/shopping'
      },
      { icon: 'forum', text: 'Blabla...', path: '/discuss' },
      {
        icon: 'add_a_photo',
        text: 'On partage tout',
        path: '/sharing'
      },
      { icon: 'attach_money', text: 'Les sous', path: '/money' },
      { icon: 'person_add', text: 'Invités', path: '/guests' },
      {
        icon: 'assignment',
        text: 'Qui ramène quoi?',
        path: '/taking'
      },
      { icon: 'beach_access', text: 'Activités', path: '/activies' },
      { icon: 'hotel', text: 'On dort où?', path: '/sleeping' },
      { icon: 'help', text: 'Aide', path: '/help' }
    ]
  })
}
</script>
