<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      class="red darken-4"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app color="red darken-4">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-avatar>
        <img src="images/MFUlogo.png" alt="cat" />
      </v-avatar>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer 
    class="red darken-4" 
    padless
    >
      <v-card 
      class="flex" 
      flat 
      tile
      >
      <v-card-title class="red darken-4">
          <strong class="subtitle-1">Mae Fah Luang University</strong>
          <v-spacer></v-spacer>
          <strong class="caption text-right">333 Moo1, Thasud, Muang, Chiang Rai 57100<br />
              Tel: 0-5391-6000, 0-5391-7034 Fax: 0-5391-6034, 0-5391-7049<br />
              Mae Fah Luang University, Bangkok Office Tel: 0-2679-0038-9 Fax:
              0-2679-0038<br />
              E-mail
              <a href="mailto:pr@mfu.ac.th" class="caption">pr@mfu.ac.th</a>
            </strong>
        </v-card-title>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script >
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      icons: ["mdi-email", "mdi-facebook", "mdi-twitter", "mdi-instagram"],

      items: [
        {
          icon: "mdi-newspaper",
          title: "Homepage",
          to: "/",
        },
        {
          icon: "mdi-badge-account-horizontal",
          title: "Project",
          to: "/Project",
        },
        {
          icon: "mdi-badge-account-horizontal",
          title: "Project Info",
          to: "/Projectinfo",
        },
        {
          icon: "mdi-view-dashboard",
          title: "Dashboard",
          to: "/Dashboard",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "MFU Project",
    };
  },
};
</script>
<style scoped>
.v-application {
  background-color: white;
}
</style>