const CardExtend = (props) => {
  return (
    <div className="CardExtend">
      <h1>Main Card Component BIG</h1>
      {props.children}
    </div>
  );
};

CardExtend.TTitle = () => {
  return (
    <>
      <h1>First Fuction Of Card BIG</h1>
    </>
  );
};
CardExtend.Boody = () => {
  return (
    <>
      <h1>Body Fuction Of Card BIG</h1>
    </>
  );
};
CardExtend.Footers = () => {
  return (
    <>
      <h1>End Of Card Component</h1>
    </>
  );
};

export default CardExtend;
