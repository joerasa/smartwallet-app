import React from 'react'
import Radium from 'radium'

import {
  EtherBalance,
  TabContainer,
  HalfScreenContainer
} from './ui'

import {List, Divider, ListItem, TextField, RaisedButton} from 'material-ui'
import {Block} from '../../structure'
import {Loading, Error} from '../../common'
import NavigationArrowUp from 'material-ui/svg-icons/navigation/arrow-upward'

const STYLES = {
  headItem: {
    width: '100%',
    fontSize: '24px'
  },
  divider: {
    marginLeft: '16px'
  },
  sendBlock: {
    marginLeft: '72px'
  },
  btnSend: {
    width: '90%',
    marginTop: '16px'
  },
  listItem: {
    padding: '16px 0px 0px 72px'
  }
}

@Radium
export default class EtherSend extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    ether: React.PropTypes.object,
    updateField: React.PropTypes.func,
    wallet: React.PropTypes.object,
    sendEther: React.PropTypes.func
  }

  render() {
    const {receiverAddress, amountSend, loading, errorMsg} = this.props.wallet
    let content
    if (loading) {
      content = (
        <Block style={{marginTop: '20px'}}>
          <Loading />
        </Block>)
    } else if (errorMsg) {
      content = <Error message={errorMsg} />
    } else {
      content = (
        <List>
          <ListItem
            disabled
            style={STYLES.headItem}
            primaryText={'Send Ether'} />
          <Divider
            style={STYLES.divider} />
          <ListItem
            style={STYLES.listItem}
            disabled
            leftIcon={<NavigationArrowUp
              color={'#b3c90f'}
              style={{top: '32px', left: '16px'}} />}
            insetChildren>
            <TextField
              onChange={(e) =>
                this.props.updateField(e.target.value, 'receiverAddress')
              }
              fullWidth
              floatingLabelText="Add Wallet Address" />
          </ListItem>
          <Block style={STYLES.sendBlock}>
            <TextField
              onChange={(e) =>
                this.props.updateField(e.target.value, 'amountSend')
              }
              fullWidth
              floatingLabelText="Amount" />
            <TextField
              fullWidth
              floatingLabelText="Note" />
            <RaisedButton
              disabled={!receiverAddress || !amountSend}
              secondary
              style={STYLES.btnSend}
              label="SEND"
              onClick={this.props.sendEther} />
          </Block>
        </List>
      )
    }
    return (
      <TabContainer>
        <EtherBalance
          amount={this.props.wallet.amount}
          currency="eth"
          currencyPrice={this.props.ether.ether.price} />
        <HalfScreenContainer>
          {content}
        </HalfScreenContainer>
      </TabContainer>
    )
  }
}
