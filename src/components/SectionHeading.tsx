type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-bold uppercase text-aqua">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-black text-navy sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{text}</p> : null}
    </div>
  );
}
