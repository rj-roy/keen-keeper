"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useInteractions } from "@/app/context/dContext";

const COLORS = ["#378ADD", "#1D9E75", "#D85A30"];
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
        <div className="p-10 space-y-3">
            <div className="relative w-full h-60">
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
    );
};