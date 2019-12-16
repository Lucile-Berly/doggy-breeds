const layoutStyle = {
  margin: 10,
  padding: 10,
  fontFamily: "sans-serif",
  listStyleType: "none",
  textDecoration: "none",
  textAlign: "center"
}

export default function Layout(props) {
  return <div style={layoutStyle}>{props.children}</div>
}
