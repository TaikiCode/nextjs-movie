const SideMenu = ({ filter, categories, changeCategory }) => {
  return (
    <div>
      <div className="list-group list-group-flush">
        {categories.map((category, index) => (
          <a
            key={index}
            className={`list-group-item ${
              filter === category ? "selected" : ""
            }`}
            onClick={() => changeCategory(category)}
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
