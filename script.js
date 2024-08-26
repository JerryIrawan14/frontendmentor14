const xValues = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        const yValues = [20, 30, 52.36, 31.07, 25, 40, 27];
        
        // Array of colors for each bar
        const barColors = [
            "hsl(10, 79%, 65%)",  // Color for Mon
            "hsl(10, 79%, 65%)",  // Color for Tue
            "hsl(186, 34%, 60%)", // Custom color for Wed
            "hsl(10, 79%, 65%)",  // Color for Thu
            "hsl(10, 79%, 65%)",  // Color for Fri
            "hsl(10, 79%, 65%)",  // Color for Sat
            "hsl(10, 79%, 65%)"   // Color for Sun
        ];

        const hoverBarColors = barColors.map(color => {
            const [h, s, l] = color.match(/\d+/g).map(Number);
            return `hsl(${h}, ${s}%, ${l}%, 0.1)`; 
        });

        new Chart(document.getElementById('myChart'), {
            type: 'bar',
            data: {
                labels: xValues,
                datasets: [{
                    label: 'Values',
                    data: yValues,
                    backgroundColor: barColors,
                    borderRadius: 3
                }]
            },
            options: {
                plugins: {
                    legend: { display: false },
                    title: {
                        display: false,
                        text: ""
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            display: true
                        }
                    },
                    y: {
                        grid: {
                            display: false 
                        },
                        ticks: {
                            display: false 
                        },
                        border:{
                            display: false
                        }
                    }
                }
            }
        });