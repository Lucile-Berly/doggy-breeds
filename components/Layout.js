const layoutStyle = {
  margin: 20,
  padding: 20
}

export default function Layout(props) {
  return <div style={layoutStyle}>{props.children}</div>
}
