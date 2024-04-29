import {FC} from 'react';
import {
  ActionLink,
  BooleanField,
  CheckboxListField,
  DateField,
  ErrorFeedback,
  NumberField,
  SelectField,
  TextField,
  Title,
} from '../fields';
import {DynamicFieldProps} from '@/forms/types';

/**
 * Builds a registry of components to quick and dynamic access.
 */
class ComponentsRegistry {
  private readonly components: Record<string, FC<DynamicFieldProps>>;

  /**
   * @param {Array<string, object>[]} components Custom components to be added to the registry.
   */
  constructor(components: Array<[string, FC<DynamicFieldProps>]> = []) {
    this.components = {};
    this.add(ActionLink, 'actionLink');
    this.add(CheckboxListField, 'checkboxList');
    this.add(DateField, 'date');
    this.add(ErrorFeedback, 'error');
    this.add(NumberField, 'number');
    this.add(SelectField, 'select');
    this.add(TextField, 'text');
    this.add(Title, 'title');
    this.add(BooleanField, 'boolean');

    if (components) {
      components.forEach(([name, component]) => this.add(component, name));
    }
  }

  /**
   * Add a component to the registry.
   * A key to look up the component in the registry.
   * component.displayName is used if a key is not given.
   */
  add(component: FC<DynamicFieldProps>, key: string) {
    const name = key || component.displayName;
    if (!name) {
      throw new Error(
        'ComponentsRegistry: displayName is required to support minification if a key is not given.',
      );
    }
    this.components[name] = component;
  }

  /**
   * Returns a component from the registry.
   */
  get(key: string): FC<DynamicFieldProps> {
    return this.components[key];
  }
}

export default ComponentsRegistry;
