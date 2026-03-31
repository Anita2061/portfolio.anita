const Card = ({ title, description, tags, image }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
      <img className="w-full h-48 object-cover" src={image || "https://via.placeholder.com/400x200"} alt={title} />
      <div className="p-5">
        <h5 className="text-2xl font-bold text-slate-900 mb-2">{title}</h5>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;