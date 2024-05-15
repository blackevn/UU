interface CardProps {
    image: string;
    title: string;
    text: string;
    seller: string;
    rating: string;
    price: string;
    condition: string;
    buttonText: string;
  }
  
  const Card: React.FC<CardProps> = ({
    image,
    title,
    text,
    seller,
    rating,
    price,
    condition,
    buttonText,
  }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{text}</p>
          <div className="flex items-center mb-2">
            <p className="text-sm font-medium mr-2">{seller}</p>
            <p className="text-sm text-gray-700">{rating}</p>
          </div>
          <p className="text-lg font-medium mb-2">${price}</p>
          <div className="flex items-center">
            <p className="text-sm mr-2">{condition}</p>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-700">{buttonText}</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  