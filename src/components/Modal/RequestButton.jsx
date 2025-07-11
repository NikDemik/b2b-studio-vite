const RequestButton = ({ children, className = '', disabled = false, ...props }) => {
    return (
        <button
            className={`px-8 py-4 bg-p2 text-white text-xl font-medium rounded-lg hover:bg-blue-700 transition-colors ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
            } ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default RequestButton;
