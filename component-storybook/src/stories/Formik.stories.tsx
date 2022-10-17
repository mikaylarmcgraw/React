import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormikForm from '../components/FormikForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Formik Form',
  component: FormikForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    /** Form values */
   values: Values;
   /** map of field names to specific error for that field */
   errors: FormikErrors<Values>;
   /** map of field names to **whether** the field has been touched */
   touched: FormikTouched<Values>;
   /** whether the form is currently submitting */
   isSubmitting: boolean;
   /** whether the form is currently validating (prior to submission) */
   isValidating: boolean;
   /** Top level status state, in case you need it */
   status?: any;
   /** Number of times user tried to submit the form */
   submitCount: number;
  },
} as ComponentMeta<typeof FormikForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormikForm> = () => <FormikForm/>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
};