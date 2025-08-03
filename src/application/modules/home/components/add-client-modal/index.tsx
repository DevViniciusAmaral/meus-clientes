import React, { forwardRef } from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { View } from "react-native";
import { Modalize } from "react-native-modalize";
import { Text } from "@/application/components/base/text";
import { Button } from "@/application/components/base/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "@/application/components/input-form";
import { masks } from "@/application/utils/Masks";
import { SwitchButton } from "@/application/components/switch-button";
import {
  ClientFormData,
  clientFormSchema,
} from "../../schemas/ClientFormSchema";
import { X } from "lucide-react-native";
import { useClient } from "@/application/hooks/useClient";
import { IClient } from "@/application/models/Client";

interface AddClientModalProps {
  clientId?: string;
  onClose: VoidFunction;
}

export const AddClientModal = forwardRef<any, AddClientModalProps>(
  ({ clientId, onClose }, ref) => {
    const { styles, theme } = useStyles(stylesheet);
    const { clients, addClient, updateClient } = useClient();

    const client = clients.find((client) => client.id === clientId);

    const {
      control,
      formState: { errors },
      watch,
      reset,
      handleSubmit,
      setValue,
    } = useForm<ClientFormData>({
      resolver: zodResolver(clientFormSchema),
      defaultValues: {
        name: client?.name,
        billingDate: client?.billingDate,
        isRecurrent: client?.isRecurrent,
      },
    });

    const form = watch();
    const name = form?.name ?? client?.name;
    const isRecurrent = form?.isRecurrent ?? client?.isRecurrent;
    const billingDate = masks.dayAndMonth(
      form?.billingDate ?? client?.billingDate
    );

    const handleToggleRecurrence = () => {
      setValue("isRecurrent", !isRecurrent);
    };

    const handleSubmitForm = (data: ClientFormData) => {
      const clientData = data as IClient;

      if (client) updateClient(clientId, clientData);
      else addClient(clientData);

      reset();
      onClose();
    };

    return (
      <Modalize
        ref={ref}
        withReactModal
        adjustToContentHeight
        handlePosition="inside"
        closeOnOverlayTap={false}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text size={20} weight="medium" style={styles.titleModal}>
              Novo Cliente
            </Text>

            <Button onPress={onClose}>
              <X size={20} color={theme.colors.typography} />
            </Button>
          </View>

          <InputForm
            name="name"
            control={control}
            label="Nome do cliente"
            placeholder="Nome"
            value={name}
            error={errors.name}
          />

          <InputForm
            name="billingDate"
            control={control}
            label="Data de cobrança"
            placeholder="Dia / Mês"
            maxLength={5}
            keyboardType="numeric"
            value={billingDate}
            error={errors.billingDate}
          />

          <View style={styles.switchRecurrenceButtonsContainer}>
            <Text>Tipo de cobrança</Text>
            <View style={styles.switchRecurrenceButtonsContent}>
              <SwitchButton
                isActive={!isRecurrent}
                label="Única"
                contentContainerStyle={styles.switchButton}
                onPress={handleToggleRecurrence}
              />

              <SwitchButton
                isActive={isRecurrent}
                label="Recorrente"
                contentContainerStyle={styles.switchButton}
                onPress={handleToggleRecurrence}
              />
            </View>
          </View>

          <Button
            style={styles.saveButton}
            onPress={handleSubmit(handleSubmitForm)}
          >
            <Text weight="bold" style={styles.saveTextButton}>
              {client ? "ATUALIZAR" : "SALVAR"}
            </Text>
          </Button>
        </View>
      </Modalize>
    );
  }
);
