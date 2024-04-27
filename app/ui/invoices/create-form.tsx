'use client';

import { createInvoice } from '@/app/lib/actions';
import { CustomerField } from '@/app/lib/definitions';
import { useFormState } from 'react-dom';
import { InvoicesForm } from './invoices-form';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, errors: {} };

  const [state, dispatch] = useFormState(createInvoice, initialState);

  return (
    <InvoicesForm
      customers={customers}
      formAction={dispatch}
      state={state}
      submitButtonLabel={'Create Invoice'}
    />
  );
}
