import './App.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactsList from "./components/ContactsList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter"

class App extends Component {
  state = {
    contacts: [{id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56'},
               {id: uuidv4(), name: 'Hermione Kline', number: '443-89-12'},
               {id: uuidv4(), name: 'Eden Clements', number: '645-17-79'},
               { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' }
    ],
    filter: ''
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

   addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number
    };
    const contactNames = this.state.contacts.map(contact => contact.name);
    this.renderContacts(contactNames, contact.name, contact);
   };
  
  renderContacts = (contactsList, contactName, newContact) => {
    if (contactsList.includes(contactName)) {
      alert(`${contactName} is already in contacts`)
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
      }));
    };
  };
    
   getFilteredContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    })
   };
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={ this.changeFilter }/>
        <ContactsList
          shownContacts={this.getFilteredContacts}
          onClick={  this.deleteContact}/>
      </>
     )
  };
};

export default App;
