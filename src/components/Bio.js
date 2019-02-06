import React from 'react'
import { Container, Divider, Grid, Header, Icon, Item } from 'semantic-ui-react'
import AddContactInfo from './AddContactInfo'

const Bio = ({ texts }) => (
  <Grid style={{ fontSize: 'medium' }} textAlign='center' columns='equal'>
    <Grid.Column verticalAlign='middle'>
      <Header as='h1'>Markus Kuosmanen</Header>
      <Header as='h3'>{texts[0]}</Header>
      <Container>{texts[1]}</Container>
      <Divider hidden />
      <Item as='a' href='http://travel-tracking.herokuapp.com/'>
        <Icon name='plane' size='huge' />
        <Container>{texts[2]}</Container>
        {texts[3]}
      </Item>
    </Grid.Column>
    <Grid.Column>
      <AddContactInfo />
    </Grid.Column>
  </Grid>
)

export default Bio
