const AccordionItem = ({ setShowItem, showItem, number, question, answer }) => {
  return (
    <div>
      <p onClick={() => setShowItem(number)}>{question}</p>
      {showItem === number && <p>{answer}</p>}
    </div>
  );
};

export default AccordionItem
