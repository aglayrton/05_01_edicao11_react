import React, {useEffect, useState} from "react";
import { addContatos, getContatos } from "../features/contatoSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import Contatos from "../models/contatoModels";

const Page: React.FC = () => {
  const { data } = useAppSelector((state) => state.contato);

  console.log(data);
  
  const[nome, setNome] = useState("");
  const[email, setEmail] = useState("");
  const[telefone, setTelefone] = useState("");

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(getContatos())
  },[
    dispatch
  ])

  const handleSubmit = () => {
    const objeto : Contatos = {
      nome,
      email,
      telefone
    }
    dispatch(addContatos(objeto));
  };

  return (
    <>
    <input value={nome} onChange={e=>setNome(e.target.value)} placeholder="Nome"/>
    <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
    <input value={telefone} onChange={e=>setTelefone(e.target.value)} placeholder="Telefone"/>
    <button onClick={handleSubmit}>Enviar</button>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
            {data&&data.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
              </tr>
            ))}
            </tbody>
      </table>
    </>
  );
};

export default Page;
