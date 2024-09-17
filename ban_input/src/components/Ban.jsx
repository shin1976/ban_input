import React from 'react'

const Ban = () => {
    const dan = ["一", "二", "三", "四", "五", "六", "七", "八", "九", ""];
  return (
    <div className="container">
    <div id="ban">
    <table className="ban_table">
      {Array.from({ length: 10 }).map((_, i) => (
        <tbody key={i}>
        <tr >
          {Array.from({ length: 10 }).map((_, j) => {
            const id = `b${9 - j}${i}`;
            let content = "";
            let className = "";
            let style = {};

            if (i === 0) {
              if (j === 9) {
                content = " ";
                className = "suji_num";
              } else {
                content = 9 - j;
                className = "suji_num";
              }
            } else if (j === 9) {
              content = dan[i - 1];
              className = "dan_num";
            } else if (i === 9 && j === 8) {
              className = "border-top border-start border-bottom border-end s_grid border-secondary";
              style.backgroundColor = "#f5deb3";
            } else if (i === 9) {
              className = "border-top border-start border-bottom s_grid border-secondary";
              style.backgroundColor = "#f5deb3";
            } else if (j < 8) {
              className = "s_grid border-top border-start border-secondary";
              style.backgroundColor = "#f5deb3";
            } else {
              className = "s_grid border-top border-start border-end border-secondary";
              style.backgroundColor = "#f5deb3";
            }

            return (
              <td key={id} id={id} className={className} style={style}>
                {content}
              </td>
            );
          })}
        </tr>
        </tbody>
      ))}
    </table>
  </div>
  </div>
  )
}

export default Ban