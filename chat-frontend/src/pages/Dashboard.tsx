import { useState } from 'react';
import Avatar from '../components/Avatar';
import Speedometer from '../components/Speedometer';
import Upload from '../components/Upload';
import { Button, Card, CardBody, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

const Dashboard = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const languages = ["English", "Spanish", "French", "German", "Chinese"];

  const handleDownloadPDF = () => {
    // ... (keep existing PDF download logic)
    /*
    const doc = new jsPDF();
    doc.text("Chatbot History", 10, 10);
    // Add more content to the PDF as needed
    doc.save("chatbot_history.pdf");
    */
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-1">
            <Avatar />
          </div>
          <div className="md:col-span-2">
            <Speedometer />
          </div>
        </div>
        <div className="mb-8">
          <Card>
            <CardBody>
              <Upload />
            </CardBody>
          </Card>
        </div>
        <div className="flex justify-center items-center space-x-4 flex-wrap">
          <span className="text-gray-700 mr-2">Select language:</span>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">
                {selectedLanguage}
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Language selection" 
              onAction={(key) => setSelectedLanguage(key.toString())}
            >
              {languages.map((lang) => (
                <DropdownItem key={lang}>{lang}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Button 
            variant="bordered"
            color="primary"
            onClick={handleDownloadPDF}
            className="font-semibold px-8 py-6 text-lg"
            size="lg"
          >
            Download Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;