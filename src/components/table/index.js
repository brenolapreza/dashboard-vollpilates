import React from "react";
import { WrapperTable, List } from "./style";

class Table extends React.Component {
  state = {
    orders: [],
    products: [],
  };

  componentDidMount() {
    fetch(
      "https://vollpilates.com.br/wp-json/wc/v1/products?&filter[posts_per_page]=-1&filter[order]=asc&consumer_key=ck_9dd3ba58c6c5120ceb1de771d08038055da2cb27&consumer_secret=cs_a0bb9ce335fe159a9f9c30c7ebe079ace00bb55e"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          products: res,
        });
      });
  }
  render() {
    const quantVendidos = this.state.products.filter((nome) => nome.name);


    var quant = quantVendidos.slice(0);
    quant.sort(function (a, b) {
      return  b.total_sales - a.total_sales;
    });

    return (
      <WrapperTable>
        {console.log(quantVendidos)}
        <ul>
          {quant.map((outro) => (
            <li>{outro.name}</li>
          ))}
        </ul>
        <ul>
          {quant.map((outro) => (
            <li>{outro.total_sales}</li>
          ))}
        </ul>
      </WrapperTable>
    );
  }
}

export default Table;
