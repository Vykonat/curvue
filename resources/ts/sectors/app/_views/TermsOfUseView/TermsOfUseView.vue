<template lang="pug">
  lvql-layout( name="Default" )
    .termsOfUseView
      h2 {{ appStrings.APP_NAME }} Terms of use
      panel
        panel-header( title="License Grant")
        panel-body
          p Copyright 2019 _judicium
          p 
            | Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
            | documentation files (the "Software"), to deal in the Software without restriction, including without limitation the 
            | rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit 
            | persons to whom the Software is furnished to do so, subject to the following conditions:
          p 
            | The above copyright notice and this permission notice shall be included in all copies or substantial portions of the 
            | Software.
          p 
            | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
            | WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
            | COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
            | OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { APP_NAME } from '../../../../common/config/app.config';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';

@Component({
  metaInfo: {
    ...setMetaInfo('Terms', 'Lavuql terms of use page', 'terms-of-use', '')
  }
})
export default class TermsOfUseView extends Vue {
  appStrings = {
    APP_NAME
  };
}
</script>

