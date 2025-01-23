import Card from '../Card';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 p-6">
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 rounded bg-gray-500 p-4 shadow">
          <h3>Column 1</h3>
          <Card title="Hola" />
          <button className="flex justify-center rounded border border-blue-800 bg-blue-600 p-2 text-black shadow-sm">
            <p>Add a card</p>
          </button>
        </div>
        <div className="flex flex-col gap-2 rounded bg-gray-500 p-4 shadow">
          <h3>Column 2</h3>
          <Card title="Hello" />
          <button className="flex justify-center rounded border border-blue-800 bg-blue-600 p-2 text-black shadow-sm">
            <p>Add a card</p>
          </button>
        </div>
        <div className="flex flex-col gap-2 rounded bg-gray-500 p-4 shadow">
          <h3>Column 3</h3>
          <Card title="Hi" />
          <button className="flex justify-center rounded border border-blue-800 bg-blue-600 p-2 text-black shadow-sm">
            <p>Add a card</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
