const TimeLineDetails = ({ it }) => {
    if (!it) return null;
    return (
        <div className="">
            <div className="text-gray-600 bg-white border border-gray-300 flex items-center p-5 rounded-xl">
                <div className="w-9">
                    {
                        it.ctv === "Call" ? (
                            <span>📞</span>
                        ) : it.ctv === "Text" ? (
                            <span>💬</span>
                        ) : (
                            <span>🤝</span>
                        )
                    }
                </div>
                <div className="w-full space-y-1">
                    <div>
                        <b className="text-gray-600">{it.description}</b>
                    </div>
                    <p>{it.date}</p>
                </div>
            </div>
        </div>
    );
};

export default TimeLineDetails;