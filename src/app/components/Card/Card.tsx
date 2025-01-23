const Card: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex justify-center rounded border border-blue-500 bg-blue-300 p-2 text-black shadow-sm">
      <p>{title}</p>
    </div>
  );
};

export default Card;
