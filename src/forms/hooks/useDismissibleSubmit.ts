import {useEffect, useState} from 'react';

export const handleSubmit =
  (setFormActions: any, onSubmit: any) =>
  (values: any, {setSubmitting}: any) => {
    setFormActions({setSubmitting});
    onSubmit(values);
  };

export const handleDismiss = (
  dismiss: any,
  formActions: any,
  setFormActions: any,
) => {
  if (dismiss && formActions) {
    formActions.setSubmitting(false);
    setFormActions(null);
  }
};

const useDismissibleSubmit = (onSubmit: any, dismiss: any) => {
  const [formActions, setFormActions] = useState();
  useEffect(
    () => handleDismiss(dismiss, formActions, setFormActions),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dismiss],
  );
  return handleSubmit(setFormActions, onSubmit);
};

export default useDismissibleSubmit;
