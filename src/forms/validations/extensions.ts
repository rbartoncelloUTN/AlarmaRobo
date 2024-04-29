import type {TestConfig} from 'yup';

export const equalsTo = (ref: any, message: string) =>
  ({
    message: message || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path,
    },
    test(value: any) {
      return value === this.resolve(ref);
    },
  }) as TestConfig;
