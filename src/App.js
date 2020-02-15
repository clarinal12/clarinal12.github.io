import React, { useState } from "react";
import "./App.scss";

import { NavBar, List, Drawer, Carousel, Icon, WhiteSpace } from "antd-mobile";

const App = () => {
  const [state, setState] = useState({
    open: false,
    data: [
      "AiyWuByWklrrUDlFignR",
      "TekJlZRVCjLFexlOCuWn",
      "IJOtIlfsYdTyaDTRVrLI"
    ],
    imgHeight: 176
  });
  const onOpenChange = () => {
    setState({
      ...state,
      open: !state.open
    });
  };
  const sidebar = (
    <List>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
        (i, index) => {
          if (index === 0) {
            return (
              <List.Item
                key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                multipleLine
              >
                Category
              </List.Item>
            );
          }
          return (
            <List.Item
              key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            >
              Category{index}
            </List.Item>
          );
        }
      )}
    </List>
  );

  return (
    <div>
      <NavBar
        mode="dark"
        leftContent="TAXCCELERATE"
        rightContent={<Icon type="ellipsis" onClick={() => onOpenChange()} />}
      />
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        contentStyle={{ color: "#A6A6A6", textAlign: "center", paddingTop: 42 }}
        sidebar={sidebar}
        open={state.open}
        onOpenChange={() => onOpenChange()}
        enableDragHandle
      >
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => console.log("slide to", index)}
        >
          {state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: state.imgHeight
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  setState({ ...state, imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
        <WhiteSpace />
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => console.log("slide to", index)}
        >
          {state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: state.imgHeight
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  setState({ ...state, imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
        <WhiteSpace />
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => console.log("slide to", index)}
        >
          {state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: state.imgHeight
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  setState({ ...state, imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
      </Drawer>
    </div>
  );
};

export default App;
