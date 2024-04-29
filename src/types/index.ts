import type {ButtonProps, Colors} from '@rneui/base';
import type {FC, PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export type FCC<P = {}> = FC<PropsWithChildren<P>>;

export type Status = {
  errorMessage?: string | null;
  isFetching?: boolean;
  timestamp?: string;
  success?: boolean;
  isError?: boolean;
  error?: string | null | Error;
  meta?: any;
};

export interface IconProps {
  style?: StyleProp<ViewStyle>;
  color?: string;
  width?: number;
  height?: number;
  strokeWidth?: string;
}

interface CButtonProps extends ButtonProps {
  fontWeight: string | number;
}

export type Theme = {
  components?: {
    Button: CButtonProps;
  };
  typography: {
    small: {fontSize: number};
    large: {fontSize: number};
    extraLarge: {fontSize: number};
    regular: {fontSize: number};
  };
  spacing: {
    paddingVertical: number;
    marginHorizontal: number;
    baseUnit: number;
    marginVertical: number;
    paddingHorizontal: number;
  };
  colors: {
    white: string;
    code: string;
    brandLight: string;
    brandPrimary: string;
    brandDark: string;
    brandGreen: string;
    black: string;
    brandAccent: string;
    error: string;
    neutral50: string;
    neutral75: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    disabled: string;
    warning: string;
    success: string;
  } & Colors;
};

type Info = {
  title?: string;
  message?: string;
  caption?: string;
  comment?: string;
};

export type GenericItem = {
  id?: number | string;
  accessibilityLabel?: string;
  name?: string | number;
  title?: string;
  complete?: boolean;
  info?: Info;
  onSubmitRejection?: (dat: any) => void;
  onSubmitActivation?: (data: any) => void;
  disabled?: boolean;
};

export type Roadmaps = {
  id: number;
  name: string;
};

export type Panel = {
  id?: number | string;
  name?: string;
  panelId?: number;
  entityId: number;
  complete?: boolean;
  informants?: Informant[];
  roadmaps?: Roadmaps[];
};

export type Informant = {
  id: number | string;
  name: string;
  doorNumber: string;
  informantType: string;
  phoneNumber: number | null;
  state: string;
  street: string;
  complete?: boolean;
  disabled?: boolean;
  forms: Form[];
};

export type formItems = {
  id: number;
  name: string;
};

export type Form = {
  id: number | string;
  name: string;
  complete?: boolean;
  formItems: formItems[];
  varieties: Variety[];
  disabled?: boolean;
};

export type Variety = {
  id: number | string;
  name: string;
  details: string;
  attributes: Attribute[];
  observation: number;
  complete?: boolean;
};

export interface Attribute {
  id: number;
  name: string;
  price?: number;
  type?: string;
  attributeDataType?: string;
  validations?: {
    max: number;
    min: number;
  };
}

export type ReferenceSurveys = {
  date: string;
  panelId: number;
  entityId: number;
  data: ReferenceSurveyData;
};

export type ReferenceSurveyData = {
  [informantId: string | number]: {
    [formId: string | number]: {
      [varietyId: string | number]: ReferenceSurveyVariety;
    };
  };
};

export type ReferenceSurveyVariety = {
  type?: string;
  price?: string;
  bonus?: string;
  priceType?: string;
  referenceDate?: string;
  [attributeId: string]: string | undefined;
  comment?: string;
};

export type Survey = {
  id: number;
  userId: number;
  version: string;
  panelId: number;
  entityId: number;
  complete: boolean;
  data: {
    [key: string | number]: {
      [key: string | number]: {
        [key: string | number]: {
          type: string;
          price: string | number;
          bonus: string | number;
          complete: boolean;
          [key: string | number]: string | number | boolean;
        };
      };
    };
  };
  locations: Location[];
};

export type Location = {
  data: {id: number | string};
  entity: string;
  lat: string;
  lng: string;
  date: string;
};

export type User = {
  id: string | number;
  email: string;
  password: string | number;
  rol: 'admin' | 'invitado' | 'usuario' | 'tester';
  sex: 'masculino' | 'femenino';
};

export type Progress = {
  percentage: number;
  progress: number;
  total: number;
};
