<template>
  <v-row justify="center" align="center">
    <VuetifyLogo />
    <im2 />
    <v-card color="#FFA000" light>
      <v-card-title class="display-1"> Welcome to MFU Projects </v-card-title>
      <v-card-text>
        <p class="text-justify">
          With Mae Fah Luang University Aim to develop research to be strong
          have a clear direction And this drives the university to continue to
          compete in the international arena. Therefore, there is support for
          the integration of researchers. with senior researchers acting as
          mentors or team leaders To produce quality research or innovation work
          that has a social impact or industrial development.
        </p>
        <div class="text-md-right">
          <em><medium>&mdash; Group 19</medium></em>
        </div>
        <hr class="my-3" />
        <br />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn rounded color="primary" dark nuxt to="/Project">
          Continue
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>