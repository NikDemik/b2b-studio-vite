const Slider = ({ src, alt }) => {
    return (
        <div className=" flex items-start justify-center bg-main max-h-[350px] overflow-hidden">
            <img src={src} alt={alt} className=" object-cover" />
        </div>
    );
};

export default Slider;
