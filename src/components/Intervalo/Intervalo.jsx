import React from "react";
import { connect } from "react-redux";
import "./Intervalo.css";

import Card from "../Card/Card";
import { alteraNumeroMinimo, alteraNumeroMaximo } from "../../store/actions/numerosActions";

function Intervalo(props) {
  const { min, max } = props;

  return (
    <Card title="Intervalor de Números" red>
      <div className="intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)} />
        </span>
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)} />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      //action creator => actions
      const action = alteraNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      const action = alteraNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);
