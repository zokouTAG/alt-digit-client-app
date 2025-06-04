<template>
  <b-row class="justify-content-center">
    <b-col md="6" lg="6">
      <UIComponentCard title="Popovers Example">
        <div class="button-items d-flex flex-wrap gap-1">
          <b-button variant="primary" v-b-popover.click.top="`Vivamus sagittis lacus vel augue laoreet rutrum faucibus.`"> Popover on top </b-button>
          <b-button variant="primary" v-b-popover.click.right="`Vivamus sagittis lacus vel augue laoreet rutrum faucibus.`"> Popover on right </b-button>
          <b-button variant="primary" v-b-popover.click.bottom="`Vivamus sagittis lacus vel augue laoreet rutrum faucibus.`"> Popover on bottom </b-button>
          <b-button variant="primary" v-b-popover.click.left="`Vivamus sagittis lacus vel augue laoreet rutrum faucibus.`"> Popover on left </b-button>
        </div>
      </UIComponentCard>
    </b-col>
    <b-col md="6" lg="6">
      <UIComponentCard title="Bootstrap Tooltips">
        <div class="button-items d-flex flex-wrap gap-1">
          <b-button variant="primary" v-b-tooltip.hover.top="'Tooltip on top'"> Tooltip on top </b-button>
          <b-button variant="primary" v-b-tooltip.hover.right="'Tooltip on right'"> Tooltip on right </b-button>
          <b-button variant="primary" v-b-tooltip.hover.bottom="'Tooltip on bottom'"> Tooltip on bottom </b-button>
          <b-button variant="primary" v-b-tooltip.hover.left="'Tooltip on left'"> Tooltip on left </b-button>
        </div>
      </UIComponentCard>
    </b-col>
  </b-row>
  <b-row class="justify-content-center">
    <b-col md="6" lg="6">
      <UIComponentCard title="Custom & Dismiss Popover">
        <div class="button-items d-flex flex-wrap gap-1">
          <b-button type="button" variant="secondary" id="popover-target-1"> Custom popover </b-button>
          <client-only>
            <b-popover target="popover-target-1" triggers="click" class="custom-popover" placement="right">
              <template #title>Custom popover</template>
              This popover is themed via CSS variables.
            </b-popover>
          </client-only>
          <a tabindex="0" class="btn btn-danger" role="button" id="popover-target-2"> Dismissible popover </a>
          <client-only>
            <b-popover target="popover-target-2" triggers="focus" placement="right">
              <template #title>Dismissible popover</template>
              And here's some amazing content. It's very engaging. Right?
            </b-popover>
          </client-only>
        </div>
      </UIComponentCard>
    </b-col>
    <b-col md="6" lg="6">
      <UIComponentCard title="Custom Tooltip">
        <div class="button-items d-flex flex-wrap gap-2">
          <b-button variant="light" id="tooltip1"> Custom tooltip </b-button>
          <b-tooltip target="tooltip1" class="custom-tooltip">This top tooltip is themed via CSS variables. </b-tooltip>
        </div>
      </UIComponentCard>
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'default',
  title: 'Popover & Tooltips'
})
</script>
