import React from "react";

import "./Intervalo.css";

import Card from "../Card/Card";

export default function Intervalo() {
  return (
    <Card title="Intervalor de Números" red>
      <div className="intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={0} readOnly />
        </span>
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={10} readOnly />
        </span>
      </div>
    </Card>
  );
}
