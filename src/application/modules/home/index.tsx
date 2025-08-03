import React, { useMemo, useState } from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "@/application/components/layout";
import { Text } from "@/application/components/base/text";
import { Searchbar } from "@/application/components/searchbar";
import { Button } from "@/application/components/base/button";
import { Plus } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SectionList, View } from "react-native";
import { useClient } from "@/application/hooks/useClient";
import { groupClientsByFirstLetter } from "@/application/utils/GroupClientsByFirstLetter";
import { ClientCard } from "./components/client-card";
import { SectionHeader } from "./components/section-header";

export const Home = () => {
  const { styles, theme } = useStyles(stylesheet);
  // const { clients } = useClient();

  const [searchValue, setSearchValue] = useState("");

  const clients = [
    { id: "1", name: "Alice", createdAt: 1, updatedAt: 2 },
    { id: "2", name: "Bob", createdAt: 3, updatedAt: 4 },
    { id: "3", name: "Ana", createdAt: 5, updatedAt: 6 },
    { id: "4", name: "Carlos", createdAt: 7, updatedAt: 8 },
    { id: "5", name: "Bruna", createdAt: 7, updatedAt: 8 },
    { id: "6", name: "Eduardo", createdAt: 7, updatedAt: 8 },
    { id: "7", name: "Felipe", createdAt: 7, updatedAt: 8 },
    { id: "8", name: "Cristiano", createdAt: 7, updatedAt: 8 },
    { id: "9", name: "Anderson", createdAt: 7, updatedAt: 8 },
    { id: "10", name: "Barnabé", createdAt: 7, updatedAt: 8 },
    { id: "11", name: "Eliabe", createdAt: 7, updatedAt: 8 },
    { id: "12", name: "Gustavo", createdAt: 7, updatedAt: 8 },
    { id: "13", name: "Humberto", createdAt: 7, updatedAt: 8 },
    { id: "14", name: "Iury", createdAt: 7, updatedAt: 8 },
  ];

  const clientSectionList = useMemo(
    () =>
      groupClientsByFirstLetter(
        searchValue.length > 0
          ? clients.filter((client) =>
              client.name.toLowerCase().includes(searchValue.toLowerCase())
            )
          : clients
      ),
    [clients]
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Layout
        style={styles.container}
        statusBar={{ style: "light", color: theme.colors.primary }}
      >
        <View style={styles.header}>
          <Text size={24} weight="bold" style={styles.headerTitle}>
            Meus Clientes
          </Text>
          <Searchbar
            placeholder="Pesquisar por nome"
            contentContainerStyle={styles.searchbar}
            onChangeText={setSearchValue}
          />
        </View>

        <SectionList
          stickySectionHeadersEnabled
          sections={clientSectionList}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.clientListContentContainerStyle}
          renderItem={({ item }) => <ClientCard {...item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderSectionHeader={({ section }) => <SectionHeader {...section} />}
        />

        <Button style={styles.absoluteButton}>
          <Plus size={24} color={theme.colors.background} />
        </Button>
      </Layout>
    </SafeAreaView>
  );
};
