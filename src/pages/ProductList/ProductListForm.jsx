import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { productsAPI } from '../../api/api';
import { PRODUCTS_SUCCESS } from '../../store/reducers/productsList/productListSlice';
import styles from './ProductList.module.css';
export const ProductListForm = () => {
  const initialValues = {
    page: '1',
    perPage: '50',
    origins: '',
    minPrice: '',
    maxPrice: ''
  };
  const dispatch = useDispatch();
  const hendleSubmit = async (value) => {
    const { page, perPage, origins, minPrice, maxPrice } = value;
    try {
      const response = await productsAPI.getFilteredProducts(page, perPage, origins, minPrice, maxPrice);

      dispatch(PRODUCTS_SUCCESS(response));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
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
