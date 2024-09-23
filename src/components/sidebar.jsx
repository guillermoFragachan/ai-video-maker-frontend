import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


export function Sidebar() {
    const[searchTerm, setSearchTerm] = useState('');

    const [conversations, setConversations] = useState([]);

    // Triggered when the "New Conversation" button is clicked
    const handleNewConversation = () => {
      const newConversation = ` Conversation ${conversations.length + 1}`;
      setConversations([...conversations, newConversation]);
      console.log('New conversation triggered:', newConversation);  
      };

    // Handle search input change
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
      // console.log('Searching for:', e.target);
     };
    
    const filteredConversations = conversations.filter(conversation =>
      conversation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.sidebarContainer}>
      {/* Top Section with Icons and Search */}
      <div style={styles.topSection}>

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <span className="p-input-icon-left">
            <i className="pi pi-search" style={{ color: 'white' }}/>
          </span>

          <InputText
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={styles.searchInput}
          />
        </div>

          {/* New Conversation Icon */}
            <Button
          icon="pi pi-plus"
          className="p-button-rounded p-button-info"
          style={styles.newConversationIcon}
          onClick={handleNewConversation} // Click event for new conversation button
        />
      </div>

      {/* Conversation List */}
      <div style={styles.conversationList}>
        {filteredConversations.map((conversation, index)=>{
          return  <div key={index} style={styles.conversationRow}> {conversation}</div>
        })}

        {/* Add more conversations as needed */}
      </div>
    </div>
  );
}

// Styles for the sidebar and elements
const styles = {
  sidebarContainer: {
    width: '20%', // 20% of the screen width
    height: '100vh', // Full height of the screen
    backgroundColor: '#444', // dark background
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    borderRight: '1px solid #ddd', // Border to separate sidebar
  },
  topSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
  },
  searchContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 'calc(100% - 50px)', // Ensures the search bar takes the rest of the space next to the button
  },
  searchInput: {
    width: '100%',
    marginLeft: "1.5em",
    marginRight: "0.5em",
  },
  newConversationIcon: {
    flexShrink: 0, // Prevent icon from shrinking
  },
  conversationList: {
    flex: 1,
    overflowY: 'auto', // Scrollable list if there are too many conversations
  },
  conversationRow: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    cursor: 'pointer',
    color: 'white', // Text color changed to white
    marginBottom: '5px',
    borderRadius: '4px',
  },
};
