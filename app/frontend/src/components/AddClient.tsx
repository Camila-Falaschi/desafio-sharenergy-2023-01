import { useContext, useState } from "react";
import AppContext, { PropsAppContext } from "../AppContext/ProviderContext";
import { requestAddClient } from "../services/request";
import "./styles/AddClient.css";

export default function AddClient() {
  const { setClientListPageComponent } = useContext(AppContext) as PropsAppContext;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSaveButton = async () => {
    await requestAddClient('/add-client', { name, phone, address, cpf });
  }

  const handleCancelButton = () => {
    setName('');
    setPhone('');
    setAddress('');
    setCpf('');
    setClientListPageComponent('')
  }

  return (
    <>
      <section>
        <form className="form-container">
          <label htmlFor="client-name">
            Name
            <input type="text" id="client-name" value={name} onChange={({ target }) => { setName(target.value) }} required />
          </label>
          <label htmlFor="phone-number">
            Phone Number
            <input type="text" id="phone-number" value={phone} onChange={({ target }) => { setPhone(target.value) }} required />
          </label>
          <label htmlFor="address">
            Address
            <input type="text" id="address" value={address} onChange={({ target }) => { setAddress(target.value) }} required />
          </label>
          <label htmlFor="CPF">
            CPF
            <input type="text" id="CPF" value={cpf} onChange={({ target }) => { setCpf(target.value) }} required />
          </label>
          <div className="button-container">
            <button type="submit" className="button save" onClick={ () => handleSaveButton() }>Save</button>
            <button type="button" className="button cancel" onClick={ () => handleCancelButton() }>Cancel</button>
          </div>
        </form>
      </section>
    </>
  )
}