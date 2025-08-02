import React from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Layout } from "@/application/components/layout";
import { Text } from "@/application/components/base/text";

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Layout style={styles.container}>
      <Text size={50} weight="bold">
        Home
      </Text>
    </Layout>
  );
};
