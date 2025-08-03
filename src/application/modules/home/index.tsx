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
import { ClientEmptyList } from "./components/client-empty-list";

export const Home = () => {
  const { styles, theme } = useStyles(stylesheet);
  const { clients } = useClient();

  const [searchValue, setSearchValue] = useState("");

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

        {clients.length === 0 ? (
          <ClientEmptyList />
        ) : (
          <SectionList
            stickySectionHeadersEnabled
            sections={clientSectionList}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.clientListContentContainerStyle}
            renderItem={({ item }) => <ClientCard {...item} />}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderSectionHeader={({ section }) => (
              <SectionHeader {...section} />
            )}
            ListEmptyComponent={() => <ClientEmptyList />}
          />
        )}

        {clients.length > 0 && (
          <Button style={styles.absoluteButton}>
            <Plus size={24} color={theme.colors.background} />
          </Button>
        )}
      </Layout>
    </SafeAreaView>
  );
};
