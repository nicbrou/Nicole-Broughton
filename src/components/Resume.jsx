import React from "react";
import { Container, Header, Grid } from "semantic-ui-react";
import { Document } from "react-pdf/dist/entry.webpack";
import { Page } from "react-pdf";
import NBResume from "../assets/NicoleBroughtonResume.pdf";

const Resume = () => {
  return (
    <Container fluid>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8}>
            <Header className="header" as="h1">
              Résumé
            </Header>
            <div name="resume">
              <Document file={NBResume}>
                <Page pageNumber={1} />
              </Document>
            </div>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default Resume;
