{
  /*Importa o react*/
}
import React from "react";
{
  /*Importa o Componente Button do Bootstrap*/
}
import { Button } from "react-bootstrap";
{
  /*Cria a função para aumentar a fonte*/
}
import IconeDiscorde from "../assets/discord.svg";
function ButtonDiscorde() {
  {
    /*Cria a função para abrir o link do convite do discord*/
  }
  discordeOpen = () => window.open("https://discord.gg/NjByxNR9uk");

  return (
    <div>
      {" "}
      {/*Inicio do Componente*/}
      <button
        onClick={() => discordeOpen()}
        id="discord"
        style={{ backgroundImage: `url(${IconeDiscorde})` }}
      />
      {/*Criar o Butão do Discord*/}
    </div>
  );
}

export default ButtonDiscorde;
