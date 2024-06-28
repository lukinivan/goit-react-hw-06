import { Container, ContactForm, SearchBox, ContactList } from "./components";

const App = () => {
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Container>
    </>
  );
};

export default App;
