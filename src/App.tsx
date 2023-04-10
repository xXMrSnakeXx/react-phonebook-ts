import { Title } from "./App.styled";
import { ChangeEvent, Component } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IContact, IContactForm, IState } from "./types";
import List from "./helpers/List";
import ContactsListItem from "./components/ContactsLIstItem/ContactsListItem";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";

class App extends Component {
  state: IState = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (data: IContactForm) => {
    const { contacts } = this.state;
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      return toast.error(`Name: ${data.name} is already in phonebook`);
    } else if (contacts.find((contact) => contact.number === data.number)) {
      return toast.error(`Number: ${data.number} is already in phonebook`);
    }
    const newContact = {
      id: nanoid(4),
      name: data.name,
      number: data.number,
    };
    this.setState((prevState: any) => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  removeContact = (id: string) => {
    this.setState((prevState: any) => ({
      contacts: prevState.contacts.filter(
        (contact: IContact) => contact.id !== id
      ),
    }));
  };
  changeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: e.target.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm onSubmitData={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <List
          items={this.getVisibleContacts()}
          renderItem={(contact: IContact) => (
            <ContactsListItem
              contact={contact}
              key={contact.id}
              handleRemove={this.removeContact}
            />
          )}
        />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </>
    );
  }
}

export default App;
