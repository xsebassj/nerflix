import Container from "../componets/Container/container";
import List from "../componets/List/list";
function Home() {
  return (
    <Container>
      <h2 style={{ color: "white", marginLeft: "20px" }}>Lo Mas Popular</h2>
      <List />
    </Container>
  );
}

export default Home;
