import React, { useState } from "react";
import { Card, CardBody, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Upload from "../components/Upload";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const languages = [
  { key: "en", name: "English" },
  { key: "es", name: "Spanish" },
  { key: "fr", name: "French" },
  { key: "de", name: "German" },
  { key: "it", name: "Italian" },
];

export default function ImageAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulating analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisResult("This is a placeholder for the image analysis result.");
    }, 3000);
  };

  const handleDownloadPDF = () => {
    // Implement PDF download logic here
    console.log(`Downloading PDF in ${selectedLanguage.name}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Image Analysis</h1>
      
      <Card className="mb-6">
        <CardBody>
          <Upload />
        </CardBody>
      </Card>

      <div className="flex justify-between mb-6">
        <Button
          color="primary"
          onClick={handleAnalyze}
          disabled={isAnalyzing}
        >
          {isAnalyzing ? "Analyzing..." : "Run Analysis"}
        </Button>

        <div className="flex items-center">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="capitalize"
              >
                {selectedLanguage.name}
                <ChevronDownIcon className="h-4 w-4 ml-2" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language selection"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={new Set([selectedLanguage.key])}
              onSelectionChange={(keys) => {
                const selectedKey = Array.from(keys)[0] as string;
                setSelectedLanguage(languages.find(lang => lang.key === selectedKey) || languages[0]);
              }}
            >
              {languages.map((language) => (
                <DropdownItem key={language.key}>{language.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Button
            color="secondary"
            onClick={handleDownloadPDF}
            className="ml-2"
          >
            Download as PDF
          </Button>
        </div>
      </div>

      <Card>
        <CardBody>
          {isAnalyzing ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="min-h-[10rem] p-4 bg-gray-100 rounded-lg">
              {analysisResult || "Analysis results will appear here."}
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}