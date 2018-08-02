import React from "react";
import { connectContext } from "react-connect-context";
import { Context } from "../../context";
import Layout from "../Layout";
import { Header, Input, Grid, Table } from "semantic-ui-react";

class Challenges extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Input
          size="small"
          icon="search"
          placeholder="Search challenges..."
          fluid
        />
        <br />
        <Grid columns={3} divided stackable>
          <Grid.Column>
            <Header
              as="h3"
              content="Pirkkola challenge"
              subheader="Kaj Laxström"
              dividing
              textAlign="center"
            />
            <Table color="pink" inverted unstackable="true">
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Muscle up</Table.Cell>
                  <Table.Cell>5</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Straight bar dip</Table.Cell>
                  <Table.Cell>10</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Pull up</Table.Cell>
                  <Table.Cell>10</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Push up</Table.Cell>
                  <Table.Cell>10</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default connectContext(Context)(Challenges);
