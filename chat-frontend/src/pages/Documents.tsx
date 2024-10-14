import Upload from '../components/Upload';

const Documents = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Documents</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Upload />
        </div>
      </div>
    </div>
  );
};

export default Documents;