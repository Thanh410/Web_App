import Link from "next/link";
import "./Button.scss";

function Button(props: { text: string; url: string }) {
  return (
    <Link href={props.url}>
      <button className="button">{props.text}</button>
    </Link>
  );
}

export default Button;
