const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100px",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  ></div>
);

const BODY = (
    <div
      style={{
        width: "10px",
        height: "100px",
        background: 'black',
        position: "absolute",
        top: "120px",
        right: "0",
      }}
    ></div>
  );

export const HungmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "250px", background: "black" }}
      ></div>
    </div>
  );
};
