function SocialComponent({ children, href, text }) {
  return (
    <li className="mr-5 text-lg shrink-0">
      <a className="block hover:text-slate-200"
      href={href} target="_blank" rel="noreferrer noopener"
      aria-label="opens in a new tab" title={text}>
        <span className="sr-only">{text}</span>
        {children}
      </a>
    </li>
  )
}
export default SocialComponent