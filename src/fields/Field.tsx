import React from 'react';
import { useUniqueID } from '../utils/useUniqueID';
import { Label } from './Label';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { FieldContext } from './FieldContext';

interface FieldProps {
  children: React.ReactNode;
}

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
}

export const Field: React.FC<FieldProps> & FieldComposition = ({
  children,
}) => {
  const id = useUniqueID();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
Field.Textarea = Textarea;
