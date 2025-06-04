<template>
  <b-row class="justify-content-center">
    <b-col cols="12">
      <UIComponentCard title="Quill Editor">
        <div id="editor">
          <QuillEditor theme="snow" style="height: 300px" :content="taskDetail" content-type="html" />
        </div>
      </UIComponentCard>
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'

const taskDetail = `<p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
          <p><br /></p>`

definePageMeta({
  layout: 'default',
  title: 'Editors'
})
</script>
