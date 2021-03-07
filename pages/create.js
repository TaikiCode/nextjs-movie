const create = () => {
  return (
    <div className="container mt-5">
      <form>
        <h1 className="text-center text-white mb-3">Movie Create Form</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            // value={form.name}
            // onChange={handleChange}
            name="name"
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            // placeholder="Some Movie"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            //   value={form.description}
            //   onChange={handleChange}
            name="description"
            type="text"
            className="form-control"
            id="description"
            // placeholder="Somewhere in Middle-earth..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="Rating">Rating</label>
          <input
            // value={form.rating}
            // onChange={handleChange}
            name="rating"
            type="number"
            max="5"
            min="0"
            className="form-control"
            id="rating"
          />
          <small id="emailHelp" className="form-text text-muted">
            Max: 5, Min: 0
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="image">ImageURL</label>
          <input
            // value={form.image}
            // onChange={handleChange}
            name="image"
            type="text"
            className="form-control"
            id="image"
            placeholder="http://..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            // onChange={handleGenreChange}
            multiple
            className="form-control"
            id="genre"
          >
            <option>drama</option>
            <option>music</option>
            <option>adventure</option>
            <option>historical</option>
            <option>action</option>
          </select>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-lg btn-primary mt-3">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default create;
