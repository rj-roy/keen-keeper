import DonutChart from "../components/donoutChart/DonoutChart";

const StatsPage = () => {
    return (
        <div className="w-full max-w-6xl mx-auto p-4 pt-10 space-y-5">
            <h2 className="text-5xl text-green-950 font-bold">Friendship Analytics</h2>
            <DonutChart/>
        </div>
    );
};

export default StatsPage;