export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Coming Soon...</h1>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#0B1F3B", // dark blue
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: "48px",
    fontWeight: 600,
    letterSpacing: "2px",
  },
};
