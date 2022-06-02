import React from "react";
import "./message.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

function Message() {
  return (
    <div>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <h1 className="message__title" style={{ fontSize: "60px" }}>   
              Hello World 👋
            </h1>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <h1 className="message__title" style={{ fontSize: "40px" }}>
              Welcome to my own planet 🌎 🚀
            </h1>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <h1 className="message__title" style={{ fontSize: "35px" }}>
              Where you can see my innovations ✨
            </h1>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <h1 className="message__title" style={{ fontSize: "40px" }}>
              <Animator animation={MoveIn(-1000, 0)}>Developing 🧑🏽‍💻</Animator>
              <Animator animation={MoveIn(1000, 0)}>FrontEnd 🖌</Animator>
                - Carlos Rivera specializes in -
              <Animator animation={MoveOut(1000, 0)}>Web 💻</Animator>
              <Animator animation={MoveOut(-1000, 0)}>Apps 📱</Animator>
            </h1>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <h1 className="message__title" style={{ fontSize: "40px" }}>Skip to the next LEVEL👉🏽</h1>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default Message;
