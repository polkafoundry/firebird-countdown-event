import clsx from "clsx";
import { useCountDown } from "../../hooks/useCountDown";
import styles from "./event.module.scss";

type TimeFieldProps = { value: string; label: string };

const TimeField = ({ value, label }: TimeFieldProps) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <span
          className={clsx(
            "text-[64px] leading-[80px] font-normal font-oswald w-[64px]",
            "xs:text-[100px] xs:leading-[100px] xs:w-[100px]",
            "lg:text-[200px] lg:leading-[200px] lg:w-[200px]",
          )}
        >
          {value}
        </span>
        <span className="text-main mt-2 md:mt-10 text-10/32 xs:text-16/24 lg:text-20/28 uppercase font-semibold">{`[ ${label} ]`}</span>
      </div>
    </>
  );
};

const ColonField = () => (
  <span
    className={clsx(
      "text-[60px] leading-[60px] pt-2",
      "xs:text-[80px] xs:leading-[80px]",
      "lg:text-[120px] lg:leading-[120px] lg:pt-10",
      styles.textStroke,
    )}
  >
    :
  </span>
);

const HomeBanner = () => {
  // const { day, hour, minute, second } = useCountDown(new Date("11/20/2022"));
  const { day, hour, minute, second } = useCountDown(
    new Date(Date.UTC(2022, 10, 20, 12, 0, 0)),
  );

  return (
    <div
      className={clsx(
        "flex flex-col w-full h-screen min-h-[550px] xs:min-h-[600px] md:min-h-[800px] text-white justify-center items-center relative",
        styles.banner,
      )}
    >
      <span
        className={clsx(
          "text-40/52 font-semibold",
          "xs:text-56/60 md:text-80/80",
        )}
      >
        Phoenix Cup
      </span>
      <span
        className={clsx(
          "text-14/32 tracking-widest font-semibold uppercase",
          "xs:text-20/32 md:text-24/32 md:mt-2",
        )}
      >
        🔥 coming soon 🔥
      </span>
      <div className="flex space-x-1.5 md:space-x-8 mt-10">
        <TimeField label="days" value={day} />
        <ColonField />

        <TimeField label="HOURS" value={hour} />
        <ColonField />

        <TimeField label="MINUTES" value={minute} />
        <ColonField />

        <TimeField label="SECONDS" value={second} />
      </div>
      <span className="text-14/32 xs:text-18/32 lg:text-24/32 tracking-widest mt-5 md:mt-7 font-semibold">
        [ 12 UTC - Sunday, 20th Nov 2022 ]
      </span>

      <img
        src="/images/scoll-down.svg"
        className={clsx("absolute right-1/2 bottom-10", styles.scrollDown)}
        alt=""
      />
    </div>
  );
};

export default HomeBanner;
