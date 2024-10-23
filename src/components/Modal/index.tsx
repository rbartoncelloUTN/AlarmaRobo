import {FC, useState} from 'react';
import {IconProps} from '../../types';
import {useThemedStyles} from '../../hooks';
import {createStyles} from './styles.tsx';
import {Button, Container, Dialog} from '../index.ts';
import TextInput from '../TextInput';

interface ModalProps extends IconProps {
  id?: string;
  accessibilityLabel?: string;
  title?: string;
  message?: string;
  active: boolean;
  setActive: {off: any};
  onConfirm: (value: string) => void;
}

const Modal: FC<ModalProps> = ({
  id,
  accessibilityLabel,
  title,
  message,
  active,
  setActive,
  onConfirm,
}) => {
  const [styles] = useThemedStyles(createStyles);

  const [value, setValue] = useState('');

  return (
    <Dialog
      id={id}
      accessibilityLabel={accessibilityLabel}
      title={title}
      message={message}
      onClose={setActive.off}
      visible={active}
      style={styles.modal}
      styleMessage={styles.message}>
      <Container style={styles.container}>
        <TextInput
          labelStyle={{fontSize: 19, color: 'black', fontWeight: 'bold'}}
          label={'Ingrese su contraseña'}
          placeholder={'Contaseña'}
          onChange={(e: string) => setValue(e)}
        />
        <Button
          accessibilityLabel="btn-confirm"
          onPress={() => onConfirm(value)}
          buttonStyle={styles.confirm}
          containerStyle={styles.containerConfirm}>
          Aceptar
        </Button>
      </Container>
    </Dialog>
  );
};

export default Modal;
