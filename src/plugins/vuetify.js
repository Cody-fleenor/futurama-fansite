import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);
/* eslint-disable */
export default new Vuetify({
      theme: {
        dark: false, // here we need to set theme
        themes: {
          /*
          ? comments structure [light] - [dark]
          */
          light: {
            primary: '#84D7E1', // white - black
            secondary: '#FF95A8', // pink - black
            accent: '#FF6348', // black - white      
          } ,
          dark: {
            /*
              ? comments structure [light] - [dark]
            */
            custm_theme_1: '#000000', // white - black
            custm_theme_2: '#000000',// pink - black
            custm_theme_3: '#ffffff', // black - white
            custm_theme_4: '#ffffff', // white - white
         
          }
        },
        options: {
          customProperties: true,
          // themeCache
        },
      }
});
