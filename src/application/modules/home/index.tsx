import React, { useEffect, useMemo, useState } from "react";
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
import { AddClientModal } from "./components/add-client-modal";
import { useModalize } from "react-native-modalize";
import AwesomeAlert from "react-native-awesome-alerts";
import * as Calendar from "expo-calendar";

export const Home = () => {
  const { styles, theme } = useStyles(stylesheet);
  const { clients, deleteClient } = useClient();

  const {
    ref: addClientModalRef,
    open: openAddClientModal,
    close: closeAddClientModal,
  } = useModalize();

  const [searchValue, setSearchValue] = useState("");
  const [selectedClientId, setSelectedClientId] = useState<string>();
  const [showDeleteClientAlert, setShowDeleteClientAlert] = useState(false);

  const clientSectionList = useMemo(
    () =>
      groupClientsByFirstLetter(
        searchValue.length > 0
          ? clients.filter((client) =>
              client.name.toLowerCase().includes(searchValue.toLowerCase())
            )
          : clients
      ),
    [clients, searchValue]
  );

  const handleEditClient = (clientId: string) => {
    setSelectedClientId(clientId);
    openAddClientModal();
  };

  const handleDeleteClient = (clientId: string) => {
    setSelectedClientId(clientId);
    setShowDeleteClientAlert(true);
  };

  const handleCloseAddClientModal = () => {
    setSelectedClientId(undefined);
    closeAddClientModal();
  };

  (async () => {
    const { status } = await Calendar.requestCalendarPermissionsAsync();

    const calendarId = await Calendar.createCalendarAsync({
      title: "Eventos Expo",
      color: "#2196F3",
      entityType: Calendar.EntityTypes.EVENT,
      source: { type: Calendar.SourceType.LOCAL, name: "local" },
      name: "Eventos Mensais",
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });

    const startDate = new Date(Date.now());
    startDate.setMinutes(1);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

    const eventId = await Calendar.createEventAsync(calendarId, {
      title: "Título do evento",
      notes: "Notas do evento",
      startDate,
      endDate,
      timeZone: "America/Sao_Paulo",
      recurrenceRule: {
        frequency: Calendar.Frequency.MONTHLY,
        interval: 1,
      },
    });

    console.log("Evento mensal criado com ID:", eventId);
  })();

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
          <ClientEmptyList onPressAddClientModal={openAddClientModal} />
        ) : (
          <SectionList
            stickySectionHeadersEnabled
            sections={clientSectionList}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.clientListContentContainerStyle}
            renderItem={({ item }) => (
              <ClientCard
                client={item}
                onEdit={(clientId) => handleEditClient(clientId)}
                onDelete={(clientId) => handleDeleteClient(clientId)}
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderSectionHeader={({ section }) => (
              <SectionHeader {...section} />
            )}
          />
        )}

        {clients.length > 0 && (
          <Button
            style={styles.absoluteButton}
            onPress={() => openAddClientModal()}
          >
            <Plus size={24} color={theme.colors.background} />
          </Button>
        )}
      </Layout>

      <AddClientModal
        ref={addClientModalRef}
        clientId={selectedClientId}
        onClose={handleCloseAddClientModal}
      />

      <AwesomeAlert
        show={showDeleteClientAlert}
        showProgress={false}
        title="Confirmação"
        message="Essa ação é irreversível. Tem certeza que deseja excluir definitivamente este cliente?"
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancelar"
        confirmText="Continuar"
        confirmButtonColor={theme.colors.alert}
        onConfirmPressed={() => {
          deleteClient(selectedClientId);
          setSelectedClientId(undefined);
          setShowDeleteClientAlert(false);
        }}
        cancelButtonColor={`${theme.colors.typography}60`}
        onCancelPressed={() => setShowDeleteClientAlert(false)}
      />
    </SafeAreaView>
  );
};
