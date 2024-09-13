

const SectionTitle = ({title, paragraph}) => {
    return (
        <div>
            <h2 className="text-3xl font-semibold mb-2">{title}</h2>
            <p>{paragraph}</p>
        </div>
    );
};

export default SectionTitle;