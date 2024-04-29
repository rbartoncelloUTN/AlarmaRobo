import {FC, Fragment} from 'react';
import {createButtonsStyles} from './styles';
import {Button} from '@/components';
import {FormButtonsProps} from '@/forms/types';
import {useThemedStyles} from '@/hooks';

const FormButtons: FC<FormButtonsProps> = ({
  formSchema = {},
  isSubmitting,
  onCancel,
  onSubmit,
  isLoading,
}) => {
  const [styles] = useThemedStyles(createButtonsStyles);
  return (
    <Fragment>
      {!formSchema.hideSubmit && (
        <Button
          accessibilityLabel="btn-form-submit"
          disabled={isSubmitting}
          title={formSchema.submitText || 'submit'}
          onPress={onSubmit}
          containerStyle={styles.submit}
          loading={isLoading}
          {...formSchema?.submitButton}
        />
      )}
      {onCancel && (
        <Button
          accessibilityLabel="btn-form-cancel"
          type="clear"
          title={formSchema.cancelText || 'cancel'}
          onPress={onCancel}
          disabled={isSubmitting}
        />
      )}
    </Fragment>
  );
};

export default FormButtons;
