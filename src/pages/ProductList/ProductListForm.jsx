import { Field, Form, Formik } from 'formik';
import useGetFilteredProducts from './hooks/useGetFilteredProducts';

import styles from './ProductList.module.css';
export const ProductListForm = () => {
  const initialValues = {
    page: '1',
    perPage: '50',
    origins: '',
    minPrice: '',
    maxPrice: ''
  };

  const { handleFilter } = useGetFilteredProducts();

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={(value) => handleFilter(value)}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className={styles.formItem}>
              Select origin:
              <Field name="origins" as="select">
                <option value="">select</option>
                <option value="europe">Europe</option>
                <option value="usa">USA</option>
                <option value="africa">Africa</option>
                <option value="asia">Asia</option>
              </Field>
            </div>
            <div className={styles.formItem}>
              Select page:
              <Field name="page" type="number" min="0" />
            </div>
            <div className={styles.formItem}>
              Select items per page:
              <Field name="perPage" type="number" min="0" />
            </div>

            <div className={styles.formItem}>
              Select minimal price:
              <Field name="minPrice" type="number" min="0" />
            </div>
            <div className={styles.formItem}>
              Select maximal price:
              <Field name="maxPrice" type="number" min="0" />
            </div>
            <button onClick={handleSubmit} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
