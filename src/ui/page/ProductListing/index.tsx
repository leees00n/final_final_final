import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Ac1 from "./img1.jpg";
import "./index.css";
import { Button, Container, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ProductListData } from "../../../data/ProductData";
import MockData from "./response2.json";
import BasicNavbar from "../../component/NavbarTop";
import ProductDetails from "../ProductDetails";
import { Link } from "react-router-dom";
import {
  getMockProductResource,
  getProductResource,
  getProductResourceLowToHigh,
} from "../../../resource/GetProductResource";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import Footer from "../../component/Footer";
import * as config from "./config";

// Components
import VideoPlayer from "./videoPlayer/VideoPlayer";
//import SignIn from './SignIn';
//import StickerPicker from './StickerPicker';
//import RaiseHand from './RaiseHand';
import {
  FirstCarousel,
  ThirdCarousel,
  FIRST_CAROUSEL_SIZE,
  THIRD_CAROUSEL_SIZE,
} from "../../component/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ProductListing() {
  const [productListData, setProductListData] = useState<
    ProductListData[] | undefined
  >(undefined);

  const sortProductLowToHigh = () => {
    setProductListData((prev) => {
      if (!prev) return prev;
      return [...prev].sort((a, b) => a.price - b.price);
    });
  };

  const sortProductHighToLow = () => {
    setProductListData((prev) => {
      if (!prev) return prev;
      return [...prev].sort((a, b) => b.price - a.price);
    });
  };

  //여기서부터 추가하기
  const goToVideo = () => {
    window.location.href = "https://live.xn--1-3x5ew15b.shop	";
  };

  const goToSale = () => {
    window.location.href = "https://special.xn--1-3x5ew15b.shop	";
  };

  const goToChatbot = () => {
    window.location.href = "https://chatbot.xn--1-3x5ew15b.shop";
  };

  ////여기까지
  useEffect(() => {
    if (productListData === undefined) {
      setProductListData(getMockProductResource());
    }
  }, [productListData]);

  return (
    <>
      <BasicNavbar />
      {/* 배너 섹션 */}
      <div
        style={{
          backgroundColor: "#F2C1C1",
          alignItems: "center",
          padding: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            margin: "20px auto",
            alignItems: "center",
            justifyContent: "center",
            width: FIRST_CAROUSEL_SIZE.width,
          }}
        >
          {/* top 배너 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: FIRST_CAROUSEL_SIZE.height,
            }}
          >
            <FirstCarousel />
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* 라이브커머스 버튼 */}
                <Button
                  type="button"
                  className="icon"
                  aria-label="Left Align"
                  style={{
                    backgroundColor: "#F2FFFF",
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={goToVideo} // 버튼 클릭 시 goToVideo 함수 실행
                >
                  <p
                    style={{
                      fontSize: 18,
                      position: "relative",
                      fontFamily: "GmarketSans",
                      marginBottom: 0,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {`[방송중🚨] 오늘의 대박 특가할인! 놓치지 마세요!\n서둘러 클릭!💥`}
                  </p>
                </Button>
                <VideoPlayer playbackUrl={config.PLAYBACK_URL} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 20,
                width: THIRD_CAROUSEL_SIZE.width,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: THIRD_CAROUSEL_SIZE.height,
                }}
              >
                <ThirdCarousel />
              </div>
              {/* 버튼 섹션 */}
              <div
                style={{
                  margin: "auto 8px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: 50,
                }}
              >
                {/* 특가 버튼 */}
                <Button
                  type="button"
                  className="icon"
                  aria-label="Left Align"
                  style={{
                    backgroundColor: "#F2FFFF",
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={goToSale} // 버튼 클릭 시 goToVideo 함수 실행
                >
                  <p
                    style={{
                      fontSize: 18,
                      position: "relative",
                      fontFamily: "GmarketSans",
                      marginBottom: 0,
                    }}
                  >
                    ⏰ [파격 세일] Click!🔥{" "}
                  </p>
                </Button>
                {/* 챗봇 */}
                <Button
                  type="button"
                  className="icon"
                  aria-label="Left Align"
                  style={{
                    backgroundColor: "#F2D9D9",
                    border: "1px solid #F23030",
                    borderRadius: 20,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={goToChatbot} // 버튼 클릭 시 goToVideo 함수 실행

                >
                  <span>
                    <img
                      className="chatbot"
                      src="chatbot.png"
                      alt="chatbot"
                      style={{ width: 30, height: 30 }}
                    />
                  </span>
                  <p
                    style={{
                      fontSize: 18,
                      position: "relative",
                      fontFamily: "GmarketSans",
                      color: "#F23030",
                      marginBottom: 0,
                    }}
                  >
                    [chatbot] 무엇이든 물어보세요
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"sorting"}>
        <DropdownButton id="sorting-button" title="Sort By">
          <Dropdown.Item onClick={sortProductLowToHigh}>
            Price: Low to High
          </Dropdown.Item>
          <Dropdown.Item onClick={sortProductHighToLow}>
            Price: High to Low
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <Container className={"product-container"}>
        {productListData?.map((value) => {
          return (
            <Row xs={1} md={2} lg={3} className="g-4">
              <Col className={"column1"}>
                <Card key={value.product_id} className={"each-card"}>
                  <Card.Img
                    className={"card-img"}
                    variant="top"
                    src={value.image_url}
                  />
                  <Card.Body>
                    <Card.Title>{value.product_name}</Card.Title>
                    <Card.Text>
                      🎐${value.price}
                      {value.hasStock ? (
                        <p>Only a few stock left</p>
                      ) : (
                        <p>Sold out</p>
                      )}
                    </Card.Text>
                    {/*<a href="#" className="btn btn-primary" onClick={moveToProductDetails}>Details</a>*/}
                    <Link to={`/product-detail`} state={{ product: value }}>
                      <a href="#" className="btn btn-primary">
                        Details
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
      <Footer />
    </>
  );
}
