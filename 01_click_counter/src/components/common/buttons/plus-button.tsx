const PlusButton: React.FC = () => {
  const handleClick = () => {
    console.log("plus button clicked");
  };

  return (
    // <button className='button--plus' onClick={handleClick}>
    <button
      className='button--plus'
      onClick={() => {
        handleClick();
      }}
    >
      +
    </button>
  );
};

export default PlusButton;
