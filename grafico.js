const ctx = document.getElementById('hemophiliaChart').getContext('2d');

const data = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [{
        label: 'Incidência de Hemofilia',
        data: [12983 , 13150, 13296, 13618, 13895], // Exemplo de dados, substitua pelos dados reais
        backgroundColor: '#b22222', // Cor de fundo vermelho
        borderColor: 'rgba(255, 99, 132, 1)', // Cor da borda vermelha
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Número de Casos',
                    font: {
                        size: 18 // Tamanho da fonte do título do eixo y
                    }
                },
                ticks: {
                    font: {
                        size: 14 // Tamanho da fonte dos rótulos do eixo y
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Ano',
                    font: {
                        weight: 'bold',
                        size: 18 // Tamanho da fonte do título do eixo x 
                    }
                },
                ticks: {
                    font: {
                        size: 14 // Tamanho da fonte dos rótulos do eixo x
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Incidência de Hemofilia no Brasil (2019-2023)',
                font: {
                    size: 20 // Tamanho da fonte do título do gráfico
                }
            },
            legend: {
                labels: {
                    font: {
                        size: 18 // Aumenta o tamanho da fonte da legenda
                    }
                }
            }
        }
    }
};

const hemophiliaChart = new Chart(ctx, config);
