import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header'; 
import ListingViews from './ListingViews';
import Sales from './Sales';

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col">
        <ListingViews />
        </div>
        <div className="flex-1 flex flex-col">
        <Sales />
        </div>


      </div>
    </div>
  );
};

export default MainLayout;
