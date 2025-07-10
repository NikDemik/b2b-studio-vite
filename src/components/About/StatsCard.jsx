export const StatCard = ({ value, label }) => (
    <div className="flex-1 px-8 py-16 bg-bg2 backdrop-blur-[22px] shadow-300 rounded-xl text-center font-light">
        <p className="text-6xl leading-none">{value}</p>
        <span className="text-[37px] leading-none block">{label}</span>
    </div>
);
