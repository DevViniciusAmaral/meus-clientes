import React from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { TextInputProps, View } from "react-native";
import { TextInput } from "../base/text-input";
import { Control, Controller, FieldError } from "react-hook-form";
import { Text } from "../base/text";

interface InputFormProps extends TextInputProps {
  label?: string;
  control: Control<any>;
  name: string;
  error?: FieldError;
}

export const InputForm = ({
  label,
  control,
  name,
  style,
  error,
  ...rest
}: InputFormProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      {label && <Text>{label}</Text>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <TextInput {...rest} style={[styles.input, style]} onChangeText={onChange} />
        )}
      />
      {error && <Text size={12} style={styles.errorText}>{error.message}</Text>}
    </View>
  );
};
