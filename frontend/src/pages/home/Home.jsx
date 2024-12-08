import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import MessageContainer from '../../components/messages/MessageContainer.jsx';

const Home = () => {
    return (
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
            <Sidebar />
            <Divider />
            <MessageContainer />
        </div>
    );
}

export default Home

const Divider = () => {
    return <div className="border-r border-gray-700 h-full" />;
};