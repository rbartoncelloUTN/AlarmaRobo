import {connect} from 'formik';
import {useEffect} from 'react';

const OnSubmitValidationError = ({
  formik,
  callback,
}: {
  formik?: any;
  callback: any;
}) => {
  useEffect(() => {
    if (formik.submitCount > 0 && !formik.isSubmitting && !formik.isValid) {
      callback({...formik.errors});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.submitCount, formik.isSubmitting]);
  return null;
};

export default connect(OnSubmitValidationError);
