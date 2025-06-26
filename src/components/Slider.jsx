const Slider = ({ src, alt }) => {
    return (
        <div className=" flex items-start justify-center bg2 backdrop-blur-[22px] rounded-[25px] shadow-100 max-h-[350px] overflow-hidden">
            <img src={src} alt={alt} className=" object-cover" />
        </div>
    );
};

export default Slider;
