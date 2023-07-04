import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import BookLists from './Components/BookLists';
import BookDetails from './Components/BookDetails';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Register from './Components/Register';


// Initialze the client
const queryClient = new QueryClient();

function App() {
    return ( <
        QueryClientProvider client = { queryClient } >
        <
        Router >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < BookLists / > }
        /> <
        Route path = "/books/:id"
        element = { < BookDetails / > }
        /> <
        Route path = "/cart"
        element = { < Cart / > }
        /> <
        Route path = "/checkout"
        element = { < Checkout / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/register"
        element = { < Register / > }
        /> <
        /Routes> <
        /Router> <
        /QueryClientProvider>
    );
}
export default App;