import React from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { View } from "react-native";
import { IClient } from "@/application/models/Client";
import { Text } from "@/application/components/base/text";
import { Button } from "@/application/components/base/button";
import { Edit3, Trash2 } from "lucide-react-native";

interface ClientCardProps {
  client: IClient;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const ClientCard = ({ client, onEdit, onDelete }: ClientCardProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text weight="medium">{client.name}</Text>

      <View style={styles.buttonsContainer}>
        <Button onPress={() => onEdit(client?.id)}>
          <Edit3 size={20} color={theme.colors.primary} />
        </Button>

        <Button onPress={() => onDelete(client?.id)}>
          <Trash2 size={20} color={theme.colors.alert} />
        </Button>
      </View>
    </View>
  );
};
