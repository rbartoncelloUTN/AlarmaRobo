import {Dialog as RNEDialog} from '@rneui/themed';
import {FC, PropsWithChildren} from 'react';
import {Text} from 'react-native';
import {createStyles} from './styles';
import {useThemedStyles} from '../../hooks';

type DialogProp = {
  id?: string;
  accessibilityLabel?: string;
  title?: string;
  message?: string;
  onClose: () => void;
  visible: boolean;
  style?: object;
  styleTitle?: object;
  styleMessage?: object;
  caption?: string;
  comment?: string;
};

const Dialog: FC<PropsWithChildren<DialogProp>> = ({
  id,
  accessibilityLabel,
  title,
  message,
  visible,
  onClose,
  children,
  style,
  styleTitle,
  styleMessage,
  caption,
  comment,
  ...props
}) => {
  const [styles] = useThemedStyles(createStyles);
  return (
    <RNEDialog
      id={id}
      accessibilityLabel={accessibilityLabel}
      overlayStyle={{...styles.body, ...style}}
      isVisible={visible}
      onBackdropPress={onClose}
      {...props}>
      {title && (
        <RNEDialog.Title
          title={title}
          titleStyle={{...styles.title, ...styleTitle}}
        />
      )}
      {message?.split(', ').map((text, index) => (
        <Text key={index} style={{...styles.message, ...styleMessage}}>
          {text}
        </Text>
      ))}
      {caption && (
        <RNEDialog.Title
          title={caption}
          titleStyle={{...styles.caption, ...styleTitle}}
        />
      )}
      {comment?.split(', ').map((text, index) => (
        <Text key={index} style={{...styles.comment, ...styleMessage}}>
          {text}
        </Text>
      ))}

      {children}
    </RNEDialog>
  );
};

export default Dialog;
