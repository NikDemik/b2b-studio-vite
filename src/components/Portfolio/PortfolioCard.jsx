const PortfolioCard = ({ work, isWide = false }) => {
    return (
        <div className="relative bg-main overflow-hidden hover:shadow-xl transition-shadow h-96 group">
            {/* Фоновое изображение на всю карточку */}
            <div className="absolute inset-0">
                <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Затемнение фона */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </div>

            {/* Контент поверх изображения */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                {/* Бейдж категории */}
                <div className="mb-2">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/30">
                        {work.category}
                    </span>
                </div>

                {/* Заголовок */}
                <h3
                    className={`font-bold mb-2 ${
                        isWide ? 'text-2xl' : 'text-2xl'
                    } text-white drop-shadow-md`}
                >
                    {work.title}
                </h3>

                {/* Описание */}
                <p
                    className={`mb-3 text-white/90 drop-shadow-md ${
                        isWide ? 'text-xl' : 'text-xl'
                    } line-clamp-2`}
                >
                    {work.description}
                </p>

                {/* Год и клиент */}
                {/* <div className="flex justify-between items-center">
                    <span className="text-xs text-white/80 drop-shadow-md">{work.year}</span>
                    <span className="text-xs text-white font-medium drop-shadow-md bg-white/20 px-2 py-1 rounded">
                        {work.client}
                    </span>
                </div> */}
            </div>

            {/* Эффект при наведении */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
        </div>
    );
};

export default PortfolioCard;
