'use client';

import { formium } from './formium';
import { FormiumForm } from '@formium/react';

// app/page.js
async function getData() {
  const form = await formium.getFormBySlug('first-form');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return form;
}

// This is an async Server Component
export default async function Page() {
  const data = await getData();
  return (
    <FormiumForm
      data={data}
      onSubmit={async values => {
       // Send form values to Formium
       await formium.submitForm('first-form', values);
       alert('Success');
      }}
   />
  )
}