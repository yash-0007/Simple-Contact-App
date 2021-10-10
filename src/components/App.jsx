import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    // console.log(contact);
    setContacts([...contacts, { id: v4(), ...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const retrivecontacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrivecontacts) setContacts(retrivecontacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <Header />
      <div className="container">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <ContactList
                  {...props}
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              )}
            />
            <Route
              path="/add"
              render={(props) => (
                <AddContact {...props} addContactHandler={addContactHandler} />
              )}
            />
            <Route path="/contact/:id" component={ContactDetail} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
