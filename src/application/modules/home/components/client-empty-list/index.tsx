import React from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { View } from "react-native";
import EmptyIllustration from "@/application/assets/illustrations/empty-list-illustration.svg";
import { Button } from "@/application/components/base/button";
import { Text } from "@/application/components/base/text";

interface ClientEmptyListProps {
  onPressAddClientModal: VoidFunction;
}

export const ClientEmptyList = ({
  onPressAddClientModal,
}: ClientEmptyListProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <EmptyIllustration width={250} height={250} />
      <Text>Nenhum cliente cadastrado até o momento!</Text>
      <Button style={styles.addButton} onPress={onPressAddClientModal}>
        <Text weight="bold" style={styles.addTextButton}>
          Cadastrar novo
        </Text>
      </Button>
    </View>
  );
};
