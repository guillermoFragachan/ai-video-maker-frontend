import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Menu } from 'primereact/menu';

export function Sidebar() {
  return (
    <div style={styles.sidebarContainer}>
      {/* Top Section with Icons and Search */}
      <div style={styles.topSection}>
        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <span className="p-input-icon-left">
            <i className="pi pi-search" style={{ color: 'white' }}/>
          </span>

            <InputText placeholder="Search..." style={styles.searchInput} />
        </div>

        {/* New Conversation Icon */}
        <Button icon="pi pi-plus" className="p-button-rounded p-button-info" style={styles.newConversationIcon} />
      </div>

      {/* Conversation List */}
      <div style={styles.conversationList}>
        <div style={styles.conversationRow}>Conversation 1</div>
        <div style={styles.conversationRow}>Conversation 2</div>
        <div style={styles.conversationRow}>Conversation 3</div>
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
