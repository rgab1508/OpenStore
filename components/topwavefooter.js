import Image from "next/image";

export default function TopWaveFooter() {
  return (
    <div className="outer_box_for_waves">
      <section id="wavesbelownavbar">
        <Image
          id="waveanimate"
          src="https://res.cloudinary.com/dnv3ztqf1/image/upload/v1605866350/Images%20for%20UNSCRIPT%20ROOKIE/logos/upperwave_dizfuw.svg"
          alt="bottom waves"
          width="100%"
          height="100%"
        />
      </section>
    </div>
  );
}
