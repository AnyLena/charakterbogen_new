import "../../../styles/splittermond/box-meister.css";

const Staerken = ({ staerken }) => {
  return (
    <>
     
      <h2>Stärken</h2>
      {staerken.map((item, index) => (
        
          <div className="box-meister" key={index}>
            <h3>{item.staerkeName}</h3>
            <p className="subtext">
            </p>
            <p className="description">{item.staerkeWirkung}</p>
          </div>
        
      ))}
    </>
  );
};

export default Staerken;
