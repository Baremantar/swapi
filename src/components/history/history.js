import React, { useEffect, useLayoutEffect, useState } from "react";

export default function history({ history, setHistory }) {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    for (const [key, value] of Object.entries(history)) {
      const userName = JSON.parse(value).name;
      historyList.push(userName);
    }
    setHistoryList([...historyList]);
  }, [history]);

  return (
    <div>
      {historyList ? (
        historyList.map((item, index) => {
          return <p key={index}> {item} </p>;
        })
      ) : (
        <></>
      )}
    </div>
  );
}
