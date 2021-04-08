import React from "react";
import axios from "axios";
import Button from "components/CustomButtons/Button.js";

class RelayF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
			clon:"white",
			cloff: "white"
    };
  }
  componentDidMount() {
    axios
      .get("http://192.168.8.133:8082/api/relays/6052e44860ab3d1d88673fb7")
      .then(response => {
        const newState = response.data.R1;
        this.setState({ result: newState });
			//	console.log(newState);
				if (newState == "OFF"){
					this.setState({cloff: "info"});
					this.setState({clon: "white"})
				}
				if (newState == "ON"){
					this.setState({cloff: "white"});
					this.setState({clon: "info"})
				}
				
				
      })
      .catch(err => {
        console.log("oppps", err);
      });
  }

offHandler = () => {

var data = '{"R9":"OFF"}' ;

var config = {
  method: 'put',
  url: 'http://192.168.8.133:8082/api/relays/6052e44860ab3d1d88673fb7',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};
console.log("offhandler");
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

		axios
		.get("http://192.168.8.133:8082/api/relays/6052e44860ab3d1d88673fb7")
		.then(response => {
			const newState = response.data.R9;
			this.setState({ result: newState });
			this.setState({ cloff: "info"});
			this.setState({ clon: "white"});
			// console.log(newState)
		})
		.catch(err => {
			console.log("oppps", err);
		});



}

onHandler = () => {

	var data = '{"R9":"ON"}' ;
	
	var config = {
		method: 'put',
		url: 'http://192.168.8.133:8082/api/relays/6052e44860ab3d1d88673fb7',
		headers: { 
			'Content-Type': 'application/json'
		},
		data : data
	};
	console.log("onhandler");

	axios(config)
	.then(function (response) {
		console.log(JSON.stringify(response.data));
	})
	.catch(function (error) {
		console.log(error);
	});
	
			axios
			.get("http://192.168.8.133:8082/api/relays/6052e44860ab3d1d88673fb7")
			.then(response => {
				const newState = response.data.R9;
				this.setState({ result: newState });
				this.setState({ cloff: "white"});
				this.setState({ clon: "info"});
				// console.log(newState)
			})
			.catch(err => {
				console.log("oppps", err);
			});
	
	
	
	}

  // convertHandler = () => {
  //   if (this.state.fromCurrency !== this.state.toCurrency) {
  //     axios
  //       .get(
  //         `http://api.openrates.io/latest?base=${
  //           this.state.fromCurrency
  //         }&symbols=${this.state.toCurrency}`
  //       )
  //       .then(response => {
  //         const result =
  //           this.state.amount * response.data.rates[this.state.toCurrency];
  //         this.setState({ result: result.toFixed(5) });
  //       })
  //       .catch(error => {
  //         console.log("Opps", error.message);
  //       });
  //   } else {
  //     this.setState({ result: "You cant convert the same currency!" });
  //   }
  // };
  // selectHandler = event => {
  //   if (event.target.name === "from") {
  //     this.setState({ fromCurrency: event.target.value });
  //   } else {
  //     if (event.target.name === "to") {
  //       this.setState({ toCurrency: event.target.value });
  //     }
  //   }
  // };
  render() {
		
		const {relay} =this.props;
		var offButton =this.state.cloff;
		var onButton =this.state.clon;

	//	console.log(`offButton ${offButton} `);
	//	console.log(`onButton ${onButton} `);
		
		// console.log(offButton);
		// console.log("........");
		// console.log("OnButton" + onbutton);
		// console.log(onButton);
		

    return (
      <div>
			<Button onClick={this.onHandler} color ={onButton} size = "lg" round>On</Button>
			<Button onClick={this.offHandler} color ={offButton} size = "lg" round>Off</Button>
       
      </div>
      
    );
  }
}
export default RelayF;