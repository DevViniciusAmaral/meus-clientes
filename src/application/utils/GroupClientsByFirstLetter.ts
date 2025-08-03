import { IClient } from "../models/Client";

export interface IClientList {
  title: string;
  data: IClient[];
}

export const groupClientsByFirstLetter = (clients: IClient[]) => {
  const grouped: Record<string, IClient[]> = {};

  for (const client of clients) {
    const firstLetter = client.name.charAt(0).toUpperCase();
    if (!grouped[firstLetter]) grouped[firstLetter] = [];
    grouped[firstLetter].push(client);
  }

  const result: IClientList[] = Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([title, data]) => ({
      title,
      data: data.sort((a, b) => a.name.localeCompare(b.name)),
    }));

  return result;
};
