import Container from "../componets/Container/container";
import Carousel from "../componets/Carousel/carousel";
function Home() {
  return (
    <Container>
      <div
        style={{
          backgroundColor: "#000",
          minHeight: "100vh",
          paddingBottom: "50px",
        }}
      >
        <Carousel />
      </div>
    </Container>
  );
}

export default Home;
