import { Chart, registerables } from "chart.js";
import { Radar } from "react-chartjs-2";
Chart.register(...registerables);

export default function PowerStatsRadarChart({ powerStats }) {
  const labels = Object.entries(powerStats).map(([key, value]) => key);
  const values = Object.entries(powerStats).map(([key, value]) => value);

  

  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: values,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.4)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-900 dark:text-amber-100">
        POWER STATS
      </h2>
      <div className="space-y-3 mb-6">
        <div className="flex justify-center items-center  text-sm w-full">
          {/* Display each power stat with a label and Radar */}
          <Radar data={data} options={options} />
        </div>
      </div>
    </>
  );
}
