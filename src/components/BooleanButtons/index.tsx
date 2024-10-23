import {ButtonGroup} from '@rneui/themed';
import React, {FC, ReactElement} from 'react';
import {View} from 'react-native';
import {useThemedStyles} from '../../hooks';
import {createStyles} from './styles.ts';
import {Text} from '../index.ts';
import theme from "../../theme/base";

interface BooleanButtonsProps {
  onChange: (state: 'none' | any) => void;
  options: ReactElement[];
  captions?: string[];
  label?: string;
  disabled?: boolean | number[];
  value?: number;
}

const BooleanButtons: FC<BooleanButtonsProps> = ({
  onChange,
  options,
  captions,
  label,
  disabled,
  value,
  ...props
}) => {
  const [styles] = useThemedStyles(createStyles);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.content}>
        <ButtonGroup
          buttons={options}
          selectedIndex={value}
          onPress={onChange}
          containerStyle={styles.buttonGroupContainer}
          selectedButtonStyle={styles.selectedButton}
          //selectedTextStyle={{color: '#fff', borderWidth: 1, fontSize: 20}}
          buttonStyle={{
            borderColor: theme.colors.brandPrimary,
            borderWidth: 1,
            borderRadius: 50,
            marginHorizontal: 2,
          }}
          innerBorderStyle={{width: 0}}
          textStyle={styles.text}
          disabledStyle={styles.disabled}
          disabled={disabled}
          {...props}
        />
        <View style={styles.captionContainer}>
          {captions?.map(caption => (
            <Text key={caption} style={styles.caption}>
              {caption}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default BooleanButtons;
