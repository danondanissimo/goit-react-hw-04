import { Field, Form, Formik } from "formik";

const SearchBar = ({ onSubmit, validateSearch }) => {
  const handleSubmit = (value) => {
    onSubmit(value);
  };

  const FORM_INITIAL_VALUES = {
    searchTerm: "",
  };

  function validateQuery(value) {
    validateSearch(value);
  }

  return (
    <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={handleSubmit}>
      <Form>
        <label>
          <span>Name</span>
          <Field
            type="text"
            name="searchTerm"
            placeholder="Enter search"
            validate={validateQuery}
          />
        </label>

        <button type="submit" aria-label="Search">
          🔍
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
