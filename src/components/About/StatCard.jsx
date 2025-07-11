export const StatCard = ({ value, label }) => (
    <li className="flex-1 px-8 py-16 bg-main rounded-xl text-p3 text-center font-light">
        <p className="text-6xl leading-none">{value}</p>
        <span className=" text-4xl leading-none block">{label}</span>
    </li>
);
