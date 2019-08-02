<template lang="pug">
  lvql-select(
      name="language-select",
      id="language-select",
      :options="languages",
      :value="$i18n.locale",
      @input="changeLanguage"
  )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LanguageSelect extends Vue {
  languages = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' }
  ];

  changeLanguage(lang: string) {
    this.$i18n.locale = lang;
  }
}
</script>