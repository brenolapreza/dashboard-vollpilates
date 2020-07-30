import React from 'react';


class CardValor extends React.Component {

    state = {
        products: []
    };

    componentDidMount() {
        fetch('https://vollpilates.com.br/wp-json/wc/v1/orders?filter[posts_per_page]=-1&consumer_key=ck_9dd3ba58c6c5120ceb1de771d08038055da2cb27&consumer_secret=cs_a0bb9ce335fe159a9f9c30c7ebe079ace00bb55e')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res
                });
            });
    }
    render() {

        const somar = this.state.products.map((acumulado) => parseFloat(acumulado.total))
        const result = somar.reduce((soma, nota) => soma + nota, 0);
        const resultFixed = result.toLocaleString('pt-br', {minimumFractionDigits: 2});

        const refund = this.state.products.filter(valor => valor.status === "refunded")
        const refundMap = refund.map(refundNumber => parseFloat(refundNumber.total))
        const refundResult = refundMap.reduce((first, second) => first + second, 0)
        const refundFixed = refundResult.toLocaleString('pt-br', {minimumFractionDigits: 2});

        const complet = this.state.products.filter(valor => valor.status === "completed")
        const completMap = complet.map(completNumber => parseFloat(completNumber.total))
        const completResult = completMap.reduce((first, second) => first + second, 0)
        const completFixed = completResult.toLocaleString('pt-br', {minimumFractionDigits: 2});

        const pending = this.state.products.filter(valor => valor.status === "pending")
        const pendingMap = pending.map(pendingNumber => parseFloat(pendingNumber.total))
        const pendingResult = pendingMap.reduce((first, second) => first + second, 0)
        const pendingFixed = pendingResult.toLocaleString('pt-br', {minimumFractionDigits: 2});
        

        const cancel = this.state.products.filter(valor => valor.status === "cancelled")
        const cancelMap = cancel.map(cancelNumber => parseFloat(cancelNumber.total))
        const cancelResult = cancelMap.reduce((first, second) => first + second, 0)
        const cancelFixed = cancelResult.toLocaleString('pt-br', {minimumFractionDigits: 2});

        const process = this.state.products.filter(valor => valor.status === "processing")
        const processMap = process.map(processNumber => parseFloat(processNumber.total))
        const processResult = processMap.reduce((first, second) => first + second, 0)
        const processFixed = processResult.toLocaleString('pt-br', {minimumFractionDigits: 2});

        const hold = this.state.products.filter(valor => valor.status === "on-hold")
        const holdMap = hold.map(holdNumber => parseFloat(holdNumber.total))
        const holdResult = holdMap.reduce((first, second) => first + second, 0)
        const holdFixed = holdResult.toLocaleString('pt-br', {minimumFractionDigits: 2});

        return (
            <div>
                <ul>
                    <li><strong>VALOR TOTAL: R$ {resultFixed}</strong></li>
                    <li>QUANT. - CONCLUIDO: R$ {completFixed}</li>
                    <li>QUANT. - PROCESSANDO: R$ {processFixed}</li>
                    <li>QUANT. - EM ESPERA: R$ {holdFixed}</li>
                    <li>QUANT. - PENDENTE: R$ {pendingFixed}</li>
                    <li>QUANT. - CANCELADO: R$ {cancelFixed}</li>
                    <li>QUANT. - REEMBOLSADO: R$ {refundFixed}</li>
                    {console.log(this.state.products)}
                </ul>
            </div>
        );
    }
}
export default CardValor;