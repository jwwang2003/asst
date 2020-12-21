import * as React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.css';

function App() {
  
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link className="navbar-item" to="/library" style={{ textDecoration: 'none' }}>
            <h3>Library</h3>
            <LibraryIcon/>
          </Link>
          <Link className="navbar-item" to="/bookmarked" style={{ textDecoration: 'none' }}>
            <h3>Bookmarked</h3>
            <BookmarkedIcon/>
          </Link>
          <Link className="navbar-item" to="/calendar" style={{ textDecoration: 'none' }}>
            <h3>Calendar</h3>
            <CalendarIcon/>
          </Link>
          <Link className="navbar-item" to="/journal" style={{ textDecoration: 'none' }}>
            <h3>Journal</h3>
            <JournalIcon/>
          </Link>
          <Link className="navbar-item" to="/settings" style={{ textDecoration: 'none' }}>
            <h3>Settings</h3>
            <SettingsIcon/>
          </Link>
        </nav>
        <div className="content">
          <Switch>
            <Route path="/library">
              <h1>Library</h1>
            </Route>
            <Route path="/bookmarked">
              <h1>Bookmarked</h1>
            </Route>
            <Route path="/calendar">
              <h1>Calendar</h1>
            </Route>
            <Route path="/journal">
              <h1>Journal</h1>
            </Route>
            <Route path="/settings">
              <h1>Settings</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function LibraryIcon(){
  return(
    <> 
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        width="48px" 
        height="48px">
        <path d="M0 0h24v24H0z"
          fill="none"/>
        <path 
          fill="currentColor"
          className="svgFill"
          d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
      </svg>
    </>
  )
}

function BookmarkedIcon(){
  return(
    <>
      <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"  
        width="48px" 
        height="48px">
        <path d="M0 0h24v24H0V0z" 
          fill="none"/>
        <path fill="currentColor"
          className="svgFill"
          d="M19 1H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2zm0 14.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10v12.97z"/><path d="M5 19.97l5-2.15 5 2.15V7H5z" opacity=".3"/>
      </svg>
    </>
  )
}

function CalendarIcon(){
  return(
    <>
      <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="48px" 
        height="48px">
        <path d="M0 0h24v24H0V0z" 
          fill="none"/>
        <path fill="currentColor"
          className="svgFill"
          d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z"/>
        <path d="M4 5.01h16V8H4z" 
          opacity=".3"/>
      </svg>
    </>
  )
}

function JournalIcon(){
  return(
    <>
      <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="white" 
        width="48px" 
        height="48px">
        <path d="M0 0h24v24H0V0z" 
          fill="none"/>
        <path fill="currentColor"
          className="svgFill"
          d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"/>
      </svg>
    </>
  )
}

function SettingsIcon(){
  return(
    <>
      <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="white" 
        width="48px" 
        height="48px">
        <path d="M0 0h24v24H0V0z" 
          fill="none"/>
        <path d="M19.28 8.6l-.7-1.21-1.27.51-1.06.43-.91-.7c-.39-.3-.8-.54-1.23-.71l-1.06-.43-.16-1.13L12.7 4h-1.4l-.19 1.35-.16 1.13-1.06.44c-.41.17-.82.41-1.25.73l-.9.68-1.05-.42-1.27-.52-.7 1.21 1.08.84.89.7-.14 1.13c-.03.3-.05.53-.05.73s.02.43.05.73l.14 1.13-.89.7-1.08.84.7 1.21 1.27-.51 1.06-.43.91.7c.39.3.8.54 1.23.71l1.06.43.16 1.13.19 1.36h1.39l.19-1.35.16-1.13 1.06-.43c.41-.17.82-.41 1.25-.73l.9-.68 1.04.42 1.27.51.7-1.21-1.08-.84-.89-.7.14-1.13c.04-.31.05-.52.05-.73 0-.21-.02-.43-.05-.73l-.14-1.13.89-.7 1.1-.84zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" opacity=".3"/>
        <path fill="currentColor"
          className="svgFill"
          d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
      </svg>
    </>
  )
}

export default App;