import { useState } from "react";
import data from "../accordion/data";
import "./styles.css"

export default function Accord() {
  const [selected, setSelected] = useState(0);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelected(getCurrentId) {
    setSelected(getCurrentId)
  }

  function handleMultiSelected(getCurrentId) {

    const cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
    else cpyMultiple.splice(findIndexOfCurrentId, 1)

    setMultiple(cpyMultiple)

  }
  return <div className="wrapper">
    <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>Enable Multi Select</button>

    <div className="accordion">
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div className="item" key={dataItem.id}>
            <div className="title" onClick={() => enableMultiSelect ? handleMultiSelected(dataItem.id) : handleSingleSelected(dataItem.id)}>
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {enableMultiSelect ? multiple.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div> : selected === dataItem.id && <div className="content">{dataItem.answer}
            </div>}
          </div>
        ))
      ) : <div> No Data found !! </div>}
    </div>
  </div>
}