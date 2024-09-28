import React from 'react';
import Avatar from '../components/Avatar';
import Speedometer from '../components/Speedometer';
import Upload from '../components/Upload';
import { Button } from "@nextui-org/react";
import jsPDF from 'jspdf';

const Dashboard = () => {
  const handleDownloadPDF = () => {
    const chatContent = document.querySelector('df-messenger')?.shadowRoot?.querySelector('.message-list-wrapper')?.textContent;
    
    if (chatContent) {
      const pdf = new jsPDF();
      
      // Add a title
      pdf.setFontSize(16);
      pdf.text('Chatbot History', 20, 20);
      
      // Add the chat content
      pdf.setFontSize(12);
      pdf.text(pdf.splitTextToSize(chatContent, 180), 10, 30);
      
      // Save the PDF
      pdf.save('chatbot_history.pdf');
    } else {
      alert('No chat history available to download.');
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center mt-8">Dashboard</h1>
      <Avatar />
      <Speedometer />
      <Upload />
      {/* <div className="flex justify-center mt-8">
        <Button 
          color="primary"
          onClick={handleDownloadPDF}
          className="font-semibold"
        >
          Download Chatbot History as PDF
        </Button>
      </div> */}
    </div>
  );
};

export default Dashboard;