"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useInteractions } from "@/app/context/dContext";
import { AlertCircle, AlertTriangle } from "lucide-react";

const COLORS = ["#254e40", "#8038f3", "#37a162"];
const LABELS = ["Call", "Text", "Video"];

export default function DonutChart() {
    const { interactions } = useInteractions();
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    const counts = {
        call: interactions.filter(i => i.ctv === "Call").length,
        text: interactions.filter(i => i.ctv === "Text").length,
        video: interactions.filter(i => i.ctv === "Video").length,
    };
    const total = counts.call + counts.text + counts.video;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const data = [counts.call, counts.text, counts.video];

    useEffect(() => {
        if (!canvasRef.current) return;
        if (chartRef.current) chartRef.current.destroy();

        chartRef.current = new Chart(canvasRef.current, {
            type: "doughnut",
            data: {
                labels: LABELS,
                datasets: [{
                    data,
                    backgroundColor: COLORS,
                    borderWidth: 2,
                    borderColor: "transparent",
                    hoverOffset: 6,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: "65%",
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: ctx =>
                                ` ${ctx.label}: ${ctx.raw} (${Math.round((ctx.raw / total) * 100)}%)`,
                        },
                    },
                },
            },
        });

        return () => chartRef.current?.destroy();
    }, [data, interactions, total]);

    return (
        <div className="space-y-3 bg-white border border-gray-200 rounded-xl p-10 pb-15">
            <h3 className="text-2xl text-green-900">Interactions By Type</h3>
            {
                total === 0 ? 
                <div className="mx-auto flex flex-col justify-center items-center space-y-5 py-15">
                    <AlertTriangle size={50} color="red"/>
                    <div className="text-xl font-medium text-center">No Interactions Data Found</div>
                </div> :
                    <div className="space-y-3">
                        <div className="relative w-full">
                            <canvas ref={canvasRef} role="img" aria-label="Donut chart of interactions by type" />
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            {LABELS.map((label, i) => (
                                <span key={label} className="flex items-center gap-2 ">
                                    <span className="h-3 w-3 flex rounded-xs" style={{ background: COLORS[i] }} />
                                    {label} {Math.round((counts[label.toLowerCase()] / total) * 100)}%
                                </span>
                            ))}
                        </div>
                    </div>
            }
        </div>
    );
};