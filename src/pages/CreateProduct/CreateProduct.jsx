import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Background, FormItemWrapper, ModalWrapper, СloseModalButton, ErrorDiv } from './styled-components/modalStyled';
import { validateProduct } from './validation/shapes';
import usePostProduct from './hooks/usePostProduct';

const CreateProduct = ({ isOpen, closeModalHandler }) => {
  const { handleSubmit } = usePostProduct();
  return (
    <>
      {isOpen ? (
        <Background>
          <ModalWrapper>
            <Formik
              initialValues={validateProduct.shape}
              validationSchema={validateProduct.schema}
              onSubmit={(value) => handleSubmit(value)}>
              {({ errors, touched, isSubmitting, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <FormItemWrapper>
                    <label htmlFor="name">Product name:</label>
                    <Field label="Product name" name="name" type="text" />
                  </FormItemWrapper>
                  {errors.name && touched.name ? <ErrorDiv>{errors.name}</ErrorDiv> : null}
                  <FormItemWrapper>
                    <label htmlFor="origin">Select origin:</label>
                    <Field name="origin" as="select">
                      <option value="" label="select country" />
                      <option value="europe" label="Europe" />
                      <option value="usa" label="USA" />
                      <option value="africa" label="Africa" />
                      <option value="asia" label="Asia" />
                    </Field>
                  </FormItemWrapper>
                  {errors.origin && touched.origin ? <ErrorDiv>{errors.origin}</ErrorDiv> : null}
                  <FormItemWrapper>
                    <label htmlFor="price">Input price:</label>

                    <Field name="price" type="number" min="1" />
                  </FormItemWrapper>
                  {errors.price && touched.price ? <ErrorDiv>{errors.price}</ErrorDiv> : null}
                  <button disabled={isSubmitting} onClick={handleSubmit} type="submit">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>

            <СloseModalButton onClick={closeModalHandler} />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
export default CreateProduct;

CreateProduct.propTypes = {
  isOpen: PropTypes.bool,
  closeModalHandler: PropTypes.func
};
