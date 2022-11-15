import Tippy from "@tippyjs/react";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { Unity, useUnityContext } from "react-unity-webgl";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { SocialItemTypes, socialsData } from "../../constants";
import { useMyWeb3 } from "../../hooks/useMyWeb3";
import styles from "./event.module.scss";
import HomeBanner from "./HomeBanner";

const CustomField = ({
  label,
  iconUri,
  href,
}: {
  label: string;
  iconUri: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      className={clsx(
        styles.iconHoverAnimated,
        "flex bg-[#F7F7F8] rounded-[20px] h-[72px] px-6 items-center cursor-pointer w-full md:max-w-[384px]",
      )}
    >
      <div
        className={clsx(
          styles.image,
          "relative mr-4 flex items-center justify-center",
        )}
      >
        <img
          src="/images/icon-hover-border.svg"
          alt=""
          className={styles.iconHoverBorder}
        />
        <img src={iconUri} alt="" className={styles.iconBackground} />
      </div>
      <span className="text-20/32 md:text-22/32 font-semibold">{label}</span>
    </a>
  );
};
const socials: Array<SocialItemTypes> = [
  socialsData[0],
  { ...socialsData[4], img: "/images/socials/announcement-blue.svg" },
  socialsData[5],
];

const SIZE_RATE = 960 / 600;

const EventCountdownPage = () => {
  const { account } = useMyWeb3();
  const unityRef = useRef<any>(null);
  const [unityFrameHeight, setUnityFrameHeight] = useState<number>(700);

  const { unityProvider, isLoaded, sendMessage } = useUnityContext({
    loaderUrl: "buildUnity/FlyWithFirebird_1.0.1.loader.js",
    dataUrl: "buildUnity/FlyWithFirebird_1.0.1.data",
    frameworkUrl: "buildUnity/FlyWithFirebird_1.0.1.framework.js",
    codeUrl: "buildUnity/FlyWithFirebird_1.0.1.wasm",
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    const newHeight = unityRef?.current?.offsetWidth / SIZE_RATE;
    setUnityFrameHeight(newHeight);
  }
  // sending address to unity
  useEffect(() => {
    if (!account) return;
    sendMessage("JavascriptHook", "SetWalletAddress", account);
  }, [account, isLoaded]);

  useEffect(() => {
    // set default height for window width
    handleResize();
  }, [unityRef]);

  const renderUnityFrame = () => {
    return (
      <>
        {!isLoaded ? (
          <>
            <p
              className={clsx(
                "text-16/20 xs:text-26/32 md:text-40/52 font-semibold mt-5 text-center",
                styles.colorTitle,
              )}
            >
              Play your game in seconds
            </p>
            <div className={clsx(styles.btnPlay, "w-20 xs:w-32 md:w-[160px]")}>
              <img
                src="/images/btn-play.svg"
                alt=""
                className={styles.bgBtnPlay}
              />
              <img
                src="/images/icon-play.svg"
                alt=""
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 xs:w-6 md:w-10"
              />
            </div>
          </>
        ) : null}
        <Unity className="w-full h-full" unityProvider={unityProvider} />
      </>
    );
  };

  return (
    <DefaultLayout>
      <HomeBanner />

      <div
        className={clsx(
          "flex flex-col mx-auto pt-10 max-w-screen-main pb-16 items-center px-5",
          "xs:px-10 md:py-20 md:px-20 lg:px-[160px]",
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 font-tthoves">
          <div className="flex flex-col">
            <span className="text-28/36 xs:text-32/40 md:text-40/52 font-semibold">
              Fly with Firebird
            </span>
            <p className="mt-3 md:mt-2 mb-0 text-14/24 xs:text-16/24 md:text-18/32">
              Let’s warm up with our mini game while waiting for the big news.
              Top 10 scorers will share a prize pool of{" "}
              <span className="rounded-[4px] bg-main p-1 text-white font-semibold">
                $100
              </span>
            </p>
            <div
              className={clsx(
                "bg-black flex items-center rounded-3xl w-full text-white py-[14px] px-4 mt-6",
                "sm:hidden",
              )}
            >
              <img
                src="/images/icon-clock.svg"
                alt=""
                className="w-5 h-5 mr-2"
              />
              <span className="font-semibold text-14/20">
                12:00 UTC Nov 15 ~ 17:00 UTC Nov 19, 2022
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-2 mt-6 md:mt-0">
            <CustomField
              href="/"
              iconUri="/images/icon-hover-search.svg"
              label="How to play"
            />
            <CustomField
              href="/"
              iconUri="/images/icon-hover-gift.svg"
              label="Reward distribution"
            />
          </div>
        </div>

        <div className="hidden sm:flex flex-col space-y-3 md:flex-row w-full mt-2 justify-between items-center">
          <div
            className={clsx(
              "bg-black flex items-center rounded-3xl w-fit text-white py-[10px] px-8",
            )}
          >
            <img src="/images/icon-clock.svg" alt="" className="w-5 h-5 mr-2" />
            <span className="font-semibold text-14/20 sm:text-20/28">
              12:00 UTC Nov 15 ~ 17:00 UTC Nov 19, 2022
            </span>
          </div>
          <div className="flex space-x-5 pt-1">
            {socials.map((item: SocialItemTypes, index: number) => (
              <Tippy key={index} content={item.label} placement="bottom">
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={clsx({ "pointer-events-none": !item.username })}
                >
                  <img src={item.img} alt="" width={40} height={40} />
                </a>
              </Tippy>
            ))}
          </div>
        </div>

        <div
          ref={unityRef}
          className={clsx(
            "w-full h-[180px] mt-12 text-white flex flex-col items-center relative",
            "sm:mt-[100px]",
            styles.gameFrame,
          )}
          style={{
            height: unityFrameHeight,
          }}
        >
          {isMobile ? (
            <p
              className={clsx(
                "text-16/20 font-semibold mt-16 px-14 text-center",
                styles.colorTitle,
              )}
            >
              Please play this game using PC or laptop.
            </p>
          ) : (
            renderUnityFrame()
          )}
        </div>

        <div className="flex flex-col sm:flex-row mt-5 items-center">
          <span className="text-14/24 xs:text-24/32 font-semibold mr-2">
            Powered by
          </span>
          <a
            href="https://miraistudio.games/"
            target={"_blank"}
            rel="norefferer"
          >
            <img
              src="/images/powered-mirai.svg"
              alt=""
              className="max-h-7 xs:max-h-10"
            />
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default EventCountdownPage;
