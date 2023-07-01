const productionData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    values: [5500, 6500, 7200, 5560, 8090, 9100, 8200]
  };

  const damageData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    values: [124, 105, 126, 110, 145, 175, 147]
  };

  const salesData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    values: [1000, 1500, 2000, 1800, 2500, 3000, 2050]
  };

  const financeData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    values: [5000, 6000, 7000, 5500, 8000, 9000, 8650]
  };

  const inventoryData = {
    labels: ['Argila', 'Areia'],
    values: [2000, 3000]
  };

  let currentChart = null;

  // Funções para exibir os gráficos
  function showProductionChart() {
    if (currentChart) {
      currentChart.destroy();
    }

    const chartOptions = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'Produção',
        data: productionData.values
      }],
      xaxis: {
        categories: productionData.labels
      }
    };

    showChart(chartOptions);
  }

  function showDamageChart() {
    if (currentChart) {
      currentChart.destroy();
    }

    const chartOptions = {
      chart: {
        type: 'bar'
      },
      series: [{
        name: 'Danificados',
        data: damageData.values
      }],
      xaxis: {
        categories: damageData.labels
      }
    };

    showChart(chartOptions);
  }

  function showSalesChart() {
    if (currentChart) {
      currentChart.destroy();
    }

    const chartOptions = {
      chart: {
        type: 'donut'
      },
      series: salesData.values,
      labels: salesData.labels,
      tooltip: {
        y: {
          formatter: function (val) {
            return "R$" + val;
          }
        }
      }
    };

    showChart(chartOptions);
  }

  function showFinanceChart() {
    if (currentChart) {
      currentChart.destroy();
    }

    const chartOptions = {
      chart: {
        type: 'donut'
      },
      series: financeData.values,
      labels: financeData.labels,
      tooltip: {
        y: {
          formatter: function (val) {
            return "R$" + val;
          }
        }
      }
    };

    showChart(chartOptions);
  }

  function showInventoryChart() {
    if (currentChart) {
      currentChart.destroy();
    }

    const chartOptions = {
      chart: {
        type: 'bar'
      },
      series: [{
        name: 'Estoque',
        data: inventoryData.values
      }],
      xaxis: {
        categories: inventoryData.labels
      }
    };

    showChart(chartOptions);
  }

  function showChart(options) {
    currentChart = new ApexCharts(document.querySelector('#chartContainer'), options);
    currentChart.render();
  }