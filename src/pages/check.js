import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Title from "@/components/title";

function Check() {
  const router = useRouter();

  return (
    <>
      <Desktop1 {...desktop1Data} />
    </>
  );
}
export default Check;

function Desktop1(props) {
  const {
    text1,
    text2,
    text3,
    text4,
    number1,
    number2,
    number3,
    number4,
    text5,
    text6,
    ice21,
    x411Gcc44111,
  } = props;
  return (
    <div className="container-center-horizontal">
      <Title />
      <div className="desktop-1 screen">
        <div className="overlap-group6">
          <h1 className="notosans-bold-white-60px">주문 관리</h1>
        </div>
        <div className="flex-row">
          <div className="overlap-group1">
            <Link legacyBehavior href={"/"}>
              <div className="rectangle-17-1">
                <div className="text-2 notosans-bold-black-30px">{text1}</div>
                <div className="number-1 notosans-bold-black-30px">
                  {number1}
                </div>
              </div>
            </Link>
            <Link legacyBehavior href={"/start"}>
              <div className="rectangle-18">
                <div className="text-4 notosans-bold-black-30px">{text4}</div>
                <div className="number-1 notosans-bold-black-30px">
                  {number2}
                </div>
              </div>
            </Link>
            <Link legacyBehavior href={"/complete"}>
              <div className="rectangle-19">
                <div className="text-2 notosans-bold-black-30px">{text2}</div>
                <div className="number-2 notosans-bold-black-30px">
                  {number3}
                </div>
              </div>
            </Link>
            <Link legacyBehavior href={"/check"}>
              <div className="rectangle-20-1">
                <div className="text-3 notosans-bold-black-30px">{text3}</div>
                <div className="number-3 notosans-bold-black-30px">
                  {number4}
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-col">
            <div className="overlap-group-container">
              <div className="overlap-group2">
                <div className="text-5 notosans-bold-black-60px">{text5}</div>
                <div className="text-6 notosans-bold-black-30px">{text6}</div>
                <p className="ice-2-1 notosans-bold-black-25px-2">{ice21}</p>
                <p className="x411-gcc-4-411 notosans-normal-black-25px-22">
                  {x411Gcc44111}
                </p>
              </div>
            </div>
            <img className="line-1" src="imgs/line-1.png" alt="line-1" />
            <div className="overlap-group-container-1">
              <div className="overlap-group-1">
                <div className="text-1-1 notosans-bold-black-60px">{text5}</div>
                <div className="text-1-2 notosans-bold-black-30px">{text6}</div>
                <p className="ice-2 notosans-normal-black-25px-22">{ice21}</p>
                <p className="x411-gcc-4-411-1 notosans-normal-black-25px-22">
                  {x411Gcc44111}
                </p>
              </div>
            </div>
            <img className="line-1" src="imgs/line-1.png" alt="line-1" />
            <div className="overlap-group-container-2">
              <div className="overlap-group-1">
                <div className="text-1-1 notosans-bold-black-60px">{text5}</div>
                <div className="text-1-2 notosans-bold-black-30px">{text6}</div>
                <p className="ice-2 notosans-normal-black-25px-22">{ice21}</p>
                <p className="x411-gcc-4-411-2 notosans-normal-black-25px-22">
                  {x411Gcc44111}
                </p>
              </div>
            </div>
            <img className="line-1" src="imgs/line-1.png" alt="line-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

const desktop1Data = {
  text1: "접수 대기",
  text2: "조리 완료",
  text3: "주문 조회",
  text4: "조리 시작",
  number1: "3",
  number2: "3",
  number3: "3",
  number4: "3",
  text5: "10:38",
  text6: "[메뉴 5개] 12000원",
  ice21: "(Ice)아메리카노 2개 / 딸기 라떼 1개 / (Hot) 카페 모카 2개",
  x411Gcc44111: "광주광역시 남구 411 콘텐츠큐브(GCC 4층) 411",
};
