import { TextField } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Key } from 'react';
import { Controller } from 'react-hook-form';
type Props = {
  form: any;
  name: string;
  label: string;
  disabled?: boolean;
  key?: Key;
};

const UseTime = (props: Props) => {
  const { form, name, label, disabled = false, key } = props;
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Controller
          name={`${name}.startTime`}
          control={form.control}
          render={({ field: { onChange, value, ...rest } }) => (
            <TimePicker
              label={`${label} start`}
              value={value}
              onChange={(time) => onChange(new Date(time.format()))}
              {...rest}
              ampmInClock={true}
              renderInput={(params) => {
                return <TextField {...params} size="small" />;
              }}
            />
          )}
        />
      </LocalizationProvider>
      <span> - </span>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Controller
          name={`${name}.endTime`}
          control={form.control}
          render={({ field: { onChange, value, ...rest } }) => (
            <TimePicker
              label={`${label} end`}
              value={value}
              onChange={(time) => onChange(new Date(time.format()))}
              {...rest}
              renderInput={(params) => {
                return <TextField {...params} size="small" />;
              }}
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

export default UseTime;
