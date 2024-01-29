import { IoMdAdd } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa6";
import { useState } from "react";

function Mycard({ name, iconpre, iconnext }) {
  const btnstyl1 = {
    padding: "0 10px",
  };
  const btnstyle = {
    padding: "0 10px",
  };

  const [data, setData] = useState();
  const [values, setValues] = useState([]);
  function Handlepre() {
    alert("you cleck the button");
  }
  function Handlenext() {
    alert("you cleck the button");
  }

  function Handlesubmit() {
    data && setValues([...values, data]);
    setData(values);
    setData("");
  }

  return (
    <>
      <div
        style={{
          marginTop: "40px",
          border: "2px solid black",
          width: "100%",

          flexWrap: "wrap",
          backgroundColor: "#e7e7e7",
          borderRadius: "10px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
            fontSize: "40px",
            backgroundColor: "#e1c3c34a",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <span>{name}</span>
          <span>...</span>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              backgroundColor: "white",
            }}
          >
            {values &&
              values.map((data, id) => (
                <li
                  key={id}
                  style={{
                    display: "flex",
                    gap: "1rem",

                    alignItems: "center",
                  }}
                >
                  <span onClick={Handlepre} style={btnstyle}>
                    {iconpre}
                  </span>
                  {data}
                  <span style={btnstyl1} onClick={Handlenext}>
                    {iconnext}
                  </span>
                </li>
              ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",

            alignItems: "center",
            backgroundColor: "white",
            justifyContent: "center",
            marginTop: "20vh",
          }}
        >
          <span>
            <IoMdAdd
              style={{ color: "black", fontWeight: "bolder", fontSize: "35px" }}
            />
          </span>
          <input
            style={{
              padding: "13px 0px",
              fontSize: "20px",
              width: "100%",
              border: "none",
              marginRight: "25px",
            }}
            type="text"
            placeholder="Add another card"
            value={data}
            onChange={e => setData(e.target.value)}
            icon1={iconpre}
            icon={iconnext}
          />

          <span>
            <FaAddressCard
              style={{
                color: "black",
                fontWeight: "bolder",
                fontSize: "35px",
                marginRight: "5px",
              }}
              onClick={Handlesubmit}
            />
          </span>
        </div>
      </div>
    </>
  );
}
export default Mycard;
