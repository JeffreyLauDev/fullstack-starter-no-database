import React, { useEffect, useState } from "react";
import Page from "src/components/Page";
import dataProvider from "src/dataProvider";

import { Container } from "@material-ui/core";
import { useErrorNotification } from "src/context/MessageBoxContext";
export default () => {
  const [data, setData] = useState({});
  const errorNotification = useErrorNotification();
  useEffect(() => {
    dataProvider
      .getData("templates")
      .then((response) => {
        console.log("success", response);
        if (response !== undefined) {
          setData(response ? response.data.data : []);
        }
      })
      .catch(errorNotification);
  }, []);
  return (
    <Page title="Account">
      <Container maxWidth="lg">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Container>
    </Page>
  );
};
