<template>
  <b-col md="12" lg="12">
    <b-card no-body>
      <b-card-header>
        <b-row class="align-items-center">
          <div class="col">
            <b-card-title>Monthly Avg. Income</b-card-title>
          </div>
          <div class="col-auto">
            <b-dropdown variant="light" menu-class="dropdown-menu-end">
              <template #button-content> <i class="icofont-calendar fs-5 me-1"></i> This Year<i
                  class="las la-angle-down ms-1"></i> </template>
              <b-dropdown-item>Today</b-dropdown-item>
              <b-dropdown-item>Last Week</b-dropdown-item>
              <b-dropdown-item>Last Month</b-dropdown-item>
              <b-dropdown-item>This Year</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-row>
      </b-card-header>
      <b-card-body class="pt-0">
        <ChartJs id="lineChart" :config="lineChartConfig" width="300" height="400" />
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
const lineChartConfig = ref({
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Report',
        data: [12, 19, 13, 9, 12, 11, 12, 19, 13, 9, 12, 80],
        backgroundColor: ['#22c55e'],
        borderColor: ['#22c55e'],
        borderWidth: 2,
        borderDash: [3],
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        pointBorderColor: '#22c55e',
        pointRadius: 3,
        pointBorderWidth: 1,
        tension: 0.3
      },
      {
        label: 'Monthly Report',
        data: [8, 12, 15, 11, 8, 14, 16, 30, 10, 7, 19, 16],
        backgroundColor: ['#fac146'],
        borderColor: ['#fac146'],
        borderWidth: 2,
        borderDash: [0],
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        pointBorderColor: '#fac146',
        pointRadius: 3,
        pointBorderWidth: 1,
        tension: 0.3
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#7c8ea7',
          font: {
            family: 'Be Vietnam Pro'
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          callback: function (value: number) {
            return value
          },
          color: '#7c8ea7'
        },
        grid: {
          drawBorder: 'border',
          color: 'rgba(132, 145, 183, 0.15)',
          borderDash: [3],
          borderColor: 'rgba(132, 145, 183, 0.15)'
        }
      },
      x: {
        ticks: {
          color: '#7c8ea7'
        },
        grid: {
          display: false,
          color: 'rgba(132, 145, 183, 0.09)',
          borderDash: [3],
          borderColor: 'rgba(132, 145, 183, 0.09)'
        }
      }
    }
  }
})
</script>
