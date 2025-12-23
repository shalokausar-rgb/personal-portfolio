// Dashboard Chart using Chart.js
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mathematics', 'Excel', 'Power BI', 'Machine Learning'],
        datasets: [{
            label: 'Skill Level (%)',
            data: [80, 70, 65, 50],
            backgroundColor: 'rgba(0, 123, 255, 0.7)'
        }]
    }
});