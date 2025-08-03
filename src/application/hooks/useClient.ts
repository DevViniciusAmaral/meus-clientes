import { IClient } from "../models/Client";
import { useClientStore } from "../stores/useClientStore";
import uuid from "react-native-uuid";

export const useClient = () => {
  const { clients, setClients } = useClientStore();

  const addClient = (data: IClient) => {
    const client = { ...data, id: uuid.v4(), createdAt: new Date().getTime() };
    setClients([...clients, client]);
  };

  const updateClient = (id: string, data: IClient) => {
    const updatedClient = { ...data, updatedAt: new Date().getTime() };
    setClients(
      clients.map((client) =>
        client.id === id ? { ...client, ...updatedClient } : client
      )
    );
  };

  const deleteClient = (id: string) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  return { clients, setClients, addClient, updateClient, deleteClient };
};
