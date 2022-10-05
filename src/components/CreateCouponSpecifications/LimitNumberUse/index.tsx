import { InputField, SwitchField } from '@base/formControl';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { Schema } from 'pages/delivery';
import React, { useEffect, useState } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';

type Props = {
  form: UseFormReturn<Schema>;
};

const LimitNumberUse = ({ form }: Props) => {
  const { control } = form;
  const isActive = useWatch({
    control,
    name: 'limitUse.isLimitUserActive',
    defaultValue: false,
  });

  useEffect(() => {
    if (!isActive) form.setValue('limitUse.limitUseValue', 0);
  }, [isActive, form]);
  return (
    <>
      <SwitchField label="Per memberId" form={form} name="limitUse.isLimitUserActive" />
      <InputField
        name="limitUse.limitUseValue"
        placeholder="Can be used "
        form={form}
        disabled={!isActive}
        type="number"
      />
    </>
  );
};

export default LimitNumberUse;
