import { useState } from "react";
import { IClient } from "../models/Client";
import { useClientStore } from "../stores/useClientStore";
import uuid from "react-native-uuid";
import { Toast } from "toastify-react-native";

export const useClient = () => {
  const { clients, setClients } = useClientStore();
  const [isLoading, setIsLoading] = useState(false);

  const addClient = (data: IClient) => {
    if (isLoading) return;

    const clientIsExists = clients.filter(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (clientIsExists.length > 0) {
      Toast.error("Já existe um cliente cadastrado com este nome!");
      return;
    }

    setIsLoading(true);

    const client = { ...data, id: uuid.v4(), createdAt: new Date().getTime() };
    setClients([...clients, client]);

    setIsLoading(false);
    Toast.success("Cliente cadastrado com sucesso!");
  };

  const updateClient = (id: string, data: IClient) => {
    if (isLoading) return;
    setIsLoading(true);

    const updatedClient = { ...data, updatedAt: new Date().getTime() };
    setClients(
      clients.map((client) =>
        client.id === id ? { ...client, ...updatedClient } : client
      )
    );

    setIsLoading(false);
    Toast.success("Cliente atualizado com sucesso!");
  };

  const deleteClient = (id: string) => {
    if (isLoading) return;
    setIsLoading(true);

    setClients(clients.filter((client) => client.id !== id));

    setIsLoading(false);
    Toast.success("Cliente excluído com sucesso!");
  };

  return {
    isLoading,
    clients,
    setClients,
    addClient,
    updateClient,
    deleteClient,
  };
};
