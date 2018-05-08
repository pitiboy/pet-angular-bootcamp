import { Validators, ValidatorFn } from '@angular/forms';

export interface IFieldDef {
    fieldname: string;
    fieldlabel: string;
    fieldtype: string;
    mandatory?: boolean;
    minimumLength?: number;
    maximumLength?: number;
    matchesPattern?: string;
    defaultValue?: any;
}

export class SchemaFormUtils {

  // Given a schema, return an array of control configurations suitable
  // for use with the FormBuilder group() method.

  static createControlsConfigFromSchema(schema: IFieldDef[]): { [key: string]: any } {

    let allControlConfigs: any = {};

    schema.forEach((fieldinfo: any) => {

      let singleControlConfig: any[] = [];
      let singleControlValidators: ValidatorFn[] = [];

      singleControlConfig[0] = fieldinfo.defaultValue || '';

      if (fieldinfo.mandatory) {
        singleControlValidators.push(Validators.required);
      }

      if (fieldinfo.minimumLength) {
        singleControlValidators.push(
          Validators.minLength(fieldinfo.minimumLength)
        );
      }

      if (fieldinfo.maximumLength) {
        singleControlValidators.push(
          Validators.maxLength(fieldinfo.maximumLength)
        );
      }

      if (fieldinfo.matchesPattern) {
        singleControlValidators.push(
          Validators.pattern(fieldinfo.matchesPattern)
        );
      }

      // If any validators were added, attach them to
      // the control configuration.
      //
      if (singleControlValidators.length > 0) {
        singleControlConfig[1] = singleControlValidators;
      }

      allControlConfigs[fieldinfo.fieldname] = singleControlConfig;
    });

    return allControlConfigs;
  }

}
