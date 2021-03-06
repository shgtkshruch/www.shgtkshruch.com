/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/css";

import type { Contact } from "../../types/api";

const nthChildAnimation = Array.from("_".repeat(5)).reduce((res, _, i) => {
  const delay = 0.12 * (i + 1);
  res += `
    &:nth-of-type(${i + 1}) {
      animation: fadeInUp 0.8s ${delay}s forwards;
    }
  `;
  return res;
}, "");

const ContactItem = styled.li<{ isShow: boolean }>`
  opacity: 0;
  ${(props) => (props.isShow ? nthChildAnimation : "")}
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const Svg = (props) => {
  const size = `2.2rem`;
  return (
    <svg
      className={css`
        width: ${size};
        height: ${size};
        fill: var(--primary-color);
        transition: fill 0.3s;
        &:hover {
          fill: ${props.color};
        }
      `}
      {...props}
    />
  );
};

const paths = {
  mail:
    "M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z",
  github:
    "M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8",
  twitter:
    "M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z",
  facebook:
    "M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0",
  hatena:
    "M13.647 0C14.947 0 16 1.053 16 2.353v11.294c0 1.3-1.053 2.353-2.353 2.353H2.353C1.053 16 0 14.947 0 13.647V2.353C0 1.053 1.053 0 2.353 0h11.294zm-2.47 9.647c-.52 0-.94.42-.94.94s.42.942.94.942.94-.43.94-.95-.42-.94-.94-.94zm-5.436 1.85c.8 0 1.37-.028 1.72-.08.35-.056.65-.148.88-.275.3-.155.52-.376.68-.66.16-.284.24-.61.24-.986 0-.52-.14-.936-.42-1.247-.28-.32-.66-.49-1.16-.53.44-.12.77-.3.97-.54.21-.23.31-.55.31-.95 0-.32-.07-.59-.2-.84-.14-.24-.33-.43-.59-.58-.23-.13-.49-.21-.81-.27-.31-.05-.86-.08-1.65-.08H3.77v6.99h1.97zm.49-2.79c.47 0 .79.058.96.174.18.12.26.33.26.62 0 .27-.09.46-.28.57-.18.12-.51.17-.96.17h-.67V8.71h.7zm5.77.47V4.47h-1.64v4.707H12zM5.95 6.053c.473 0 .79.054.955.16.163.107.245.29.245.554 0 .253-.087.43-.26.535-.177.103-.498.155-.968.155h-.38V6.053h.41z",
};

const Item: React.FC<{ item: Contact; isShow: boolean }> = ({
  item,
  isShow,
}) => {
  const { title, url, color } = item;

  return (
    <ContactItem isShow={isShow}>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <Svg viewBox="0 0 16 16" color={color}>
          <path d={paths[title]} />
        </Svg>
      </a>
    </ContactItem>
  );
};

export default Item;
