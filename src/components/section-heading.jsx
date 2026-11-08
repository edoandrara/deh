export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false
}) {
  return (
    <div className={`section-heading section-heading-${align}${dark ? ' section-heading-dark' : ''}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
