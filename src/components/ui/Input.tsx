import { TextInput } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";
import type { IBaseForm } from "../../types/type";

interface IMaintaineInputProps extends Omit<IBaseForm, "name"> {
  name: string;
}

const MaintaineInput: React.FC<IMaintaineInputProps> = ({
  name,
  label,
  ...props
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => {
        return (
          <TextInput
            type={props?.type ?? "text"}
            ref={ref}
            label={label}
            placeholder={props?.placeholder ?? `Enter ${label}`}
            value={value ?? ""}
            onChange={onChange}
            onBlur={onBlur}
            error={error?.message}
            autoComplete="off"
            rightSection={props?.rightSection}
            withAsterisk={props?.isRequired ?? false}
            size={props?.size ?? "md"}
            styles={{
              label: {},
              error: { fontSize: "14px" },
            }}
            {...props}
          />
        );
      }}
    />
  );
};

export default MaintaineInput;
