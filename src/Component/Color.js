import "./color.css";

function getHexColor(colorStr) {
  var a = document.createElement("div");
  a.style.color = colorStr;
  var colors = window
    .getComputedStyle(document.body.appendChild(a))
    .color.match(/\d+/g)
    .map(function (a) {
      return parseInt(a, 10);
    });
  document.body.removeChild(a);
  return colors.length >= 3
    ? "#" +
        ((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2])
          .toString(16)
          .substr(1)
    : false;
}

export default function Color(props) {
  console.log(props.ColorName);
  const name = props.ColorName;
  const hexa = getHexColor(props.ColorName);
  return (
    <div className="main">
      <div className="body" style={{ backgroundColor: name }}></div>
      <div className="footer">
        <p className="hexacode">{hexa.toUpperCase()}</p>
        <p className="colorName" style={{ color: name }}>
          {name.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
