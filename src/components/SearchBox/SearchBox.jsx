const SearchBox = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const searchQuery = form.elements.search.value;
    onSubmit(searchQuery);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBox;
