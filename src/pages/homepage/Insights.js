import React from "react";
import { Component } from "react";
import "./homepage.css";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";

/*
Imports related to blockchain
*/
import Web3 from "web3";
import abi from "../../components/blockchain/ipfs_storage_abi";
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https:/kovan.infura.io/v3/def7370cf49d49d791b9df949986b9a0"
  )
);

class Insights extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    timeStamp: 0,
    ipfsRoot: "",
    openDialog: false
  };
  /*
    Function to retrieve ipfs root hash from smart contract
	*/
  async readRoot() {
    console.log(web3);
    const rootContract = new web3.eth.Contract(
      abi,
      "0x1d0a334994a361111a193b98e6548bf0e8395879"
    );
    let timeStamp = web3.utils.toHex(this.state.timeStamp);
    await rootContract.methods
      .getRoot(timeStamp)
      .call()
      .then(result => {
        console.log(result);
        this.setState({ ipfsRoot: result.rootHash });
        this.setState({ openDialog: true });
      })
      .catch(err => {
        console.log(err);
        this.setState({ ipfsRoot: "Error!" });
        this.setState({ openDialog: true });
      });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleDialogCLOSE() {
    this.setState({ openDialog: false });
  }

  render() {
    return (
      <div className="textBox">
        <div className="topText">Welcome to</div>
        <div className="bottomText">Insights</div>
        <div className="progressText">Work in progress</div>

        {/*Buttons and form to interact with the smart contract*/}
        <div style={{ alignContent: "center", marginTop: 20 }}>
          <Typography variant="h6" component="h6">
            Enter timestamp to check root hash. Try 1565752643.
          </Typography>
          <TextField
            autoFocus
            id="timestamp"
            label="Timestamp"
            type="text"
            onChange={this.handleChange("timeStamp")}
            margin="normal"
            variant="outlined"
          />
          <br />
          <Button
            style={{ marginTop: 10 }}
            onClick={() => this.readRoot()}
            variant="contained"
            color="primary"
          >
            Check
          </Button>
        </div>
        {/*//Pop-up dialog*/}
        <Dialog
          open={this.state.openDialog}
          onClose={() => this.handleDialogCLOSE()}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">
            {"IPFS root hash retrieved from the smart contract:"}
          </DialogTitle>
          <DialogContent>
            <Paper>
              <Typography variant="body1" color="textPrimary">
                {this.state.ipfsRoot}
              </Typography>
              <br />
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleDialogCLOSE()} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Insights;
