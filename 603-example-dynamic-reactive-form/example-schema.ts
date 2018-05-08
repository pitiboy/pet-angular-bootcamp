import { IFieldDef } from './schema-form-utils';

export const exampleSchema: IFieldDef[] = [

  {
    fieldname: 'firstName',
    fieldlabel: 'First Name',
    fieldtype: 'text',
    mandatory: true
  },

  {
    fieldname: 'lastName',
    fieldlabel: 'Last Name',
    fieldtype: 'text',
    mandatory: true
  },

  {
    fieldname: 'dob',
    fieldlabel: 'Birthdate',
    fieldtype: 'date'
  },

  {
    fieldname: 'zip',
    fieldlabel: 'Postal Code',
    fieldtype: 'text',
    mandatory: true,
    matchesPattern: '\\d{5}'
  },

  {
    fieldname: 'password',
    fieldlabel: 'Password',
    fieldtype: 'password',
    mandatory: true,
    minimumLength: 3,
    maximumLength: 10
  },

  {
    fieldname: 'notes',
    fieldlabel: 'Notes',
    fieldtype: 'text',
    defaultValue: ''
  }
];
