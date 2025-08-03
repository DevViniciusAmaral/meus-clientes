import React from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "@/application/components/layout";
import { Text } from "@/application/components/base/text";
import { Searchbar } from "@/application/components/searchbar";
import { Button } from "@/application/components/base/button";
import { Plus } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Home = () => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Layout style={styles.container}>
        <Text size={20} weight="bold">
          Meus Clientes
        </Text>
        <Searchbar placeholder="Pesquisar por nome" />

        <Button style={styles.absoluteButton}>
          <Plus size={24} color={theme.colors.background} />
        </Button>
      </Layout>
    </SafeAreaView>
  );
};
