document.addEventListener('DOMContentLoaded', function() {
    // CVE Counts with EPSS% Chart
    const ctx1 = document.getElementById('epssChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            datasets: [{
                label: 'CVE Count',
                data: [200, 180, 150, 160, 140, 180, 120, 130, 140, 180],
                borderColor: 'green',
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Count of CVE ID by Published Chart
    const ctx2 = document.getElementById('cvePublishedChart').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            datasets: [{
                label: 'Count of CVE ID',
                data: [150, 160, 120, 140, 130, 170, 100, 120, 140, 150],
                borderColor: 'purple',
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
