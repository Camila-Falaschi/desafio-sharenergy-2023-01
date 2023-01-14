export default function ClientsList() {
  return (
    <>
      <section>
        <form>
          <label htmlFor="client-name">
            Name
            <input type="text" id="client-name" name="client-name" required />
          </label>
          <label htmlFor="phone-number">
            Phone Number
            <input type="text" id="phone-number" name="phone-number" required />
          </label>
          <label htmlFor="address">
            Address
            <input type="text" id="address" name="address" required />
          </label>
          <label htmlFor="CPF">
            CPF
            <input type="text" id="CPF" name="CPF" required />
          </label>
          <button type="submit">Save</button>
          <button type="button">Cancel</button>
        </form>
      </section>
    </>
  )
}