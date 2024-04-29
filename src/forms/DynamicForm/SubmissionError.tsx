import {connect, FormikProps, FormikValues} from 'formik';
import {FC, Fragment} from 'react';
import {ErrorFeedback} from '@/forms/fields';

const config = {
  label: 'You have not filled all the required fields correctly.',
};

interface FormErrorProps {
  formik: FormikProps<FormikValues>;
}

export const SubmissionError: FC<FormErrorProps> = ({
  formik: {isValid, submitCount},
}) =>
  !!submitCount && !isValid ? <ErrorFeedback config={config} /> : <Fragment />;

export default connect(SubmissionError);
